export async function getCourseData(language: string) {
  const res = await fetch(
    `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${language}`,
    {
      headers: {
        'X-TENMS-SOURCE-PLATFORM': 'web',
      },
      next: { revalidate: 60 }, 
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch course data");
  }

  const json = await res.json();
  return json.data;
}