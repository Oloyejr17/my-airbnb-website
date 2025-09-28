import { createApi } from "unsplash-js";

// Unsplash API client
export const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY as string, // store in .env.local
});
