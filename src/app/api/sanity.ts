import { client } from "../Client/client";
import { Interface } from "../Constants/interface";

export async function getAllProjects() {
    const data = await client.fetch(`*[_type == 'projects'] | order(_createdAt asc)`);
    return data as Interface[];
}

export async function getProject(id: String) {
    const data = await client.fetch(`*[_type == 'projects' && _id == '${id}']`);
    return data as Interface;
}

export async function getLogos() {
    const data = await client.fetch(`*[_type == 'logos']`)
    return data as Interface;
}

export async function getTools() {
    const data = await client.fetch(`*[_type == 'development']`);
    return data as Interface;
}

export async function getBlogs() {
    const data = await client.fetch(`*[_type == 'blogs']{_id, name, about, _createdAt}`);
    return data as Interface;
}

export async function getBlogById(id: string) {
    console.log("fetch id: ", id)
    const data = await client.fetch(`*[_type == 'blogs' && _id == '${id}']`);
    return data;
}