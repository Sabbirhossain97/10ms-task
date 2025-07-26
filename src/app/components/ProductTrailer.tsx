'use client'
import { PhoneCall } from "lucide-react";
import { useState, useContext } from "react";
import { CourseContext } from "@/context/courseContext";
import { Medium, Checklist } from "@/interfaces/course";

function ProductTrailer() {
    const data = useContext(CourseContext);
    const productData = data?.media
    const initialMedia = productData?.[0]
    const [currentMedia, setCurrentMedia] = useState({
        type: initialMedia?.resource_type,
        resource: initialMedia?.resource_value
    });

    return (
        <>
            <div className={`hidden md:flex flex-col absolute right-0 z-[1000]`}>
                <div className="bg-white border md:max-w-[350px] lg:max-w-[400px] border-gray-300 text-foreground rounded-lg self-start">
                    {currentMedia.type === 'video' && <iframe className="p-1 h-[220px] w-full" src={`https://www.youtube.com/embed/${currentMedia.resource}`}></iframe>}
                    {currentMedia.type === 'image' && <img className='h-[220px] w-full object-cover' src={currentMedia.resource} />}
                    <div className="flex gap-4 p-4 overflow-x-auto">
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
                    <div className="p-4 ">
                        <div className="mb-6">
                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-3xl font-bold">৳1000</span>
                            </div>
                        </div>

                        <button className="w-full cursor-pointer text-white bg-green-600 hover:bg-green-700 mb-6 font-semibold rounded-md px-8 py-3 relative">
                            <span className="relative z-10">{data?.cta_text?.name}</span>
                            <span className="absolute bottom-0 left-0 w-full h-[6px] bg-green-700 rounded-b-md"></span>
                        </button>

                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg">এই কোর্স যা থাকছে</h3>

                            <div className="space-y-3 text-md">
                                {data?.checklist?.map((list: Checklist) => (
                                    <div key={list.id} className="flex items-center gap-3">
                                        <img src={list.icon} className="w-5 h-5 text-muted-foreground" />
                                        <span>{list.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-4">
                    <div className="flex items-center justify-between gap-2 text-sm">
                        <span className="text-gray-500">কোর্সটি সম্পর্কে বিস্তারিত জানতে</span>
                        <span className="flex text-green-500 gap-2 underline items-center text-accent font-medium"><PhoneCall className="w-4 h-4 fill-green-500" /> ফোন করুন 16910</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductTrailer