import { useContext } from 'react';
import { CourseContext } from '@/context/courseContext';

interface CourseLayout {
    icon: string;
    id: string;
    subtitle: string;
    title: string;
}

export default function CourseLayout() {
    const data = useContext(CourseContext);
    const courseLayoutData = data?.sections.find((item) => item.type == 'features');
    return (
        <div className="bg-background py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-8">{courseLayoutData?.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 bg-[#111827] border rounded-md">
                    {courseLayoutData?.values?.map((course: CourseLayout, index) => {
                        return (
                            <div key={index} className="rounded-lg p-6 transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div>
                                        <img src={course.icon} className=" text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-white text-lg mb-2">{course.title}</h3>
                                        <p className="text-[#9CA3AF] text-sm leading-relaxed">
                                            {course.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
