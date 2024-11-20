'use client';
import Link from "next/link";
import coursesData from '../Data/courses.json';
import { HoverEffect } from "./ui/card-hover-effect";

export default function UpcomingWebinars(){
    const data = coursesData.courses;
    return (
        <div className="p-10 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Feautured Webinars</h2>
                    <p className="mt-4 mb-10 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Enhance Your Skills</p>
                </div>
                <div className="mt-10">
                    <HoverEffect items={data.map(webinar=>(
                        {
                            title:webinar.title,
                            description:webinar.description,
                            link:`/${webinar.slug}`,
                        }
                    ))} />
                </div>
                <div className="mt-20 text-center">
                    <Link className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200" href={"/"}>View All Webinars</Link>
                </div>
            </div>
        </div>
    )
}