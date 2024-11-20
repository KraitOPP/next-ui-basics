'use client'
import { StickyScroll } from "./ui/sticky-scroll-reveal"
import whyChooseData from '../Data/whychooseData.json';

interface chooseData{
    title:string,
    description:string
}

export default function WhyChooseUs(){
    const data:chooseData[] = whyChooseData.whyChooseData;
    return (
        <div className="mt-5">
            <StickyScroll content={data}/>
        </div>
    )
}