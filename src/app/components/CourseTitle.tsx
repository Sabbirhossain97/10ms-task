import React from 'react'
import { Star } from "lucide-react";
import ProductTrailer from './ProductTrailer';
import { useContext } from 'react';
import { CourseContext } from '@/context/courseContext';

export default function CourseTitle() {

    const data = useContext(CourseContext);

    return (
        <div className='min-h-[300px] flex flex-col items-center justify-center bg-right bg-cover bg-[url(https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg)]'>
            <div className='max-w-[1200px] relative flex mx-auto'>
                <div className='lg:max-w-[calc(100%_-_448px)] px-4'>
                    <h1 className="text-3xl text-white lg:text-4xl font-bold mb-4">
                        {data?.title}
                    </h1>
                    <div className="flex items-center gap-2 mb-4">
                        <div className=" flex items-center">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-5 h-5 fill-yellow-500 text-star text-yellow-500" />
                            ))}
                        </div>
                        <span className="text-white/90">(82.6% শিক্ষার্থী কোর্স রেভিউ & রেটিং দিয়েছেন)</span>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: data?.description || "" }} className="text-gray-400 text-lg leading-relaxed" />
                </div>
                <ProductTrailer />
            </div>
        </div>
    )
}
