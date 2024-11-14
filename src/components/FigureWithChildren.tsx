import React, { PropsWithChildren, ReactElement, ReactNode } from "react";

export default function Figure({
  children,
  caption,
}: PropsWithChildren<{ caption: ReactNode }>) {
  const child = getChildImage(children);
  const childExists = child !== undefined;
  const className = childExists ? child.props.className || "" : "";
  const classNameWithMxAuto = className + " mx-auto";
  const newChild = childExists
    ? React.cloneElement(child, {
        className: classNameWithMxAuto,
      })
    : children;

  return (
    <>
      <figure className="mx-0 my-8 flex flex-col items-center [&_img]:my-0">
        <div className="max-w-full overflow-x-auto">
          {childExists ? newChild : children}
        </div>
        <figcaption className="text-sm mt-0 text-gray-600 italic flex justify-center">
          <div>{caption}</div>
        </figcaption>
      </figure>
    </>
  );
}

export function getChildImage(children: ReactNode): ReactElement | undefined {
  if (!React.isValidElement(children)) return;
  if (children.props.type === "p") return;
  return children.props.children;
}
