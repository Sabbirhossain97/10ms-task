import { useState, useEffect, useRef, useContext } from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CourseContext } from '@/context/courseContext';

function ContentSlider() {
    const data = useContext(CourseContext);
    const contents = data?.sections?.filter((item) => item.name).map((item) => item.name);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [atEnd, setAtEnd] = useState(false);
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const SCROLL_STEP = 300;

    const scrollLeft = () => {
        const container = sliderRef.current;
        if (container) {
            const newPosition = Math.max(0, container.scrollLeft - SCROLL_STEP);
            container.scrollTo({ left: newPosition, behavior: 'smooth' });
        }
    };
    const scrollRight = () => {
        const container = sliderRef.current;
        if (container) {
            const maxScroll = container.scrollWidth - container.clientWidth;
            const newPosition = Math.min(maxScroll, container.scrollLeft + SCROLL_STEP);
            container.scrollTo({ left: newPosition, behavior: 'smooth' });
        }
    };

    const updateScrollState = () => {
        const container = sliderRef.current;
        if (container) {
            setScrollPosition(container.scrollLeft);
            const maxScroll = container.scrollWidth - container.clientWidth;
            setAtEnd(container.scrollLeft >= maxScroll - 1 || maxScroll <= 0);
        }
    };

    useEffect(() => {
        updateScrollState();
        const handleResize = () => updateScrollState();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const handleScroll = () => updateScrollState();

    return (
        <div className="hidden md:block sticky top-16 self-start z-[1000] px-4">
            <div className='relative pt-6 px-8 border-b border-gray-300 bg-white'>
                <button
                    className={`${scrollPosition === 0 ? 'opacity-20' : 'oapcity-100'} cursor-pointer absolute left-0 top-1/3 rounded-full p-[4px] bg-[#7F7F7F]`}
                    onClick={scrollLeft}
                    tabIndex={0}
                    aria-disabled={false}
                    type="button"
                    disabled={scrollPosition < 0 ? true : false}
                >
                    <ChevronLeft className="h-5 w-5 text-white" />
                </button>
                <div
                    ref={sliderRef}
                    onScroll={handleScroll}
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    className="flex space-x-4 overflow-x-auto whitespace-nowrap scrollbar-hide pb-4"
                >
                    {contents?.map((content, index) => (
                        <a key={index} href={`#${content}`}>{content}</a>
                    ))}

                </div>
                <button
                    className={`${!atEnd ? 'opacity-100' : 'opacity-20'} cursor-pointer absolute right-0 top-1/3 rounded-full p-[4px] bg-[#7F7F7F]`}
                    onClick={scrollRight}
                    tabIndex={0}
                    aria-disabled={false}
                    type="button"
                    disabled={!atEnd ? false : true}
                >
                    <ChevronRight className="h-5 w-5 text-white" />
                </button>
            </div>
        </div>
    )
}

export default ContentSlider