import { createClient } from "next-sanity";

export const client = createClient({
    projectId: process.env.NEXT_APP_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2022-03-07",
    useCdn: true
});