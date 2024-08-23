import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "College Schedule",
  description: "College schedule page",
};

const schedules = [
  {
    day: "Monday",
    classes: [
      {
        subject: "K3L dan Standar Internasional",
        lecturer: "Okkie Puspitorini",
        start_time: "10:30",
        end_time: "12:10",
        room: "SAW-07.08",
      },
      {
        subject: "Etika dan Profesionalisme",
        lecturer: "Okkie Puspitorini",
        start_time: "14:40",
        end_time: "16:20",
        room: "SAW-06.10",
      },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      {
        subject: "English for Academic",
        lecturer: "Eny Kusumawati",
        start_time: "09:40",
        end_time: "11:20",
        room: "B 205",
      },
      {
        subject: "Workshop Kecerdasan Komputasional",
        lecturer: "Nur Rosyid Mubtadai",
        start_time: "16:20",
        end_time: "18:50",
        room: "C 102",
      },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      {
        subject: "Pengujian dan Penjaminan Kualitas Perangkat Lunak",
        lecturer: "Nailussa`ada",
        start_time: "16:20",
        end_time: "18:00",
        room: "C 203",
      },
      {
        subject: "Praktikum Pengembangan Perangkat Lunak berbasis Agile",
        lecturer: "Adam Shidqul Aziz",
        start_time: "18:30",
        end_time: "20:10",
        room: "C 203",
      },
    ],
  },
  {
    day: "Thursday",
    classes: [
      {
        subject: "Workshop Data Mining",
        lecturer: "Entin Martiana Kusumaningtyas",
        start_time: "13:50",
        end_time: "16:20",
        room: "HH-101",
      },
      {
        subject: "Workshop Rekayasa Ulang Kode",
        lecturer: "Andhik Ampuh Yunanto",
        start_time: "16:20",
        end_time: "18:50",
        room: "C 206",
      },
    ],
  },
];

export default function Page() {
  return (
    <div className="min-h-screen flex items-start justify-start bg-zinc-100 dark:bg-zinc-900">
      <div className="mx-auto max-w-xl w-full px-0 sm:px-0 lg:px-0">
        <div className="flex flex-col gap-y-8 px-4 sm:px-0 py-4 sm:py-16 items-start justify-start">
          <div className="flex flex-col gap-y-0 w-full">
            <div className="flex flex-col gap-y-4 justify-normal items-end w-full sm:flex-row sm:gap-x-2 sm:justify-between">
              <h1 className="text-5xl leading-none font-bold text-zinc-800 dark:text-zinc-200">College Schedule</h1>
              <Link href="/" type="button" className="focus:outline-none">
                <div className="flex flex-row gap-x-0">
                  <span className="text-base leading-none font-bold text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200">
                    Back
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-0 w-full">
            <div className="w-full overflow-hidden">
              <table className="w-full divide-y divide-zinc-300">
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                  {schedules.map((schedule, index) => (
                    <tr key={index}>
                      <td className="whitespace-wrap px-0 py-2 w-full">
                        <div className="flex flex-col gap-y-0 justify-start items-start">
                          <div className="flex flex-col gap-y-3 w-full">
                            <div className="flex flex-col sm:flex-row gap-y-3 sm:gap-x-0 justify-normal sm:justify-between items-start w-full">
                              <div className="flex flex-col gap-y-0 w-full sm:w-3/12">
                                <span className="text-base leading-normal font-bold text-zinc-800 dark:text-zinc-200">
                                  {schedule.day}
                                </span>
                              </div>
                              <div className="flex flex-col gap-y-2 w-full sm:w-9/12 justify-start items-start">
                                {schedule.classes.map((item, index) => (
                                  <div key={index} className="flex flex-col gap-y-0 justify-normal items-start">
                                    <span className="text-base leading-normal font-bold text-zinc-800 dark:text-zinc-200">
                                      {item.subject}
                                    </span>
                                    <span className="text-base leading-normal font-bold text-zinc-600 dark:text-zinc-400">
                                      {item.lecturer}
                                    </span>
                                    <span className="text-base leading-normal font-bold text-zinc-600 dark:text-zinc-400">
                                      {item.start_time} - {item.end_time}
                                    </span>
                                    <span className="text-base leading-normal font-bold text-zinc-600 dark:text-zinc-400">
                                      {item.room}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
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
