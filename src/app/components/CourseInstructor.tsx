import React from 'react'
import { ChevronRight } from "lucide-react";

function CourseInstructor() {
    return (
        <div className="mx-auto px-4 mt-12">
            <h2 className="text-2xl font-bold mb-4">Course instructor</h2>
            <div className="bg-white rounded-lg p-6 border border-gray-300 max-w-[calc(100%_-_448px)]">
                <div className="flex items-start gap-4">
                    <img
                        //   src={instructorImage}
                        alt="Munzereen Shahid"
                        className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-lg">Munzereen Shahid</h3>
                            <ChevronRight className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div className="text-sm text-muted-foreground space-y-1">
                            <p>MSc (English), University of Oxford (UK);</p>
                            <p>BA, MA (English), University of Dhaka;</p>
                            <p className="font-medium">IELTS: 8.5</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseInstructor