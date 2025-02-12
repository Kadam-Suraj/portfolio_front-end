'use client'
import React, { FormEvent } from 'react';
import { IoMdMail } from "react-icons/io";
import { MdLocalPhone, MdOutlineDriveFileRenameOutline, MdCurrencyRupee } from "react-icons/md";
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast"

const contact = () => {
    const { toast } = useToast()

    const formHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <div>
            <div className='relative flex max-md:flex-col md:gap-12 gap-20 justify-between'>
                <div className='gap-8 flex flex-col sm:top-56 w-full md:w-1/2 self-center'>
                    <h1 className='bg-clip-text text-transparent bg-gradient-to-r w-fit from-[#B16CEA] via-[#FF5E69] to-[#FFA84B] font-bold text-[5em] leading-[1em]'>Get in touch</h1>
                    <p className='w-10/12 text-[1.3em]'>Have a project in mind? Looking to partner or work together? Reach out through the form and i'll get back to you in the next 48 hours.</p>
                    <div className='flex flex-col gap-5 pt-5'>
                        <a href='mailto:surajkadam381@gmail.com' className='w-fit flex gap-3 items-center'>
                            <IoMdMail className='text-[2em]' /> <span>surajkadam381@gmail.com</span>
                        </a>
                        <a href='tel:+91 7887686442' className='w-fit flex gap-3 items-center'>
                            <MdLocalPhone className='text-[2em]' /> <span>+91 788 768 6442</span>
                        </a>
                    </div>
                </div>
                <div className='flex w-10/12 md:w-1/2 self-center'>
                    <form className='w-full' onSubmit={formHandler}>
                        <div className='flex flex-col gap-4'>
                            <label htmlFor="" className='pt-5'>Your Name</label>
                            <div className='flex items-center relative'>
                                <MdOutlineDriveFileRenameOutline className='absolute left-5 text-[1.2em]' />
                                <input className='dark:bg-[#1C1C22] bg-[#f8f8f8] px-14 py-5 md:px-14 md:py-3 rounded-md outline-none w-full' type="text" placeholder='Enter your name' required />
                            </div>
                            <label htmlFor="" className='pt-5'>Your E-mail</label>
                            <div className='flex items-center relative'>
                                <IoMdMail className='absolute left-5 text-[1.2em]' />
                                <input className='dark:bg-[#1C1C22] bg-[#f8f8f8] px-14 py-5 md:px-14 md:py-3 rounded-md outline-none w-full' type="text" placeholder='Enter your E-mail' required />
                            </div>
                            <label htmlFor="" className='pt-5'>Your Budget</label>
                            <div className='flex items-center relative'>
                                <MdCurrencyRupee className='absolute left-5 text-[1.2em]' />
                                <input className='dark:bg-[#1C1C22] bg-[#f8f8f8] px-14 py-5 md:px-14 md:py-3 rounded-md outline-none w-full' type="text" placeholder='1k - 3k' required />
                            </div>
                            <label htmlFor="" className='pt-5'>Tell me a bit more about what are you looking for?</label>
                            <textarea className='dark:bg-[#1C1C22] bg-[#f8f8f8] px-8 py-5 md:px-5 md:py-3 rounded-md outline-none w-full resize-none' rows={5} placeholder='Write something' required />
                            <div className='pt-5'>
                                <Button onClick={() => {
                                    toast({
                                        title: "Success",
                                        description: "Thank you for your interest, w'll connect you soon",
                                    })
                                }}>
                                    {'Submit Now'}
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default contact