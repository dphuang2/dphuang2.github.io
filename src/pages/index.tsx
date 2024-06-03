import CodeBlock from "@theme/CodeBlock";
import LayoutProvider from "@theme/Layout/Provider";

export default function Home(): JSX.Element {
  return (
    <LayoutProvider>
      <main>
        <body>
          <div className="min-h-screen bg-gray-50 py-8 flex flex-col justify-center relative overflow-hidden lg:py-12">
            <img
              src="/img/beams.jpg"
              alt=""
              className="fixed top-48 left-1/2 -translate-x-2/3 -translate-y-1/2 max-w-none"
              width={1308}
            />
            <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-top [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            <div className="relative w-full px-6 py-12 bg-white shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-16 lg:pb-28">
              <div className="mx-auto max-w-prose">
                <img
                  src="/img/dylan.png"
                  alt="Dylan"
                  className="w-20 h-20 rounded-full border-slate-700 mb-1"
                />
                <h1 className="text-4xl italic font-bold tracking-tighter">
                  Hey There!
                </h1>
                <div className="mt-8">
                  <About />
                </div>
              </div>
            </div>
          </div>
        </body>
      </main>
    </LayoutProvider>
  );
}

function About() {
  return (
    <div>
      <p className="text-lg">
        I'm Dylan, a passionate software engineer and avid learner with a
        romantic relationship with entrepreneurship.
      </p>
      <h3>Here are my proudest achievements:</h3>
      <ul>
        <li>
          2023 - Wrote technical articles that reached the front page of Hacker
          News{" "}
          <a
            target="_blank"
            href="https://news.ycombinator.com/item?id=37078606"
          >
            [Hacker News Thread]
          </a>
        </li>
        <li>
          2023 - Sold three different software products to real recurring
          customers in the same year
        </li>
        <li>2022 - Ran a half marathon</li>
        <li>2022 - Broke 100 in golf</li>
        <li>2022 - Started a company to sell innovative software</li>
        <li>2022 - Interviewed at YCombinator as a solo founder</li>
        <li>2022 - Quit my job</li>
        <li>
          2020 - Promoted to Senior Software Engineer nine months after starting
          my first job out of college at C3.ai
        </li>
        <li>
          2020 - Booked round-trip flights to Hawaii for only 24,000 credit card
          points
        </li>
        <li>
          2019 - Received a cease and desist letter for a Shopify App Store side
          project
        </li>
        <li>
          2019 - Graduated with a B.S. and M.Eng. in Computer Engineering from
          UIUC in four years
        </li>
        <li>2019 - Worked at a boba shop for a semester in college</li>
        <li>
          2019 - Received 4 software engineering job offers from Benchling,
          Facebook, AppDynamics, and C3.ai before graduating
        </li>
        <li>2019 - Created a robotic caricature artist for Senior Design</li>
        <li>
          2018 - Authored a research paper as an undergraduate at UIUC{" "}
          <a
            target="_blank"
            href="https://dl.acm.org/doi/abs/10.1145/3173574.3173590"
          >
            [Paper]
          </a>
        </li>
        <li>
          2018 - Lead climbed for the first time outdoors at Horseshoe Canyon
          Ranch in Arkansas
        </li>
        <li>
          2017 - Won a game of HQ Trivia using AI{" "}
          <a
            target="_blank"
            href="https://github.com/dphuang2/dphuang2.github.io/blob/v2/_posts/2018-01-10-hqtrivia.markdown"
          >
            [Blog Post]
          </a>
        </li>
        <li>
          2016 - Learned how to snowboard despite suffering a severe concussion
          the first time I tried snowboarding
        </li>
        <li>2016 - Hatched a Gyrados in Pokemon Go</li>
        <li>
          2016 - Built a website with over 210,000 users, which required me to
          dodge IP range blocks from Niantic{" "}
          <a
            target="_blank"
            href="https://www.reddit.com/r/pokemongodev/comments/4wn8sa/wwwpogobagme_a_seriously_powerful_pokémon_go"
          >
            [Reddit Launch Thread]
          </a>
        </li>
        <li>2016 - Won an Intel-sponsored prize at Hack Illinois</li>
        <li>2015 - Played two varsity sports in high school</li>
        <li>2013 - Achieved Platinum rank (top 5%) in League of Legends</li>
        <li>2013 - Awarded a cash prize for filmmaking</li>
      </ul>
      <h3>Here is what colleagues have said about me:</h3>
      <p>
        <blockquote>
          I have no hesitation in saying that Dylan exhibited exceptional drive,
          competency and leadership abilities. I wholeheartedly recommend him
          and would welcome the opportunity to work together again. Dylan would
          be a great asset for any organization!
          <p>
            — <a href="https://www.linkedin.com/in/cherifjazra">Cherif Jazra</a>
          </p>
        </blockquote>
      </p>
      <p>
        <blockquote>
          With organizational growth and new projects, it was an easy decision
          for me to make Dylan the technical lead for a new engineering team in
          my org, working on a greenfield project at the intersection of data
          infrastructure and machine learning...I would without a doubt work
          again with Dylan, and would highly recommend him to anyone looking for
          a highly skilled engineering leader!
          <p>
            —{" "}
            <a href="https://www.linkedin.com/in/manastalukdar/">
              Manas Talukdar
            </a>
          </p>
        </blockquote>
      </p>
    </div>
  );
}
