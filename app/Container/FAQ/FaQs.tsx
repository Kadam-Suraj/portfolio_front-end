import React from 'react'
import { client } from '@/app/Client/client';
import { Interface } from '@/app/Constants/interface';
import { PortableText } from '@portabletext/react';
import { IoChevronDownOutline } from 'react-icons/io5';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

async function getData() {
    const data = await client.fetch(`*[_type == 'faq']`);
    return data as Interface;
}

const FaQs = async () => {
    const data = (await getData()) as unknown as Interface[];
    return (
        <div>
            <div>{data.map((item, idx) => {
                return   <Accordion key={idx} type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>
                  <PortableText value={item.answer}></PortableText>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            })}</div>

        </div>
    )
}

export default FaQs