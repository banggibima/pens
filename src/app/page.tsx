import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <div className="mx-auto max-w-xl w-full px-0 sm:px-0 lg:px-0">
        <div className="flex flex-col gap-y-4 items-center justify-center"></div>
      </div>
    </div>
  );
}
