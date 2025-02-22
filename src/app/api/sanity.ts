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
    const data = await client.fetch(`*[_type == 'blogs']{_id, name, about, _createdAt,category->{title}}`);
    return data as Interface;
}

export async function getBlogById(id: string) {
    const data = await client.fetch(`*[_type == 'blogs' && _id == '${id}']{..., category->{title}}`);
    return data;
}

export async function getBlogCategories() {
    const data = await client.fetch(`*[_type == 'blogs']{category->{title}}`);
    return data;
}

export async function filterBlogs(title: string) {
    const query =
        title === "All"
            ? `*[_type == "blogs"]| order(_createdAt desc){_id, name, about, _createdAt, category->{title}}`
            : `*[_type == "blogs" && category->title == $title]| order(_createdAt desc){_id, name, about, _createdAt, category->{title}}`;

    const data = await client.fetch(query, title !== "All" ? { title } : {});
    return data;
}