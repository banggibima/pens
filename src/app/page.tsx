import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

const navigations = [
  {
    name: "College Schedule",
    path: "/college-schedule",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen flex items-start justify-start bg-zinc-100 dark:bg-zinc-900">
      <div className="mx-auto max-w-xl w-full px-0 sm:px-0 lg:px-0">
        <div className="flex flex-col gap-y-8 px-4 sm:px-0 py-4 sm:py-16 items-start justify-start">
          <div className="flex flex-col gap-y-0 w-full">
            <div className="flex flex-row gap-x-0 justify-between items-center w-ful">
              <h1 className="text-5xl leading-none font-bold text-zinc-800 dark:text-zinc-200">Campus Life</h1>
            </div>
          </div>
          <div className="flex flex-col gap-y-0 w-full">
            <div className="w-full overflow-hidden">
              <table className="w-full divide-y divide-zinc-300">
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                  {navigations.map((navigation, index) => (
                    <tr key={index}>
                      <td className="whitespace-wrap px-0 py-2">
                        <div className="flex flex-row gap-x-0 justify-between items-center">
                          <Link href={navigation.path} type="button" className="focus:outline-none">
                            <div className="flex flex-row gap-x-0">
                              <span className="text-base leading-normal font-bold text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200">
                                {navigation.name}
                              </span>
                            </div>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
