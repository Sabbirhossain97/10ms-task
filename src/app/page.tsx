import CourseHeader from "./components/CourseHeader"
import CourseTitle from "./components/CourseTitle";
import Header from "./components/Header";
import CourseInstructor from "./components/CourseInstructor";
import CourseLayout from "./components/CourseLayout";
import { CourseOutcome } from "./components/CourseOutcome";
import CourseFeatures from "./components/CourseFeatures";

export default function Home() {
  return (
    <div >
      <Header />
      <CourseTitle />
      {/* <CourseHeader /> */}
      <div className="max-w-[1200px] mx-auto">
        <CourseInstructor />
        <CourseLayout />
        <CourseOutcome/>
        <CourseFeatures/>
      </div>
    </div>
  );
}
