import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "pepepepepei",
  apiKey: process.env.API_KEY,
});
