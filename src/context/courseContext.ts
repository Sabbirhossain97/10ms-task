'use client'
import { createContext } from "react";
import { Data } from "@/interfaces/course";

export const CourseContext = createContext<Data | null>(null);