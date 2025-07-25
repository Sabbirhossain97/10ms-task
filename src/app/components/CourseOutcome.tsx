import { Check } from "lucide-react";
import { useContext } from 'react';
import { CourseContext } from '@/context/courseContext';

interface CourseOutcome {
    color: string;
    icon: string;
    id: string;
    text: string;
}

export default function CourseOutcome() {
    const data = useContext(CourseContext);
    const courseOutcomeData = data?.sections.find((item) => item.type == 'pointers');
    return (
        <div id={courseOutcomeData?.name} className="bg-background py-12">
            <div className="px-4">
                <h2 className="text-2xl font-bold mb-8">{courseOutcomeData?.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 p-6 gap-6 border border-gray-300 rounded-md">
                    {courseOutcomeData?.values?.map((outcome: CourseOutcome) => (
                        <div key={outcome.id} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                            <div>
                                <p className="text-sm font-medium leading-relaxed">{outcome.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};