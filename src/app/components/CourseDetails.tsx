import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { useContext } from 'react';
import { CourseContext } from '@/context/courseContext';

interface CourseDetails {
    description: string;
    icon: string;
    id: string;
    title: string;
}

export default function CourseDetails() {
    const data = useContext(CourseContext);
    const courseDetailsData = data?.sections.find((item) => item.type == 'about');

    return (
        <div className="bg-background py-12 px-4">
            <h3 className="text-xl font-semibold mb-6">{courseDetailsData?.name}</h3>
            <div className="border border-gray-300 p-4 rounded-lg">
                <Accordion.Root type="single" collapsible className="w-full">
                    {courseDetailsData?.values?.map((details: CourseDetails, index) => (
                        <Accordion.Item value={`item-${details.id}`} className={`${index < (courseDetailsData?.values?.length - 1) && 'border-b border-dashed border-gray-300'}`}>
                            <Accordion.Trigger className="flex w-full justify-between items-center py-4 font-medium">
                                <span dangerouslySetInnerHTML={{ __html: details.title || "" }} />
                                <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 cursor-pointer" />
                            </Accordion.Trigger>
                            <Accordion.Content className="pb-4 pt-2 text-gray-600">
                                <span dangerouslySetInnerHTML={{ __html: details.description || "" }} />
                            </Accordion.Content>
                        </Accordion.Item>
                    ))}
                </Accordion.Root>
            </div>
        </div>
    )
}
