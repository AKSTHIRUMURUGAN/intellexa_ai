import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import CallToAction from '../components/CallToAction';
import ProfileCard from '../components/ProfileCard';


export default function WhyWe() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can also configure other AOS attributes
      once: false // Animation only happens once when the element is scrolled into view
    });
  }, []);
  
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'><div data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
            <h1 className='text-3xl font-semibold'>WHAT SETS US APART</h1>
</div> 
      

        <div data-aos="fade-up-right" className='my-20'> {/* Example AOS animation */}
        <ProfileCard
          key="1"
          name="1. Project Creation and Paper Presentations:"
          role="Immerse yourself in the world of hands-on learning. Intellexa-AI offers a space to collaborate on innovative projects and present ground-breaking ideas through paper presentations. Gain practical experience and make your mark in the tech world. Along with the certificates we provide that helps to build your resume."
          imgSrc="presentation.jpg"  
        />
          
        </div>
        <div data-aos="fade-down-left" data-aos-delay="100" className='my-20'>
        <ProfileCard
          key="2"
          name="2.Knowledge Enrichment: "
          role="Dive deep into the realms of artificial intelligence, machine learning, deep learning, data science, internet of things (IOT) and much more interesting topic that conquer todays world. Our club offers workshops, seminars, projects and discussions led by experts, ensuring that you gain a comprehensive understanding of the latest advancements in AI and everything that you need to hear in todays time."
          imgSrc="knowledge1.jpg"          
        />
        </div>
        <div data-aos="flip-left" data-aos-delay="200" className='my-20'>
        <ProfileCard
          key="3"
          name="3.Resume Enhancement:"
          role="Elevate your resume with experiences that truly matter. Engage in activities that showcase your skills, creativity, and commitment to personal and professional growth. At Intellexa-AI, we believe in crafting resumes that stand out and tell a compelling story of your journey."
          imgSrc="resume.jpg"          
        />
        </div>
        <div data-aos="flip-up" data-aos-delay="300" className='my-20'>
        <ProfileCard
          key="4"
          name="4.Fun Activities and Competitions: "
          role="Balance is key! Enjoy the learning process with our fun activities and participate in both intra and inter-college competitions. Challenge yourself, collaborate with peers, and celebrate achievements together.And many such riveting things that helps you build yourself and your future so we are very eager to travel this foresightful journey along with you."
          imgSrc="competetion.jpg"          
        />
        </div>
        <div data-aos="zoom-out" data-aos-delay="400" className='my-20'> 
        <ProfileCard
          key="5"
          name="EXPLORING THE AI FRONTIER  "
          role="Artificial Intelligence is the cornerstone of the future, and at Intellexa-AI, we embrace its potential. Our club is committed to exploring and pushing the boundaries of AI. From introductory sessions to advanced projects, we cater to all skill levels, ensuring that every member can contribute meaningfully to the AI landscape and gain a good amount of knowledge from it and learn how to imply it."
          imgSrc="ai.jpg"          
        />
        </div>   
      <div data-aos="zoom-in" data-aos-delay="400" className='my-20'> 
      <CallToAction />
      </div>  


    </div>
    
  );
}