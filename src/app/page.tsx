"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [message, setMessage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/hello");
      const { message } = await res.json();
      setMessage(message);
    };
    fetchData();
  }, []);

  if (!message) return <p>Loading...</p>;

  return (
    <div className="mx-auto max-w-xl">
      <div className="flex flex-col h-screen bg-neutral-50 dark:bg-neutral-950 selection:bg-neutral-100 dark:selection:bg-neutral-900">
        <div className="flex flex-col justify-center items-start h-full"></div>
      </div>
    </div>
  );
}
