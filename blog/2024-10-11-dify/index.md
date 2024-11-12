---
image: ./dify.jpeg
published: true
slug: dify
description: After using Dify.AI extensively for building a demo, here are six key improvements I'd like to see in this powerful prompt engineering tool based on my hands-on experience.
---

import Figure from "@site/src/components/Figure";

# 6 Things I Would Change About Dify.AI

<Figure src={require("./dify.jpeg").default} caption="Screenshot of a workflow on our self-hosted Dify instance" />

To be clear, [Dify](https://dify.ai) is one of the most capable, well-designed,
and useful prompt engineering tools I have used to date. I've tried code-only solutions
such as LangChain and other no-code tools such as LangFlow, but Dify currently takes
the cake. I've also briefly tried others such as PromptLayer, but when it comes
to building [agentic workflows](https://www.youtube.com/watch?v=sal78ACtGTc),
which I believe is the future of AI automation, Dify feels like a better fit. In
particular, I appreciate its great UI design, workflow editor, and self-hosting
option. But there is **always** room for improvement. Here are the things I would
change about dify.ai today.

1. When testing workflows from the studio, it would be really nice to be able to select
   inputs from previous runs to be used as inputs for testing.

<Figure
  src={require("./reuse-inputs.jpeg").default}
  caption="It would be really nice to just have a button that copies the highlighted inputs (as pictured) from a previous run into a new run"
/>

2. Versions of a workflow should persist on the server. Right now, I'm scared to
   close a tab since I'll lose any previous versions of the workflow I'm working
   on. If I am making experimental changes, this can be devastating if I don't
   remember how the workflow previously worked.

<Figure
  src={require("./persisted-versions.jpeg").default}
  caption="Right now, Dify persists versions in the browser so it's lost when the tab is closed. Dify even explains that your work will be lost when leaving the editor."
/>

3. When testing changes to a workflow, I would love to have a version of a
   workflow that could be published for testing so production remains untouched. It would be even better if it somehow integrated with CI platforms so you could have a team of developers working on their own version of the workflow. This would eventually mean you'd need some sort of integration with Git so you can branch, push, and test changes to the workflow. On that note, it would also be great to be able to author Dify workflows as code, and have that bi-directionally sync with the UI version of Dify. This would be amazing for non-developers and developers to collaborate on agentic workflows.

<Figure
  src={require("./branches.jpeg").default}
  caption="Right now, you can only publish one version of a workflow to be accessed by API. It would be ideal to instead publish multiple versions for testing and allow the API to route across different versions to be used in local testing or even CI environments"
/>

4. Managing many workflows can be extremely confusing, especially when you clone
   a workflow for testing, which could be fixed by adding support for (3). Also, the tile view is not a compact and easy way to scan all the workflows. It would be really nice if there were a table view that could be sorted, searched, filtered, etc.

<Figure
  src={require("./studio.jpeg").default}
  caption="The current studio view shows workflows as tiles with basic tag filtering. This can get messy and hard to navigate as the number of workflows grows, especially when workflows are cloned for testing. A table view with more robust filtering and sorting would make it much easier to manage."
/>

5. Generated API documentation for the workflow would be nice to save time when integrating a workflow into a codebase.

<Figure
  src={require("./api-docs.jpeg").default}
  caption="Currently, Dify provides some static code examples that don't update based on your workflow's inputs and outputs. Having dynamically generated API documentation would make it much easier to integrate workflows into applications."
/>

6. API Keys are extremely annoying to handle when you have many workflows.

<Figure
  src={require("./api-keys.jpeg").default}
  caption="Currently, you need to create a separate API key for each workflow, which becomes extremely messy when managing 10+ workflows since keys aren't easily identifiable as belonging to specific workflows. Having a single master API key with workflow identifiers in the API calls would be much simpler to manage and organize."
/>

Overall, there's a lot of room for improvement in Dify.ai, but it's important to remember that it's still in beta. The platform already offers an impressive set of features and a unique approach to building LLM-powered applications. I'm confident that many of these pain points will be addressed as the platform matures.

Some of these suggestions, particularly the bi-directional sync between code and UI, would be technically challenging to implement. However, features like this would significantly differentiate Dify from its competitors and create a truly unique development experience that bridges the gap between technical and non-technical users.

If these improvements were implemented, particularly around version control, testing workflows, and API management, it would dramatically improve the developer experience and make Dify an even more compelling platform for building production-grade AI applications. The potential is already there - these enhancements would just help unlock it further.
