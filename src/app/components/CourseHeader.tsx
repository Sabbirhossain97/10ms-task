import { Star, Users, Clock, Video, FileText, BookOpen, Gift, Facebook, PhoneCall } from "lucide-react";

function CourseHeader() {
    return (
        <div className="from-hero-start to-hero-end text-white">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Left content */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="text-white border-b-2 border-white pb-2 font-medium">
                                Course instructor
                            </button>
                            <button className="text-white/70 hover:text-white pb-2 font-medium">
                                How the course is laid out
                            </button>
                            <button className="text-white/70 hover:text-white pb-2 font-medium">
                                What you will learn by doing the course
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseHeader