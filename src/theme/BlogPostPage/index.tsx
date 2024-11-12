import type BlogPostPageType from "@theme/BlogPostPage";
import type { WrapperProps } from "@docusaurus/types";
import PaperPage from "@site/src/components/PaperPage";
import React from "react";
import {
  HtmlClassNameProvider,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import { BlogPostProvider } from "@docusaurus/theme-common/internal";
import BlogPostPageMetadata from "@theme/BlogPostPage/Metadata";
import BlogPostPageStructuredData from "@theme/BlogPostPage/StructuredData";
import clsx from "clsx";

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
              on{" "}
              {new Date(date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <BlogPostContent />
          </div>
        </PaperPage>
      </HtmlClassNameProvider>
    </BlogPostProvider>
  );
}
