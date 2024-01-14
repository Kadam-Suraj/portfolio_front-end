import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "1p7yzy7v",
    dataset: "production",
    apiVersion: "2022-03-07",
    useCdn: true
});