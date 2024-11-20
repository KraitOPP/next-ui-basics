'use client'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import TestimonialsData from '../Data/testimonials.json';



export default function TestimonialCards() {
    return (
        <div className="p-10 h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden ">
            <h2 className='text-3xl font-bold text-center mb-8 z-10'>Our Customer's Storie's</h2>
            <div className='flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8'>
                <div className='w-full max-w-6xl'>
                    <InfiniteMovingCards
                        items={TestimonialsData}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    )
}