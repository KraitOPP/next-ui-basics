'use client';
import InstructorsData from '../Data/instructors.json';
import { AnimatedTooltip } from './ui/animated-tooltip';
import { WavyBackground } from './ui/wavy-background';


export default function Instructors() {
    return (
        <div className="flex flex-row items-center justify-center h-[40rem] overflow-hidden relative">
            <WavyBackground className="w-full  mx-auto flex flex-col items-center justify-center h-full">
                <h2 className="text-2xl md:text-4xl lg:text-7xl text-white text-center mb-8 font-bold">Meet Our Instructors</h2>
                <p className="mt-4 mb-10 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quidem praesentium, at animi incidunt mollitia.</p>
                <div className='flex'>
                    <AnimatedTooltip items={InstructorsData} />
                </div>
            </WavyBackground>
        </div>
    )
}