import CourseProviderWrapper from "./components/CourseProviderWrapper";
import { getCourseData } from "@/lib/getCourseData";

export default async function Home() {
  const data = await getCourseData("en"); 

  return <CourseProviderWrapper initialData={data} />;
}
