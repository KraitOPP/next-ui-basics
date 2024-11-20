import React from 'react'
import HeroSection from '@/components/HeroSection';
import FeauturedCourses from '@/components/feauteredCourses';
import WhyChooseUs from '@/components/whychooseus';
import TestimonialCards from '@/components/testimonialCards';
import UpcomingWebinars from '@/components/upcomingWebinars';
import Instructors from '@/components/Instructors';


export default function Home() {
  return (
      <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]'>
        <HeroSection />
        <FeauturedCourses />
        <WhyChooseUs />
        <TestimonialCards />
        <UpcomingWebinars />
        <Instructors />
      </main>
  );
}
