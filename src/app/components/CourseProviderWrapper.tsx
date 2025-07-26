'use client';
import { useEffect, useState } from "react";
import { getCourseData } from "@/lib/getCourseData";
import { CourseContext } from "@/context/courseContext";
import Header from "./Header";
import CourseTitle from "./CourseTitle";
import CourseInstructor from "./CourseInstructor";
import CourseLayout from "./CourseLayout";
import CourseOutcome from "./CourseOutcome";
import CourseFeatures from "./CourseFeatures";
import CourseDetails from "./CourseDetails";
import EnrollCard from "./EnrollCard";
import ContentSlider from "./ContentSlider";
import { Footer } from "./Footer";
import { Data } from "@/interfaces/course";
import EnrollCardSmall from "./EnrollCardSmall";

export default function CourseProviderWrapper() {
    const [language, setLanguage] = useState<'en' | 'bn'>('en');
    const [data, setData] = useState<Data | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getCourseData(language);
            setData(result);
        };
        fetchData();
    }, [language]);

    if (!data) return <div className="p-4 min-h-screen flex justify-center items-center font-bold text-xl">Loading...</div>;

    return (
        <CourseContext.Provider value={data}>
            <div className="relative">
                <Header language={language} setLanguage={setLanguage} />
                <CourseTitle />
                <div className="max-w-[1200px] relative flex justify-between mx-auto pb-10">
                    <div className="md:max-w-[calc(100%_-_350px)] lg:max-w-[calc(100%_-_448px)] w-full">
                        <ContentSlider />
                        <EnrollCardSmall />
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