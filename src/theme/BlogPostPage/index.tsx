import type BlogPostPageType from "@theme/BlogPostPage";
import type { WrapperProps } from "@docusaurus/types";
import PaperPage from "@site/src/components/PaperPage";
import React from "react";

type Props = WrapperProps<typeof BlogPostPageType>;

export default function BlogPostPageWrapper(props: Props): JSX.Element {
  const BlogPostContent = props.content;
  const title = props.content.frontMatter.title;
  return (
    <PaperPage>
      <div className="mx-auto prose">
        <h1 className="text-4xl font-bold tracking-tight mb-8">{title}</h1>
        <p className="text-gray-500 -mt-6 mb-8">
          by{" "}
          <a href="/" className="hover:text-gray-700">
            Dylan Huang
          </a>
        </p>
        <BlogPostContent />
        <p className="text-gray-500 mt-8">
          This post is by{" "}
          <a href="/" className="hover:text-gray-700">
            Dylan Huang
          </a>
          . You can learn more about me{" "}
          <a href="/" className="hover:text-gray-700">
            here
          </a>
          .
        </p>
      </div>
    </PaperPage>
  );
}