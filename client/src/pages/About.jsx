import React from 'react';
import {Tilt }from 'react-tilt';
import { useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can also configure other AOS attributes
      once: false // Animation only happens once when the element is scrolled into view
    });
  }, []);
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div data-aos="zoom-in-up">
      <Tilt className="Tilt" options={{ max : 25 }}>
        <div className='max-w-2xl mx-auto p-3 text-center bg-white/30 backdrop-blur-md shadow-xl rounded-lg'>
          <div>
          <div data-aos="zoom-in-down">
            <h1 className='text-3xl font font-semibold text-center my-7'>
              About Us
            </h1>
            </div>
            <div className='text-md text-blue-400 flex flex-col gap-6'>
              <p>
            Intellexa-AI is more than just a club; it’s a dynamic space where minds converge, ideas flourish, and potential of every individual is unleashed. Our mission is to elevate the future vision of our members by providing them a platform for immersive learning, skill development, meaningful engagement along with hands on experience.
            </p>

            <p>
              On this website, you'll find weekly articles and tutorials on topics
              such as web development, software engineering, and programming
              languages. Sahand is always learning and exploring new
              technologies, so be sure to check back often for new content!
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. We believe that a community of learners can help
              each other grow and improve.
            </p>
            </div>
          </div>
        </div>
      </Tilt>
      </div>
    </div>
  );
}
