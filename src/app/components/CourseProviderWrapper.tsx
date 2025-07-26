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
import { useSearchParams } from "next/navigation";

export default function CourseProviderWrapper({ initialData }: { initialData: Data }) {
    const [language, setLanguage] = useState<'en' | 'bn'>('en');
    const [data, setData] = useState<Data | null>(initialData);

    useEffect(() => {
        const fetchData = async () => {
            if (language === 'en') {
                setData(initialData); 
            } else {
                try {
                    const result = await getCourseData(language);
                    setData(result);
                } catch (err) {
                    console.error("Failed to fetch language data:", err);
                }
            }
        };
        fetchData();
    }, [language, initialData]);

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