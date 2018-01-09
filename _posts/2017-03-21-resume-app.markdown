---
layout: post
title: "Resume Database Web App"
date: 2017-3-21
location: Champaign, Illinois
description: 
techs:
  rails-plain-wordmark colored:
  ruby-plain-wordmark colored:
image: /assets/image/resume-app.png
image_webp: /assets/image/webp/resume-app.webp
---

## Background
---
I will always take any opportunity that I can find to make a web app. 
So when I found out that my fraternity did not have a web accessible resume database, I
took the opportunity to make one myself.

## Goals/Functionalities
---
- Friendly interface 
- Persistent resume files on new deploys
- Resumes can be downloaded
- Only users with a code can sign up for an account
- Accounts
  - Roles ie. Brother, Admin, Employer
    - Brothers:
      - view other resumes that are not private
      - upload own resume
      - make own resume private
    - Admin: 
      - see all resumes
      - delete users
      - change role of users
    - Employer:
      - see all resumes

## Technologies
---
- [rails](https://github.com/rails/rails) - Web Framework
- [paperclip](https://github.com/thoughtbot/paperclip) - File Attachments
- [devise](https://github.com/plataformatec/devise) - Authentication
- [pundit](https://github.com/elabs/pundit) - Authorization
- Amazon S3 - File Storage

### Accounts
---
To begin, I needed to implement a complete account authentication and
authorization system. To do this, I used a [boilerplate rails app](https://github.com/RailsApps/rails-devise-pundit) from github
that implements basic user controller actions, sign up/in flow, and role-based
authorization. I thought it would be a waste of my time to implement a complete
role-based authentication and authorization app when someone has already laid
the foundation of an app with that purpose. Why would I try to invent the wheel
again, right?

The next step would be to customize this app so that it had the roles that I
wanted as well as the code-based sign up functionality.
```ruby
# app/models/user.rb
enum role: [:employer, :brother, :admin]
after_initialize :set_default_role, :if => :new_record?

def set_default_role
  self.role ||= :brother
end
```

Then I wanted to implement the code-based sign up so the first step was to put a
code in the secrets.yml file. For development, I simply just put in a two-letter
easy-to-type code. But for production, I planned on grabbing the secret code
from environment variables.
```yml
development:
  brother_code: tt
production:
  brother_code: <%= ENV["BROTHER_CODE"] %>
```

After adding the code, the next step was to customize the logic for signing up.
The sign up action for devise is under the "create" function in the
registrations' controller. To override the "create" function, I
had to first change some routes.
```ruby
# config/routes.rb
# Not sure why I need to skip the sessions controller
# but it fixed duplicate routes
devise_for :users, skip: [:registrations, :sessions]
devise_for :users, controllers: {
registrations: 'my_devise/registrations'
}
```

To then override the devise registration controller action for "create", I created a folder
called my_devise which would contain a registration controller that simply
extends the base registration controller and has an additional if-else statement
that checks the brother code in the Rails secret.yml file. 
```ruby
# controllers/my_devise/registrations_controller.rb
class MyDevise::RegistrationsController < Devise::RegistrationsController
  # POST /resource
   def create
     if params[:user][:code] == Rails.application.secrets.brother_code
       super
     else 
       redirect_to new_user_registration_path, :alert => "Incorrect Code"
     end
   end
end
```

And lastly, I had to add the brother code text field to the sign up.
```erb
<!--views/devise/registrations/new.html.erb-->
...
<div class="form-group">
  <%= f.label :code %>
  <%= f.password_field :code, class: 'form-control' %>
</div>
...
```

And voila! I now had the roles that I wanted and code-based sign up implemented.
And with the addition of pundit and some authorization logic put into
app/policies/UserPolicy.rb, I was able to implement the authorization of certain
pages based on roles.

### File Attachment
---

The next hard step was to implement file-attachments for each user. Fortunately,
there is an extremely convenient ruby gem called 'paperclip' that helps you add
a file to an already-existing model. This is easily done with a few lines of
code and one migration.

First I just had to add the paperclip gem to my Gemfile and then add these two
lines of code to my user model.
```ruby
# app/models/user.rb
has_attached_file :document, styles: {thumbnail: ["40x40#", :png]}
validates_attachment :document, content_type: { content_type: "application/pdf" }
```

And with a simple form, users can now just upload a pdf to the website!
```erb
<div class="form-group">
  <label for="user_document"> <%= @user.document? ? @user.document_file_name.to_s : "Document" %> </label>
  <%= f.file_field :document, class: 'form-control' %>
</div>
```

### Surviving New Deployments
---
Now it was only until I actually pushed this deployment to production did I
realize that the files that are uploaded through paperclip don't survive new
deployments! This was a big issue because if the website had to be updated and
everyone had already uploaded all their resumes, all the file storage would be lost
and everyone would have to re-upload their resume. Thankfully, paperclip has an
easy-to-do solution with their configuration to use Amazon S3 Buckets for file-storage
instead of locally cached files on the web-server itself.

To do this, all I had to add was this configuration to production.rb file:
```ruby
# config/environments/production.rb
# Amazon S3 Bucket config
config.paperclip_defaults = {
  storage: :s3,
  s3_credentials: {
    bucket: ENV.fetch('S3_BUCKET_NAME'),
    access_key_id: ENV.fetch('AWS_ACCESS_KEY_ID'),
    secret_access_key: ENV.fetch('AWS_SECRET_ACCESS_KEY'),
    s3_region: ENV.fetch('AWS_REGION'),
  },
  s3_host_name: "s3-#{ENV['AWS_REGION']}.amazonaws.com"
}
```

### Conclusion
---
Now aside from the specific additional routes, controller logic, and html.erb
code, this concludes a fairly complete implementation of a resume database that
can easily be deployed to Heroku!

[Link to Github Repo](https://github.com/dphuang2/kappathetatau)

