'use client'
import { Users, Clock, Video, FileText, BookOpen, Gift, Facebook, PhoneCall } from "lucide-react";
import { useEffect, useState } from "react";

export default function EnrollCard() {
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
            <div className={`${isVisible ? 'block' : 'hidden'}`}>
                <div className="border border-gray-300 p-4">
                    <div className="mb-6">
                        <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-3xl font-bold">৳3850</span>
                            <span className="text-xl text-muted-foreground line-through">৳5000</span>
                            <span className="bg-price text-white px-2 py-1 rounded text-sm font-medium">
                                ১১৫০ ৳ ছাড়
                            </span>
                        </div>
                    </div>

                    <button className="w-full text-white mb-6 bg-green-600 hover:bg-green-700 py-2 px-8 rounded-[6px]">
                        Enroll
                    </button>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">এই কোর্স যা থাকছে</h3>

                        <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-3">
                                <Users className="w-4 h-4 text-muted-foreground" />
                                <span>Total Enrolled 32992</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock className="w-4 h-4 text-muted-foreground" />
                                <span>Time Required 50 hours</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Video className="w-4 h-4 text-muted-foreground" />
                                <span>54 Videos</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <BookOpen className="w-4 h-4 text-muted-foreground" />
                                <span>10 Reading & 10 Listening Mocktests</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FileText className="w-4 h-4 text-muted-foreground" />
                                <span>38 Lecture Sheets</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Video className="w-4 h-4 text-muted-foreground" />
                                <span>25 Video Lectures</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Gift className="w-4 h-4 text-muted-foreground" />
                                <span>1 Free Hardcopy Book Delivered</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Facebook className="w-4 h-4 text-muted-foreground" />
                                <span>Facebook Support Group</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock className="w-4 h-4 text-muted-foreground" />
                                <span>Course Validity Lifetime</span>
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
