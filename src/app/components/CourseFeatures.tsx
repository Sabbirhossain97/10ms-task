import React from 'react'
import { ChevronDown, Check } from "lucide-react";

const courseFeatures = [
    "IELTS Academic ও General Training নিয়ে আলোচনা",
    "Reading, Writing, Listening ও Speaking এর Overview & Format",
    "প্রতিটি প্রশ্নের ধরন-ভিত্তিক উত্তর করার স্ট্র্যাটেজি",
    "ভিডিওর সাথে প্র্যাকটিসের সুযোগ"
];

const mockTestFeatures = [
    "10 Reading & 10 Listening Mock Tests",
    "Computer-delivered IELTS পরীক্ষার এক্সপেরিয়েন্স",
    "উত্তর সাবমিট করার সাথে সাথেই রেজাল্ট",
    "মেকোলা নম্বর, মেকোলা জানতে থেকে নক টেস্ট"
];

function CourseFeatures() {
    return (
        <div className="bg-white rounded-lg p-6 border border-gray-300 max-w-[calc(100%_-_448px)]">
            <h3 className="text-xl font-semibold mb-6">Course Exclusive Feature</h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <h4 className="font-medium mb-4 text-muted-foreground">বিভিন্ন লেকচার</h4>
                    <div className="space-y-3">
                        {courseFeatures.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{feature}</span>
                            </div>
                        ))}
                    </div>

                    <h4 className="font-medium mb-4 mt-8 text-muted-foreground">Reading ও Listening Mock Tests</h4>
                    <div className="space-y-3">
                        {mockTestFeatures.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="bg-gradient-to-br from-red-600 to-red-700 text-white p-6 rounded-lg text-center relative overflow-hidden">
                        <div className="text-4xl font-bold mb-1">50+</div>
                        <div className="font-semibold text-lg tracking-wide">VIDEO LECTURES</div>
                        <div className="mt-4">
                            <img
                                src="/src/assets/instructor-munzereen.jpg"
                                alt="Instructor"
                                className="w-20 h-20 rounded-full mx-auto border-4 border-white/30 object-cover"
                            />
                        </div>
                        <div className="absolute top-4 right-4 text-white/20">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-red-500 to-pink-600 text-white p-6 rounded-lg text-center relative overflow-hidden">
                        <div className="text-2xl font-bold mb-2">IELTS</div>
                        <div className="font-semibold text-sm">READING & LISTENING</div>
                        <div className="font-semibold text-sm">MOCK TESTS</div>
                        <div className="absolute -bottom-2 -right-2 text-white/10 transform rotate-12">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseFeatures