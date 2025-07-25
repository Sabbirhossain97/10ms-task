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
import ContentSlider from "./ContentSlider";
import { Footer } from "./Footer";
export default function CourseProviderWrapper({ data }: { data: Data }) {
    return (
        <CourseContext.Provider value={data}>
            <div className="relative">
                <Header />
                <CourseTitle />
                <div className="max-w-[1200px] flex justify-between mx-auto pb-10">
                    <div className="md:max-w-[calc(100%_-_350px)] lg:max-w-[calc(100%_-_448px)] w-full">
                        <ContentSlider />
                        <CourseInstructor />
                        <CourseLayout />
                        <CourseOutcome />
                        <CourseFeatures />
                        <CourseDetails />
                    </div>
                    <EnrollCard />
                </div>
                <Footer />
            </div>
        </CourseContext.Provider>
    );
}