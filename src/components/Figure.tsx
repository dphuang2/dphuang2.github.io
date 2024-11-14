import React, { useState, useEffect, ReactNode } from "react";

interface FigureProps {
  src: string;
  caption?: ReactNode;
}

export default function Figure({ src, caption }: FigureProps): JSX.Element {
  const [isEnlarged, setIsEnlarged] = useState(false);

  useEffect(() => {
    if (isEnlarged) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isEnlarged]);

  const toggleEnlarged = () => {
    setIsEnlarged(!isEnlarged);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      toggleEnlarged();
    }
    if (e.key === "Escape" && isEnlarged) {
      setIsEnlarged(false);
    }
  };

  return (
    <>
      <figure className="mx-0 my-8">
        <div className="inline-block">
          <img
            src={src}
            alt={typeof caption === "string" ? caption : undefined}
            onClick={toggleEnlarged}
            onKeyDown={handleKeyPress}
            role="button"
            tabIndex={0}
            aria-label={`Click to ${isEnlarged ? "minimize" : "enlarge"} image${
              caption ? `: ${caption}` : ""
            }`}
            className="my-0 w-full rounded-lg shadow-lg transition-transform duration-200 hover:scale-[1.02] hover:shadow-xl cursor-pointer"
          />
          {caption && (
            <figcaption className="text-sm text-gray-600 italic flex justify-center">
              <div>{caption}</div>
            </figcaption>
          )}
        </div>
      </figure>

      {isEnlarged && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={toggleEnlarged}
          onKeyDown={handleKeyPress}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged image view"
        >
          <button
            onClick={toggleEnlarged}
            className="fixed top-4 right-4 bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors cursor-pointer z-[51]"
            aria-label="Close enlarged view"
          >
            Close
          </button>
          <div className="max-w-[90vw] max-h-[90vh] relative flex flex-col items-center">
            <div className="relative">
              <img
                src={src}
                alt={typeof caption === "string" ? caption : undefined}
                className="my-0 max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>
            {caption && (
              <figcaption className="text-base text-white italic text-center mt-4 max-w-prose mx-auto">
                {caption}
              </figcaption>
            )}
          </div>
        </div>
      )}
    </>
  );
}
