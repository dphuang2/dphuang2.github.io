import React from 'react';
import StructuredData from '@theme-original/BlogPostPage/StructuredData';
import type StructuredDataType from '@theme/BlogPostPage/StructuredData';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof StructuredDataType>;

export default function StructuredDataWrapper(props: Props): JSX.Element {
  return (
    <>
      <StructuredData {...props} />
    </>
  );
}
