import { client } from "../Client/client";
import { Interface } from "../Constants/interface";

export async function getAllProjects() {
    const data = await client.fetch(`*[_type == 'projects'] | order(_createdAt asc)`);
    return data as Interface;
}

export async function getProject(id: String) {
    const data = await client.fetch(`*[_type == 'projects' && _id == '${id}']`);
    return data as Interface;
}