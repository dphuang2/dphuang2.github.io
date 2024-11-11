import LayoutProvider from "@theme/Layout/Provider";
import { Content } from "@theme/BlogPostPage";
import PaperPage from "./PaperPage";

interface Props {
  readonly recentPosts: readonly { readonly content: Content }[];
}

export default function Home({ recentPosts }: Props): JSX.Element {
  return (
    <LayoutProvider>
      <main>
        <PaperPage>
          <div className="mx-auto max-w-prose">
            <img
              src="/img/dylan.avif"
              alt="Dylan"
              className="w-20 h-20 rounded-full border-slate-700 mb-1"
            />
            <h1 className="text-4xl italic font-bold tracking-tighter">
              Hey There!
            </h1>
            <div className="mt-8">
              <About recentPosts={recentPosts} />
            </div>
          </div>
        </PaperPage>
      </main>
    </LayoutProvider>
  );
}

interface Achievement {
  year: number;
  description: string;
  link?: {
    text: string;
    url: string;
  };
}

const achievements: Achievement[] = [
  {
    year: 2023,
    description:
      "Wrote technical articles that reached the front page of Hacker News",
    link: {
      text: "[Hacker News Thread]",
      url: "https://news.ycombinator.com/item?id=37078606",
    },
  },
  {
    year: 2023,
    description:
      "Sold three different software products to real recurring customers in the same year",
  },
  { year: 2022, description: "Ran a half marathon" },
  { year: 2022, description: "Broke 100 in golf" },
  { year: 2022, description: "Started a company to sell innovative software" },
  { year: 2022, description: "Interviewed at YCombinator as a solo founder" },
  { year: 2022, description: "Quit my job" },
  {
    year: 2020,
    description:
      "Promoted to Senior Software Engineer nine months after starting my first job out of college at C3.ai",
  },
  {
    year: 2020,
    description:
      "Booked round-trip flights to Hawaii for only 24,000 credit card points",
  },
  {
    year: 2019,
    description:
      "Received a cease and desist letter for a Shopify App Store side project",
  },
  {
    year: 2019,
    description:
      "Graduated with a B.S. and M.Eng. in Computer Engineering from UIUC in four years",
  },
  {
    year: 2019,
    description: "Worked at a boba shop for a semester in college",
  },
  {
    year: 2019,
    description:
      "Received 4 software engineering job offers from Benchling, Facebook, AppDynamics, and C3.ai before graduating",
  },
  {
    year: 2019,
    description: "Created a robotic caricature artist for Senior Design",
  },
  {
    year: 2018,
    description: "Authored a research paper as an undergraduate at UIUC",
    link: {
      text: "[Paper]",
      url: "https://dl.acm.org/doi/abs/10.1145/3173574.3173590",
    },
  },
  {
    year: 2018,
    description:
      "Lead climbed for the first time outdoors at Horseshoe Canyon Ranch in Arkansas",
  },
  {
    year: 2017,
    description: "Won a game of HQ Trivia using AI",
    link: {
      text: "[Blog Post]",
      url: "https://github.com/dphuang2/dphuang2.github.io/blob/v2/_posts/2018-01-10-hqtrivia.markdown",
    },
  },
  {
    year: 2016,
    description:
      "Learned how to snowboard despite suffering a severe concussion the first time I tried snowboarding",
  },
  { year: 2016, description: "Hatched a Gyrados in Pokemon Go" },
  {
    year: 2016,
    description:
      "Built a website with over 210,000 users, which required me to dodge IP range blocks from Niantic",
    link: {
      text: "[Reddit Launch Thread]",
      url: "https://www.reddit.com/r/pokemongodev/comments/4wn8sa/wwwpogobagme_a_seriously_powerful_pokémon_go",
    },
  },
  { year: 2016, description: "Won an Intel-sponsored prize at Hack Illinois" },
  { year: 2015, description: "Played two varsity sports in high school" },
  {
    year: 2013,
    description: "Achieved Platinum rank (top 5%) in League of Legends",
  },
  { year: 2013, description: "Awarded a cash prize for filmmaking" },
];

function About({ recentPosts }: Props) {
  return (
    <div>
      <p className="text-lg -mt-4">
        I'm Dylan, a passionate software engineer and avid learner with a
        romantic relationship with entrepreneurship.
      </p>
      <p className="flex items-center -mt-2 mb-10 space-x-4">
        <a target="_blank" href="https://github.com/dphuang2">
          <GitHubLogo />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/dphuang2/">
          <LinkedInLogo />
        </a>
      </p>
      <h3>My blog posts:</h3>
      <ul className="list-none">
        {recentPosts.map(({ content }) => {
          return (
            <li key={content.metadata.permalink}>
              <span className="mr-3 text-gray-400 font-semibold">
                {new Date(content.metadata.date).getFullYear()}-
                {new Date(content.metadata.date).getMonth() + 1}
              </span>
              <a href={content.metadata.permalink}>{content.metadata.title} </a>
            </li>
          );
        })}
      </ul>
      <h3>My proudest achievements:</h3>
      <ul className="list-none">
        {achievements.map((achievement, index) => (
          <li key={index}>
            <span className="mr-3 text-gray-400 font-semibold">
              {achievement.year}
            </span>
            {achievement.description}
            {achievement.link && (
              <a target="_blank" href={achievement.link.url}>
                {" "}
                {achievement.link.text}
              </a>
            )}
          </li>
        ))}
      </ul>
      <h3>What colleagues have said about me:</h3>
      <blockquote>
        I have no hesitation in saying that Dylan exhibited exceptional drive,
        competency and leadership abilities. I wholeheartedly recommend him and
        would welcome the opportunity to work together again. Dylan would be a
        great asset for any organization!
        <br />—{" "}
        <a href="https://www.linkedin.com/in/cherifjazra">Cherif Jazra</a>
      </blockquote>
      <blockquote>
        With organizational growth and new projects, it was an easy decision for
        me to make Dylan the technical lead for a new engineering team in my
        org, working on a greenfield project at the intersection of data
        infrastructure and machine learning...I would without a doubt work again
        with Dylan, and would highly recommend him to anyone looking for a
        highly skilled engineering leader! <br />—{" "}
        <a href="https://www.linkedin.com/in/manastalukdar/">
          {" "}
          Manas Talukdar{" "}
        </a>
      </blockquote>
    </div>
  );
}

function LinkedInLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="h-4 w-4 text-slate-400 hover:text-slate-700 transition-colors"
      fill="currentColor"
    >
      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
    </svg>
  );
}

function GitHubLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="h-4 w-4 text-slate-400 hover:text-slate-700 transition-colors"
      fill="currentColor"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
