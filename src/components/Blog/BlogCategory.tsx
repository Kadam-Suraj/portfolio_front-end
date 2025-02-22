"use client"

import { getBlogCategories } from "@/app/api/sanity";
import { useCategory } from "@/context/BlogCategoryProvider";
import React, { useEffect, useState } from "react";

interface Interface {
    category: { title: string }
};

const BlogCategory = () => {
    const [categories, setCategories] = useState<Interface[] | null>([]);
    const { category, setCategory } = useCategory();

    const fetchCategories = async () => {
        const response = await getBlogCategories();
        setCategories([{ category: { title: "All" } }, ...response]);
    }

    const updateCategory = (value: string) => {
        setCategory(value);
    }

    useEffect(() => {
        fetchCategories();
    }, [])

    return (
        <ul className="flex items-center gap-2 flex-wrap">
            {categories?.map((item, idx) => (
                <li key={idx} onClick={() => updateCategory(item.category.title)} className={`${category === item.category.title && "bg-accent-foreground text-background"} border px-4 transition-colors duration-300 py-1 text-center min-w-20 hover:bg-accent-foreground hover:text-background cursor-pointer text-sm rounded-full`}>{item.category.title}</li>
            ))}
        </ul>
    )
}

export default BlogCategory