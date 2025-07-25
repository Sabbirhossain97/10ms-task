import React from 'react'
import { Star, Play, ChevronLeft, ChevronRight } from "lucide-react";
import ProductTrailer from './ProductTrailer';
import { useContext } from 'react';
import { CourseContext } from '@/context/courseContext';

export default function CourseTitle() {

    const data = useContext(CourseContext);

    return (
        <div id={data?.title} className='min-h-[300px] flex flex-col items-center justify-center bg-right bg-cover bg-[url(https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg)]'>
            <div className='max-w-[1200px] relative flex flex-col mx-auto py-10'>
                <div className="relative md:hidden aspect-video bg-gray-900 rounded-lg overflow-hidden">
                    <img
                        src="/lovable-uploads/64dc49c6-d73b-4886-9939-7f914dfec651.png"
                        alt="Course Video Thumbnail"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white bg-opacity-90 rounded-full p-4 cursor-pointer hover:bg-opacity-100 transition-all">
                            <Play className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" />
                        </div>
                    </div>
                    <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 text-white">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 text-white">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
                <div className='md:max-w-[calc(100%_-_350px)] lg:max-w-[calc(100%_-_448px)] px-4'>
                    <h1 className="text-3xl text-white lg:text-4xl font-bold mb-4">
                        {data?.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
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
