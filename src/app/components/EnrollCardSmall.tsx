import { useContext } from "react";
import { CourseContext } from "@/context/courseContext";
import { Checklist } from "@/interfaces/course";

function EnrollCardSmall() {
    const data = useContext(CourseContext);
    return (
        <div className="p-4 block md:hidden">
            <div className="mb-2">
                <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold">৳1000</span>
                </div>
            </div>
            <button className="w-full cursor-pointer text-white bg-green-600 hover:bg-green-700 mb-6 font-semibold rounded-md px-8 py-3 relative">
                <span className="relative z-10">{data?.cta_text?.name}</span>
                <span className="absolute bottom-0 left-0 w-full h-[6px] bg-green-700 rounded-b-md"></span>
            </button>
            <div className="space-y-4">
                <h3 className="font-semibold text-lg">এই কোর্স যা থাকছে</h3>
                <div className="space-y-3 text-md">
                    {data?.checklist?.map((list: Checklist) => (
                        <div key={list.id} className="flex items-center gap-3">
                            <img src={list.icon} className="w-5 h-5 text-muted-foreground" />
                            <span>{list.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EnrollCardSmall