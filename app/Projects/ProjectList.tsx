"use client";

import React from 'react';
import { urlFor } from '../Constants/imageBuilder';
import Image from 'next/image';
import Link from 'next/link';
import { Interface } from '../Constants/interface';
import { Button } from '@/components/ui/button';

const ProjectList = ({ projects }) => {
    return (
        <div className="lg:max-w-[1560px] flex flex-col gap-24 min-h-screen m-auto px-5 mt-40 py-10">
            <div className="flex flex-col gap-32">
                <div className="flex items-center gap-20 max-md:flex-col pb-5">
                    <h1 className="font-bold text-[4.5em] md:w-1/2 self-start leading-[1.1em]">
                        Have a look at my{" "}
                        <span className="bg-gradient-to-r bg-clip-text text-transparent from-[#B16CEA] via-[#FF5E69] to-[#FFA84B]">
                            projects.
                        </span>
                    </h1>
                    <p className="text-[1.2em] md:w-1/2 text-opacity-60 text-black dark:text-slate-300">
                        Explore my diverse range of projects and discover the
                        exceptional craftsmanship and creativity that goes into each one...
                    </p>
                </div>
                <div className="grid w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
                    {projects.map((item: Interface) => (
                        <Link key={item._id} href={`/Projects/${item._id}`}>
                            <div className="shrink rounded-xl h-full flex flex-col justify-between bg-accent-foreground/10 hover:scale-105 hover:shadow-lg duration-300 transition-all p-2">
                                <Image
                                    className="aspect-video object-contain rounded-xl w-full pointer-events-none"
                                    src={urlFor(item.image).url()}
                                    alt={item.name}
                                    width={800}
                                    height={800}
                                    draggable={false}
                                />
                                <div className="space-y-3 p-2">
                                    <h2 className="font-bold text-xl text-ellipsis line-clamp-2">
                                        {item.name}
                                    </h2>
                                    <div className="flex items-center justify-between space-x-2">
                                        <span className="flex-1 line-clamp-1">{item.tag}</span>
                                        <Button className='rounded-full'>Read more</Button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectList;
