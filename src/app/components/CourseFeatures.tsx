import { Check } from "lucide-react";
import { useContext } from 'react';
import { CourseContext } from '@/context/courseContext';

interface CourseFeatures {
    checklist: string[];
    file_type: string;
    file_url: string;
    id: string;
    title: string;
    video_thumbnail: string;
}

export default function CourseFeatures() {
    const data = useContext(CourseContext);
    const courseFeaturesData = data?.sections.find((item) => item.type == 'feature_explanations');

    return (
        <div className='px-4'>
            <h3 className="text-xl font-semibold mb-6">{courseFeaturesData?.name}</h3>
            <div className="bg-white rounded-lg p-6 border border-gray-300 ">
                <div className="flex flex-col gap-4">
                    {courseFeaturesData?.values?.map((feature: CourseFeatures, index) => (
                        <div key={index} className={`flex justify-between ${(index < courseFeaturesData?.values.length - 1) && 'border-b border-gray-300'}  pb-4`}>
                            <div>
                                <h4 className="font-medium mb-4 text-muted-foreground">{feature.title}</h4>
                                <div className="space-y-3">
                                    {feature?.checklist?.map((list: string, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm">{list}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {feature.file_type === 'image' && <div>
                                <img
                                    src={feature.file_url}
                                    alt="Instructor"
                                    className="w-[220px] h-[220px] mx-auto border-4 border-white/30 object-cover"
                                />
                            </div>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
