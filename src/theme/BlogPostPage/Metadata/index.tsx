import React from 'react';
import Metadata from '@theme-original/BlogPostPage/Metadata';
import type MetadataType from '@theme/BlogPostPage/Metadata';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof MetadataType>;

export default function MetadataWrapper(props: Props): JSX.Element {
  return (
    <>
      <Metadata {...props} />
    </>
  );
}
