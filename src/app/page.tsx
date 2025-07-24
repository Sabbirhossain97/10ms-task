import CourseTitle from "./components/CourseTitle";
import Header from "./components/Header";
import CourseInstructor from "./components/CourseInstructor";
import CourseLayout from "./components/CourseLayout";
import { CourseOutcome } from "./components/CourseOutcome";
import CourseFeatures from "./components/CourseFeatures";
import CourseDetails from "./components/CourseDetails";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <CourseTitle />
      <div className="max-w-[1200px] mx-auto pb-10">
        <CourseInstructor />
        <CourseLayout />
        <CourseOutcome />
        <CourseFeatures />
        <CourseDetails/>
      </div>
    </div>
  );
}
