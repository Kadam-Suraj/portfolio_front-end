"use client"

import { useEffect, useState } from "react";
import GradientText from "../Components/GradientText";
import { filterBlogs, getBlogs } from "../api/sanity";
import Loader from "@/components/Loader/Loader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MdOutlineArrowOutward } from 'react-icons/md';
import BlogCategory from "@/components/Blog/BlogCategory";
import { Badge } from "@/components/ui/badge";
import { useCategory } from "@/context/BlogCategoryProvider";

const BlogHeader = () => (
    <div className="blog-header flex gap-5 max-sm:flex-col">
        <h3 className="font-bold text-4xl flex-1">My Blog –
            Learn, Build,
            <GradientText > Evolve</GradientText>
        </h3>
        <p className="flex-1 text-sm font-light">
            Dive into my world of thoughts, jahan har post ek nayi kahani batati hai. Yahan main apne experiences aur insights share karta hoon, jo mere creative journey ka hissa hai. Har blog ek reflection hai on challenges, learnings, and future aspirations. Chalo, milke explore karte hain naye ideas aur inspiration!
        </p>
    </div>
);

interface Interface {
    _id: string,
    name: string,
    about: string,
    _createdAt: string,
    category: { title: string }
}

const page = () => {
    const [blogs, setBlogs] = useState<Interface[]>();
    const [isLoading, setIsLoading] = useState(true);
    const { category } = useCategory();

    useEffect(() => {
        (async () => {
            const response = await filterBlogs(category) as unknown as Interface[];
            setBlogs(response);
            setIsLoading(false);
        })();
    }, [category]);

    return (
        <section className="flex flex-col gap-10">
            <BlogHeader />
            <main className="flex flex-col gap-3 items-center">
                <BlogCategory />
                {
                    isLoading ? <Loader />
                        :
                        blogs ?
                            blogs.map((item, idx) => (
                                <Link href={`/blog/${item._id}`} key={item._id} className={`${idx === 0 && "bg-accent"} flex flex-col gap-2 w-full rounded-md p-3 hover:bg-muted transition-colors duration-500`}>
                                    <div className="flex items-center gap-2 justify-between flex-wrap">
                                        <span className="text-sm text-muted-foreground">{new Date(item._createdAt).toDateString()}</span>
                                        <Badge className="flex items-center gap-1"> {idx === 0 && <span className="flex items-center gap-1"><GradientText>Latest</GradientText>|</span>}{item.category.title}</Badge>
                                    </div>
                                    <div className="flex gap-5 justify-between max-sm:flex-col">
                                        <span className="flex flex-col">
                                            <h3 className="font-bold text-2xl line-clamp-2">{item.name}</h3>
                                            <p className="text-sm text-muted-foreground line-clamp-3">{item.about}</p>
                                        </span>
                                        <Button variant="outline" className="flex gap-2 justify-self-end w-fit self-end">View Blog <MdOutlineArrowOutward /></Button>
                                    </div>
                                </Link>
                            ))
                            :
                            <span className="font-bold text-3xl">No blogs.</span>
                }
            </main>
        </section>
    )
}

export default page