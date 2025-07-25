import axios from "axios";

export async function getCourseData() {
    try {
        const response = await axios.get('https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course', {
            params: { lang: 'en' },
            headers: {
                'X-TENMS-SOURCE-PLATFORM': 'web',
            },
        });

        return response.data.data;
    } catch (error) {
        throw new Error("Failed to fetch course data");
    }
}