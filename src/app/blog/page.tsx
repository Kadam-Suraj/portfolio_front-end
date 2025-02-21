"use client"

import { useEffect, useState } from "react";
import GradientText from "../Components/GradientText";
import { getBlogs } from "../api/sanity";
import Loader from "@/components/Loader/Loader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MdOutlineArrowOutward } from 'react-icons/md';

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
    _createdAt: string
}

const page = () => {
    const [blogs, setBlogs] = useState([] as Interface[]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const response = await getBlogs() as unknown as Interface[];
            setBlogs(response);
            setIsLoading(false);
        })();
    }, []);

    return (
        <section className="flex flex-col gap-10">
            <BlogHeader />
            <main className="flex flex-col gap-3 items-center">
                {
                    isLoading ? <Loader />
                        :
                        blogs ?
                            blogs.map(item => (
                                <Link href={`/blog/${item._id}`} key={item._id} className="flex flex-col gap-2 w-full rounded-md p-3 hover:bg-muted transition-colors duration-500">
                                    <span className="text-sm text-muted-foreground">{new Date(item._createdAt).toDateString()}</span>
                                    <div className="flex gap-5 items-center justify-between flex-wrap">
                                        <span className="flex flex-col">
                                            <h3 className="font-bold text-2xl">{item.name}</h3>
                                            <p className="text-sm text-muted-foreground">{item.about}</p>
                                        </span>
                                        <Button variant="outline" className="flex gap-2 items-center">View Blog <MdOutlineArrowOutward /></Button>
                                    </div>
                                </Link>
                            ))
                            :
                            <span>No blogs.</span>
                }
            </main>
        </section>
    )
}

export default page