import { Check } from "lucide-react";

function CourseDetails() {
    return (
        <div className="bg-background py-12">
            <div className="max-w-[calc(100%_-_448px)] px-4">
                <h2 className="text-2xl font-bold mb-8">Course details</h2>
                <div className="grid grid-cols-1 p-6 gap-6 border border-gray-300 rounded-md">
                    <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                            <p className="text-sm font-medium leading-relaxed">ইন্টারনেট সংযোগ (ওয়াইফাই বা মোবাইল ইন্টারনেট)</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                            <p className="text-sm font-medium leading-relaxed">স্মার্টফোন অথবা পিসি</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetails