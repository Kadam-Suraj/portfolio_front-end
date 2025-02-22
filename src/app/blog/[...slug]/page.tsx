"use client";

import React, { useState, use, useEffect } from "react";
import { getBlogById } from "@/app/api/sanity";
import Loader from "@/components/Loader/Loader";
import Image from "next/image";
import { urlFor } from "@/app/Constants/imageBuilder";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Error from "@/components/Error/Error";

interface Interface {
    _id: string;
    _createdAt: string;
    name: string;
    about: string;
    cover: string;
    description: any;
    caption: string;
    category: { title: string };
    author: string;
    read_time: string;
    tableOfContents: {
        anchorId: string,
        title: string,
        _key: string
    }[];
};

const Page = ({ params }: { params: Promise<{ slug: string[] }> }) => {
    const { slug } = use(params);

    const [isLoading, setIsLoading] = useState(true);
    const [blog, setBlog] = useState<Interface | null>(null);

    async function getData() {
        try {
            const [data] = await getBlogById(slug[0]) as any as Interface[];
            setBlog(data);
        } catch (error) {
            console.error("Error fetching blog:", error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, [slug])

    return (
        <section className="justify-center flex flex-col items-center">
            {isLoading ? (
                <Loader />
            ) : blog ? (
                <div className="relative -top-5 w-full flex flex-col items-center">
                    <div className="relative w-full">
                        <Image
                            src={urlFor(blog.cover).url()}
                            alt="cover"
                            width={500}
                            height={500}
                            className="w-full h-full max-h-60 object-cover"
                        />
                        <div className="w-full absolute top-0 bottom-0 h-full bg-gradient-to-t from-background from-20% to-transparent" />
                    </div>
                    <h2 className="font-bold text-3xl relative -top-10 text-wrap text-ellipsis line-clamp-3 px-3">{blog.name}</h2>
                    <div className="flex gap-2 flex-shrink max-sm:flex-col w-full">
                        <div className="max-sm:order-1">
                            <span className="prose prose-sm prose-code:bg-accent prose-code:px-2 prose-code:py-1 prose-code:rounded-md dark:prose-invert w-full">
                                <PortableText value={blog.description} />
                            </span>
                        </div>
                        <div className="sm:border-l flex flex-col gap-3 max-sm:border-y sm:max-w-80 p-3 w-full">
                            <div className="grid grid-cols-2 gap-4">
                                <span className="flex-col flex text-sm text-muted-foreground">Publication Date
                                    <span className="text-accent-foreground">{new Date(blog._createdAt).toDateString()}</span>
                                </span>
                                <span className="flex-col flex text-sm text-muted-foreground">Category
                                    <span className="text-accent-foreground">{blog.category.title}</span>
                                </span>
                                <span className="flex-col flex text-sm text-muted-foreground">Reading Time
                                    <span className="text-accent-foreground">{blog.read_time}</span>
                                </span>
                                <span className="flex-col flex text-sm text-muted-foreground">Author
                                    <span className="text-accent-foreground">{blog.author}</span>
                                </span>
                            </div>
                            <div className="flex flex-col gap-2 border-t pt-2">
                                <h5 className="font-medium">Table of content</h5>
                                <ol className="text-sm px-7 py-2 flex flex-col gap-1 bg-muted rounded-md list-disc">
                                    {blog.tableOfContents.map((item) => (
                                        <Link
                                            href={item.anchorId}
                                            key={item._key}
                                            className="hover:text-accent-foreground text-muted-foreground transition-colors duration-300">
                                            <li>{item.title}</li>
                                        </Link>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Error />
            )}
        </section>
    );
};

export default Page;
