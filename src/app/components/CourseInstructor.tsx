import { ChevronRight } from "lucide-react";
import { CourseContext } from '@/context/courseContext';
import { useContext } from 'react';

interface Instructor {
    description: string;
    has_instructor_page: boolean;
    name: string;
    image: string;
    short_description: string;
    slug: string;
}

export default function CourseInstructor() {
    const data = useContext(CourseContext);
    const instructorData = data?.sections.find((item) => item.type == 'instructors');
    console.log(instructorData)
    return (
        <div id={instructorData?.name} className="mx-auto px-4 mt-12">
            <h2 className="text-2xl font-bold mb-4">{instructorData?.name}</h2>
            <div className="bg-white flex flex-wrap rounded-lg p-6 border border-gray-300 ">
                {instructorData?.values.map((instructor: Instructor, index) => (
                    <div key={index} className="flex items-start gap-4">
                        <img
                            src={instructor.image}
                            alt="Munzereen Shahid"
                            className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="flex-1">
                            <div className="flex items-center">
                                <h3 className="font-semibold text-lg">{instructor.name}</h3>
                                <ChevronRight className="w-5 h-5 text-muted-foreground" />
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: instructor.description || "" }} className="text-sm text-muted-foreground space-y-1" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
