'use client'
import React from 'react';
import { IoMdMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast"
import GradientText from '@/app/Components/GradientText';
import Link from 'next/link';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FaUser } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';
import { useRef } from "react";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Invalid email.",
    }),
    message: z.string().min(2, {
        message: "Message must be at least 10 characters.",
    }),
});

function useDebounce(fn: any, delay: number) {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    return (...args: any) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => fn(...args), delay);
    };
};

const contact = () => {
    const { toast } = useToast()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const onSubmit = useDebounce(async (values: z.infer<typeof formSchema>) => {
        const res = await fetch("/api/mail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
        });

        const data = await res.json();
        toast({
            title: data.title ?? "Error",
            description: data.message ?? "Something went wrong!!!",
        })
    }, 3000);

    return (
        <div className='flex max-sm:flex-col gap-10 justify-between items-center'>
            <div className='gap-4 flex flex-col flex-1 self-start'>
                <GradientText className='font-bold text-4xl'>
                    Get in touch
                </GradientText>
                <p className='text-muted-foreground text-sm'>Have a project in mind? Looking to partner or work together? Reach out through the form and i'll get back to you in the next 48 hours.</p>
                <div className='flex flex-col gap-2 text-sm'>
                    <Link href='mailto:surajkadam381@gmail.com' className='w-fit flex gap-3 items-center'>
                        <IoMdMail /> <span>surajkadam381@gmail.com</span>
                    </Link>
                    <Link href='tel:+91 7887686442' className='w-fit flex gap-3 items-center'>
                        <MdLocalPhone /> <span>+91 788 768 6442</span>
                    </Link>
                </div>
            </div>
            <div className='flex flex-1 w-full self-center'>
                <Form {...form} >
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full flex flex-col">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Your name *</FormLabel>
                                    <FormControl>
                                        <span className='flex relative items-center gap-2'>
                                            <FaUser className='absolute left-3' />
                                            <Input placeholder="enter your name" {...field} className='pl-10 bg-accent' />
                                        </span>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email *</FormLabel>
                                    <FormControl>
                                        <span className='flex relative items-center gap-2'>
                                            <IoMdMail className='absolute left-3' />
                                            <Input placeholder="enter your email" {...field} className='pl-10 bg-accent' />
                                        </span>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <span className='flex relative items-center gap-2'>
                                            <FaMessage className='absolute left-3' />
                                            <Input placeholder="enter your message" {...field} className='pl-10 bg-accent' />
                                        </span>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className='self-end'>Submit</Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default contact