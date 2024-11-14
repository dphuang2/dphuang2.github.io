import type BlogPostPageType from "@theme/BlogPostPage";
import type { WrapperProps } from "@docusaurus/types";
import PaperPage from "@site/src/components/PaperPage";
import React from "react";
import {
  HtmlClassNameProvider,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import {
  BlogPostProvider,
  ColorModeProvider,
} from "@docusaurus/theme-common/internal";
import BlogPostPageMetadata from "@theme/BlogPostPage/Metadata";
import BlogPostPageStructuredData from "@theme/BlogPostPage/StructuredData";
import clsx from "clsx";
import MDXContent from "@theme/MDXContent";

const FormattedDate = ({ date }: { date: string }) => {
  const [year, month, day] = date.split("T")[0].split("-");
  const monthNames = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December",
  };

  return <>{`${monthNames[month]} ${parseInt(day)}, ${year}`}</>;
};

type Props = WrapperProps<typeof BlogPostPageType>;

export default function BlogPostPageWrapper(props: Props): JSX.Element {
  const BlogPostContent = props.content;
  const title = props.content.frontMatter.title ?? props.content.contentTitle;
  const date = props.content.metadata.date;
  return (
    <BlogPostProvider content={props.content} isBlogPostPage>
      <HtmlClassNameProvider
        className={clsx(
          ThemeClassNames.wrapper.blogPages,
          ThemeClassNames.page.blogPostPage
        )}
      >
        <BlogPostPageMetadata />
        <BlogPostPageStructuredData />
        <PaperPage>
          <div className="mx-auto prose">
            <h1 className="text-4xl font-bold tracking-tight mb-8 text-balance">
              {title}
            </h1>
            <p className="text-gray-500 -mt-6 mb-8">
              by{" "}
              <a href="/" className="hover:text-gray-700">
                Dylan Huang
              </a>{" "}
              on <FormattedDate date={date} />
            </p>
            <ColorModeProvider>
              <MDXContent>
                <BlogPostContent />
              </MDXContent>
            </ColorModeProvider>
            <div className="mt-16 text-center">
              <a href="/">← Back to all posts</a>
            </div>
          </div>
        </PaperPage>
      </HtmlClassNameProvider>
    </BlogPostProvider>
  );
}
