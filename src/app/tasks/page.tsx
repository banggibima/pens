import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tasks",
  description: "Tasks page",
};

export default function Page() {
  return (
    <div className="min-h-screen flex items-start justify-start bg-zinc-100 dark:bg-zinc-900">
      <div className="mx-auto max-w-xl w-full px-0 sm:px-0 lg:px-0">
        <div className="flex flex-col gap-y-8 px-4 sm:px-0 py-4 sm:py-16 items-start justify-start">
          <div className="flex flex-col gap-y-0 w-full">
            <div className="flex flex-row gap-x-2 justify-between items-end w-ful">
              <h1 className="text-5xl leading-none font-bold text-zinc-800 dark:text-zinc-200">Tasks</h1>
              <Link href="/" type="button" className="focus:outline-none">
                <div className="flex flex-row gap-x-0">
                  <span className="text-base leading-none font-bold text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200">
                    Back
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-0 w-full"></div>
        </div>
      </div>
    </div>
  );
}
