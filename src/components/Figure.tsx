import React from "react";

interface FigureProps {
  src: string;
  caption?: string;
}

export default function Figure({ src, caption }: FigureProps): JSX.Element {
  return (
    <figure className="my-8">
      <img src={src} alt={caption} className="w-full rounded-lg shadow-lg" />
      {caption && (
        <figcaption className="mt-3 text-sm text-gray-600 italic flex justify-center">
          <div>{caption}</div>
        </figcaption>
      )}
    </figure>
  );
}
