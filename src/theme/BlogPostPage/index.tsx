import type BlogPostPageType from "@theme/BlogPostPage";
import type { WrapperProps } from "@docusaurus/types";
import PaperPage from "@site/src/components/PaperPage";
import React from "react";

type Props = WrapperProps<typeof BlogPostPageType>;

export default function BlogPostPageWrapper(props: Props): JSX.Element {
  const BlogPostContent = props.content;
  return (
    <PaperPage>
      <BlogPostContent />
    </PaperPage>
  );
}
