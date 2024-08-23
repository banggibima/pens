import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
  description: "Not found page",
};

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center bg-zinc-100 dark:bg-zinc-900">
      <div className="mx-auto max-w-xl w-full px-0 sm:px-0 lg:px-0">
        <div className="flex flex-col gap-y-4 px-4 sm:px-0 py-4 sm:py-16 items-center justify-center">
          <div className="flex flex-col gap-y-0 w-full">
            <h1 className="text-9xl text-center leading-none font-bold text-zinc-800 dark:text-zinc-200">404</h1>
          </div>
          <span className="text-base text-center leading-none font-bold text-zinc-600 dark:text-zinc-400">
            This page could not be found
          </span>
        </div>
      </div>
    </div>
  );
}
