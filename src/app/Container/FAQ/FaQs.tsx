"use client"

import React, { ReactElement, useEffect, useState } from 'react'
import { client } from '@/app/Client/client';
import { Interface } from '@/app/Constants/interface';
import { PortableText } from '@portabletext/react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Loader from '@/components/Loader/Loader';

const portableTextComponent: any = {
  marks: {
    link: ({ value, children }: { value: { href: string }, children: React.ReactNode }) => (
      <a href={value.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
        {children}
      </a>
    ),
  },
}
const FaQs = () => {
  const [data, setData] = useState([] as Interface[]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await client.fetch(`*[_type == 'faq']| order(_createdAt asc)`) as Interface[];
      setData(response);
      setIsLoading(false);
    })();
  }, [])

  return (
    <div className='flex flex-col items-center justify-center min-h-40'>
      {
        isLoading ? <Loader />
          :
          data.map((item, idx) => (
            <Accordion key={idx} type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className='text-base'>{item.question}</AccordionTrigger>
                <AccordionContent className='text-sm prose prose-sm text-muted-foreground prose-a:text-blue-500 prose-a:no-underline'>
                  <PortableText value={item.answer} components={portableTextComponent} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))
      }
    </div>
  )
}

export default FaQs