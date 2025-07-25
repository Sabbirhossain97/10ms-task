'use client';
import { CourseContext } from "@/context/courseContext";
import Header from "./Header";
import CourseTitle from "./CourseTitle";
import CourseInstructor from "./CourseInstructor";
import CourseLayout from "./CourseLayout";
import CourseOutcome from "./CourseOutcome";
import CourseFeatures from "./CourseFeatures";
import CourseDetails from "./CourseDetails";
import EnrollCard from "./EnrollCard";
import { Data } from "@/interfaces/course";

export default function CourseProviderWrapper({ data }: { data: Data }) {
    return (
        <CourseContext.Provider value={data}>
            <div className="relative">
                <Header />
                <CourseTitle />
                <div className="max-w-[1200px] flex justify-between mx-auto pb-10">
                    <div className="max-w-[calc(100%_-_448px)]">
                        <CourseInstructor />
                        <CourseLayout />
                        <CourseOutcome />
                        <CourseFeatures />
                        <CourseDetails />
                    </div>
                    <div className='sticky top-6 right-0 p-6 self-start w-full'>
                        <EnrollCard />
                    </div>
                </div>
            </div>
        </CourseContext.Provider>
    );
}