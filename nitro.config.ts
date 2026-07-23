import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
  preset: "vercel",
  publicAssets: [
    {
      dir: "./dist/client",
      maxAge: 3600,
    },
  ],
  handlers: [
    {
      route: "/**",
      handler: "./dist/server/server.js",
    },
  ],
});
