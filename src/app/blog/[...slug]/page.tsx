"use client";

import React, { useState, use, useEffect } from "react";
import { getBlogById } from "@/app/api/sanity";
import Loader from "@/components/Loader/Loader";
import Image from "next/image";
import { urlFor } from "@/app/Constants/imageBuilder";
import { PortableText } from "@portabletext/react";

interface Interface {
    _id: string;
    _createdAt: string;
    name: string;
    about: string;
    cover: string;
    description: any;
    caption: string;
    tableOfContents: any;
}

const Page = ({ params }: { params: Promise<{ slug: string[] }> }) => {
    const { slug } = use(params);

    const [isLoading, setIsLoading] = useState(true);
    const [blog, setBlog] = useState<Interface | null>(null);

    async function getData() {
        try {
            const [data] = await getBlogById(slug[0]) as any as Interface[];
            console.log(data)
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
                        <div className="w-full absolute top-0 bottom-0 h-full bg-gradient-to-t from-background from20% to-transparent" />
                    </div>
                    <h2 className="font-bold text-3xl relative -top-10 text-wrap text-ellipsis line-clamp-3">{blog.name}</h2>
                    <div className="flex gap-2 flex-shrink max-sm:flex-col w-full">
                        <div className="max-sm:order-1">
                            <span className="text-sm w-full">
                                <PortableText value={blog.description} />
                            </span>
                        </div>
                        <div className="sm:border-l flex flex-col gap-5 max-sm:border-y sm:max-w-80 p-3 w-full">
                            <div className="grid grid-cols-2 gap-4">
                                <span className="flex-col flex text-sm text-muted-foreground">Publication Date
                                    <span className="text-accent-foreground">{new Date(blog._createdAt).toDateString()}</span>
                                </span>
                                <span className="flex-col flex text-sm text-muted-foreground">Category
                                    <span className="text-accent-foreground">Development</span>
                                </span>
                                <span className="flex-col flex text-sm text-muted-foreground">Reading Time
                                    <span className="text-accent-foreground">10 min</span>
                                </span>
                                <span className="flex-col flex text-sm text-muted-foreground">Author
                                    <span className="text-accent-foreground">Suraj</span>
                                </span>
                            </div>
                            <div className="flex flex-col gap-2 border-t pt-2">
                                <h5 className="font-semibold">Table of content</h5>
                                <ol className="text-sm px-7 py-2 bg-muted rounded-md text-muted-foreground list-decimal">
                                    {blog.tableOfContents.map((item: any) => (
                                        <li key={item._key}>{item.title}</li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Blog not found</p>
            )}
        </section>
    );
};

export default Page;
