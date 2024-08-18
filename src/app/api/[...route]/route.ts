import { Hono } from "hono";
import { handle } from "hono/vercel";
import { kv } from "@vercel/kv";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get("/hello", (c) => {
  return c.json({
    message: "Hello Next.js!",
  });
});

app.get("/search-rooms", async (c) => {
  try {
    global.performance = global.performance || {
      now: () => new Date().getTime(),
    };

    const start = performance.now();

    const engine = c.req.query("engine")?.toLowerCase();

    if (engine !== "redis") {
      return c.json({ error: "Invalid engine" }, { status: 400 });
    }

    const query = c.req.query("query")?.toUpperCase();

    if (!query) {
      return c.json({ error: "No query provided" }, { status: 400 });
    }

    const res = [];
    const rank = await kv.zrank("rooms", query);

    if (rank !== null && rank !== undefined) {
      const temp = await kv.zrange<string[]>("rooms", rank, rank + 100);

      for (const el of temp) {
        if (!el.startsWith(query)) {
          break;
        }

        if (el.endsWith("*")) {
          res.push(el.substring(0, el.length - 1));
        }
      }
    }

    const end = performance.now();

    return c.json({
      results: res,
      time: end - start,
    });
  } catch (error) {
    return c.json({ error: error }, { status: 500 });
  }
});

export const GET = handle(app);
