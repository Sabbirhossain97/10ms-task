import { useState, useContext } from 'react';
import { Star } from "lucide-react";
import ProductTrailer from './ProductTrailer';
import { CourseContext } from '@/context/courseContext';
import { Medium } from '@/interfaces/course';

export default function CourseTitle() {

    const data = useContext(CourseContext);
    const productData = data?.media
    const initialMedia = productData?.[0]
    const [currentMedia, setCurrentMedia] = useState({
        type: initialMedia?.resource_type,
        resource: initialMedia?.resource_value
    });

    return (
        <div id={data?.title} className="min-h-[300px] flex flex-col pt-16 items-center justify-center bg-top md:bg-right bg-cover bg-[url('/banner.jpeg')]">
            <div className='max-w-[1200px] relative flex flex-col mx-auto pb-8 md:py-16'>
                <div className="relative md:hidden rounded-lg p-2 aspect-video overflow-hidden">
                    {currentMedia.type === 'video' && <iframe className="p-1 h-full w-full" src={`https://www.youtube.com/embed/${currentMedia.resource}`}></iframe>}
                    {currentMedia.type === 'image' && <img className='h-full w-full object-left object-cover' src={currentMedia.resource} />}
                </div>
                <div className="md:hidden flex flex-wrap gap-4 p-4 overflow-x-auto">
                    {productData?.map((product: Medium, index) => (
                        <div key={index} onClick={() => setCurrentMedia({ type: product.resource_type, resource: product.resource_value })} className="flex-shrink-0 w-[50px] h-[30px] bg-gray-200 rounded cursor-pointer">
                            <img
                                src={product.resource_type === "image" ? product.resource_value : product.thumbnail_url}
                                alt={`Video thumbnail ${index}`}
                                className="w-full h-full object-cover pointer-events-none"
                            />
                        </div>
                    ))}
                </div>
                <div className='md:max-w-[calc(100%_-_350px)] lg:max-w-[calc(100%_-_448px)] px-4 mt-6 md:mt-0'>
                    <h1 className="text-[21px] text-white md:text-3xl font-bold mb-4">
                        {data?.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                        <div className="flex gap-1 items-center">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-5 h-5 fill-[#FFA500] text-star text-[#FFA500]" />
                            ))}
                        </div>
                        <span className="text-white/90 text-sm md:text-base">(82.6% শিক্ষার্থী কোর্স রেভিউ & রেটিং দিয়েছেন)</span>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: data?.description || "" }} className="text-gray-400 text-md md:text-base" />
                </div>
                <ProductTrailer />
            </div>
        </div>
    )
}
