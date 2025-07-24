import { Check } from "lucide-react";

const learningOutcomes = [
    {
        title: "Detailed rules and regulations of each module of the IELTS test",
        description: ""
    },
    {
        title: "Proper structure and essay type for scoring well in IELTS writing task 1 and 2",
        description: ""
    },
    {
        title: "Time management strategy to get a good band score in the IELTS test",
        description: ""
    },
    {
        title: "Formats and strategies to ace the IELTS test",
        description: ""
    },
    {
        title: "Speaking accurately on any topic in the IELTS speaking test",
        description: ""
    },
    {
        title: "Through the IELTS Reading and IELTS Listening Mock Tests, you will gain a real exam experience and a complete understanding of the Band Score in the IELTS exam.",
        description: ""
    }
];

export const CourseOutcome = () => {
    return (
        <div className="bg-background py-12">
            <div className="max-w-[calc(100%_-_448px)] px-4">
                <h2 className="text-2xl font-bold mb-8">What you will learn by doing the course</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 p-6 gap-6 border border-gray-300 rounded-md">
                    {learningOutcomes.map((outcome, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                            <div>
                                <p className="text-sm font-medium leading-relaxed">{outcome.title}</p>
                                {outcome.description && (
                                    <p className="text-sm text-muted-foreground mt-1">{outcome.description}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};