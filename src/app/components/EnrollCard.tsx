'use client'
import { PhoneCall } from "lucide-react";
import { useEffect, useState, useContext } from "react";
import { CourseContext } from "@/context/courseContext";
import { Checklist } from "@/interfaces/course";

export default function EnrollCard() {
    const data = useContext(CourseContext);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 1080) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (
        <>
            <div className='hidden md:block sticky top-20 right-0 p-6 self-start w-full'>
                <div className={`${isVisible ? 'block' : 'hidden'}`}>
                    <div className="border border-gray-300 p-4">
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
                    <div className="pt-4">
                        <div className="flex items-center justify-between gap-2 text-sm">
                            <span className="text-gray-500">কোর্সটি সম্পর্কে বিস্তারিত জানতে</span>
                            <span className="flex text-green-500 gap-2 underline items-center text-accent font-medium"><PhoneCall className="w-4 h-4 fill-green-500" /> ফোন করুন 16910</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${isVisible ? 'block' : 'hidden'} shadow-[0_-4px_10px_rgba(0,0,0,0.1)] md:hidden bg-white fixed bottom-0 right-0 left-0  p-4`}>
                <div className="mb-0">
                    <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-2xl font-bold">৳1000</span>
                    </div>
                </div>
                <button className="w-full cursor-pointer text-white bg-green-600 hover:bg-green-700 mb-0 font-semibold rounded-md px-8 py-2 relative">
                    <span className="relative z-10">{data?.cta_text?.name}</span>
                    <span className="absolute bottom-0 left-0 w-full h-[6px] bg-green-700 rounded-b-md"></span>
                </button>
            </div>
        </>
    )
}
