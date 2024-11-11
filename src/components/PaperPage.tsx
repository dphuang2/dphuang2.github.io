import { PropsWithChildren } from "react";

export default function PaperPage({
  children,
}: PropsWithChildren<{}>): JSX.Element {
  return (
    <div className="md:min-h-screen md:bg-gray-50 py-8 flex flex-col relative overflow-hidden lg:py-12">
      <img
        src="/img/beams.jpg"
        alt=""
        className="hidden md:block fixed top-48 left-1/2 -translate-x-2/3 -translate-y-1/2 max-w-none"
        width={1308}
      />
      <div className="hidden md:block absolute inset-0 bg-[url(/img/grid.svg)] bg-top [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="px-6 py-8 md:relative md:w-full md:py-12 md:bg-white md:shadow-xl md:shadow-slate-700/10 md:ring-1 md:ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-16 lg:pb-28">
        {children}
      </div>
    </div>
  );
}
