"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState<{
    results: string[];
    time: number;
    error?: string;
  }>();
  const [selected, setSelected] = useState("redis");

  const handleSelect = (item: any) => setSelected(item);

  useEffect(() => {
    const fetchData = async () => {
      if (input === "") {
        return setSearch(undefined);
      }

      const url = `/api/search-rooms?engine=${selected}&query=${input}`;
      const res = await fetch(url);
      const data = (await res.json()) as { results: string[]; time: number; error?: string };

      setSearch(data);
    };
    fetchData();
  }, [input]);

  return (
    <div className="h-screen flex items-start justify-center pt-32 bg-neutral-100 dark:bg-neutral-900">
      <div className="mx-auto max-w-xl w-full px-8 sm:px-0 lg:px-0">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex flex-col gap-y-4 items-center justify-center w-full">
            <h1 className="text-4xl leading-normal font-bold text-neutral-800 dark:text-neutral-200">Cari Ruang di PENS</h1>
            <p className="text-sm text-center leading-normal font-medium text-neutral-600 dark:text-neutral-400">
              Sebuah aplikasi pencarian ruang di PENS menggunakan Next.js dan Hono KV Store di Vercel Serverless Functions
              dengan Redis dan Postgres sebagai database penyimpanan. Ketik nama ruang yang ingin dicari di kolom pencarian
              di bawah ini.
            </p>
          </div>
          <div className="flex flex-col gap-y-8 w-full">
            <div className="flex flex-col w-full">
              <input
                type="text"
                className="w-full px-4 py-2 text-sm leading-normal font-medium border rounded-lg bg-transparent text-neutral-800 dark:text-neutral-200 border-neutral-200 dark:border-neutral-800 bg-neutral-200 dark:bg-neutral-800 focus:outline-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              {search?.results?.length !== 0 ? (
                <div
                  className={`${
                    search?.results?.length === 0 ? "hidden" : "mt-4 mb-4 block"
                  } w-full overflow-x-auto rounded-lg bg-neutral-200 dark:bg-neutral-800`}
                >
                  <table className="w-full divide-y divide-neutral-100 dark:divide-neutral-900">
                    <tbody className="divide-y divide-neutral-100 dark:divide-neutral-900">
                      {search?.results?.map((room: any, index: number) => (
                        <tr key={index}>
                          <td className="whitespace-wrap px-4 py-2">
                            <div className="flex flex-row gap-x-3 justify-between items-center">
                              <div className="flex flex-row gap-x-3">
                                <span className="text-sm text-left leading-normal font-medium text-neutral-600 dark:text-neutral-400">
                                  {room}
                                </span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="w-full flex flex-col gap-y-4 mt-4 mb-4 items-center justify-center">
                  <p className="text-sm text-center leading-normal font-medium text-neutral-600 dark:text-neutral-400">
                    Ruang tidak ditemukan
                  </p>
                </div>
              )}
              {!search?.error && search && (
                <div className="flex flex-col w-full justify-center items-start">
                  <p className="text-sm text-center leading-normal font-medium text-neutral-600 dark:text-neutral-400">
                    {search?.results?.length} results found in {search?.time?.toFixed(2)}ms
                  </p>
                </div>
              )}
              {search?.error && (
                <div className="flex flex-col w-full justify-center items-start">
                  <p className="text-sm text-center leading-normal font-medium text-red-500 dark:text-red-400">
                    {search?.error}
                  </p>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-y-4 items-center w-full">
              <div
                className={`flex flex-row gap-x-2 px-2 py-2 rounded-xl ${
                  selected === "postgres" ? "bg-blue-500" : "bg-red-500"
                }`}
              >
                <button
                  type="button"
                  className={`flex flex-col ${
                    selected === "postgres" ? "px-4" : "px-2"
                  } py-2 rounded-lg transition-all duration-300 ${
                    selected === "postgres" ? "bg-blue-700/75" : "bg-red-500"
                  } cursor-pointer`}
                  onClick={() => handleSelect("postgres")}
                >
                  <span className="text-sm leading-normal font-medium text-white">Postgres</span>
                </button>
                <button
                  type="button"
                  className={`flex flex-col ${
                    selected === "redis" ? "px-4" : "px-2"
                  } py-2 rounded-lg transition-all duration-300 ${
                    selected === "redis" ? "bg-red-700/75" : "bg-blue-500"
                  } cursor-pointer`}
                  onClick={() => handleSelect("redis")}
                >
                  <span className="text-sm leading-normal font-medium text-white">Redis</span>
                </button>
              </div>
              <p className="text-sm text-center leading-normal font-medium text-neutral-600 dark:text-neutral-400">
                {selected === "redis" ? "Redis Engine is on" : "Service is not available"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
