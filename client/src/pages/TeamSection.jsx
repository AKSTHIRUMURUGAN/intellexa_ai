import React from 'react';
import ClubMembers from '../components/ClubMember';
// Import AOS CSS

const TeamSection = () => {




  const clubData = [
    {
      position: "Head Club Operations",
      members: ["J P Sai Sravanthi"]
    },
    {
      position: "Coordinator Club Operations",
      members: ["G K SowmiyaNarayan", "Kanimozhi S"]
    },
    {
      position: "Coordinator Technical Operations",
      members: ["Prajein C K", "Amritha"]
    },
    {
      position: "Creative Head",
      members: ["Abhignya", "Monish E"]
    },
    {
      position: "Event Head",
      members: ["Akash Narayan P"]
    },
    {
      position: "Technical Lead",
      members: ["Mohamed Safeeq", "Jitheeswaran", "Swetha", "Varun Kumar V", "Charan Raj D K", "Mrithika D", "Yudeeswaran V"]
    },
    {
      position: "Graphics and Poster Designer",
      members: ["Shiiv R S", "Kaushik S", "Anand S"]
    },
    {
      position: "Web Master",
      members: ["Thirumurugan A K S"]
    },
    {
      position: "Content Writer",
      members: ["Abinauv R", "Solainarayanan K S"]
    }
  ];
  
  
  const teamMembers = [
    {
      name: 'J P Sai Sravanthi',
      role: 'Head Club Operations',
      imagePath: 'Sai Sravanthi.jpg',
      bio: "I am Sai Sravanthi, an ambitious, outspoken and social person. I have good leadership and communication skills. I have good programming skills. I have a tech-savvy side as well.I've always had a knack for designing and problem solving.I am also a perfectionist, which leads me to look into details a bit too much. I know English, Tamil, Telugu and Hindi."
    },
    {
      name: 'G K SowmiyaNarayan',
      role: 'Coordinator Club Operations',
      imagePath: 'SowmiyaNarayan.jpg',
      bio: "I am sowmiyanarayannan    from cse year 2 and i am a  hardworking  ,ambitious  and passionate  person"
    },
    {
      name: 'Kanimozhi S',
      role: 'Coordinator Club Operations',
      imagePath: 'Kanimozhi.jpg',
      bio: "As the coordinator of INTELLEXA-AI, I offer a blend of leadership and creativity, grounded in a deep understanding of our club's dynamics. I'm driven by a passion for innovation and dedicated to our mission. With honed organizational skills, I'll ensure efficient execution and foster member engagement. Let's embark on this journey together, fueled by collaboration and personal dedication, reaching new heights of success."
    },
    {
      name: 'Prajein C K',
      role: 'Coordinator Technical Operations',
      imagePath: 'Prajein.jpg',
      bio: "As a sophomore adept in Full Stack, AR/VR, Game, iOS/Android App Development, and MLops/DevOps, my four hackathon wins underscore my knack for innovation. A natural leader, I excel in fostering teamwork and innovation. My strengths in creativity, innovation, and communication propel tech projects to success, pushing boundaries with teamwork and inclusivity." 
    },
    {
      name: 'Amritha',
      role: 'Coordinator Technical Operations',
      imagePath: 'Amritha.jpg',
      bio: "I am the coordinator of technical operations."
    },
    {
      name: 'Abhignya',
      role: 'Creative Head',
      imagePath: 'Abhignya.jpg',
      bio: "I would like to describe myself as a creative person. I am a good listener with good problem solving skills. I like to show my creativity in handicrafts and other DIY projects. I'm learning new softwares to improve my editing skills. I love photography. I am a classical dancer and singer."
    },
    {
      name: 'Monish E',
      role: 'Creative Head',
      imagePath: 'Monish.jpg',
      bio: "I'm Monish, a second-year Computer Science and Design student at Rajalakshmi Engineering College, passionate about web development, graphic design, and UI/UX. I thrive on merging creativity with technology for seamless user experiences. Committed to continuous learning, I'm keen on applying my skills in innovative projects and am eager for collaborations in these dynamic fields." 
    },
    {
      name: 'Akash Narayan P',
      role: 'Event Head',
      imagePath: 'Akash Narayan.jpg',
      bio: "A confident, ambitious person, with a mindset to explore new possibilities and adventures and ready to face anything at any given point of time. A calm and chill personality with friendly manners and approachable anytime. Iam a foodie, a crazy petrolhead and love to travel."
    },
    {
      name: 'Mohamed Safeeq',
      role: 'Technical Lead',
      imagePath: 'Mohamed Safeeq.jpg',
      bio: "I'm Mohamed Safeeq, a CS & Business degree student with a passion for AWS and RedHat Linux. I excel in managing communities, utilizing advanced protection bots, and contributing to projects as a community moderator and Telegram bot developer. Additionally, I am an investor, trader, and proficient in overseeing community bots."
    },
    {
      name: 'Jitheeswaran',
      role: 'Technical Lead',
      imagePath: 'Jitheeswaran.jpg',
      bio: "I am a freelancer and i am working in various domains such as ml., iot, web development etc and i am working in both start-up and creating product of my company stark Industries."
    },
    {
      name: 'Swetha',
      role: 'Technical Lead',
      imagePath: 'Swetha.jpg',
      bio: "I'm Swetha, a first-year Computer Science student at Rajalakshmi Engineering College. While learning is ongoing, I'm eager to showcase and grow my skills, fostering an environment for personal and professional growth. My projects span solar energy conservation, waste management, and more. I'm intrigued by AR/VR and healthcare tech advancements, aiming for future projects in ML, DL, and neural networks."
    },
    {
      name: 'Varun Kumar V',
      role: 'Technical Lead',
      imagePath: 'Varun Kumar.jpg',
      bio: "I am a dynamic and very self-motivated person always eager to learn something new. I believe I have good leadership qualities. I also love to take responsibility for leading something. I value teamwork and collective achievement. I have good project management skills."
    },
    {
      name: 'Charan Raj D K',
      role: 'Technical Lead',
      imagePath: 'Charan Raj.jpg',
      bio: "I am a creative and versatile designer, passionate about bringing innovative concepts to life through a combination of creativity and technical proficiency. With a good experience in utilizing a diverse set of design tools, including Figma, Photoshop, Illustrator, Blender, and Unity, I have successfully translated ideas into visually compelling and user-centric designs.As of Intellexa AI I am one among the empowering techinical lead for Augmented and Virtual Reality."
    },
    {
      name: 'Mrithika D',
      role: 'Technical Lead',
      imagePath: 'Mrithika.jpg',
      bio: "I am a sophomore in CSE. I have knowledge in C, Java, python, app development, web development, DSA, arduino. I have made a project called 'smart kitchen' which is IOT based, and have been a part of the project that is used to identify dark web, I have also developed simple game projects. "
    },
    {
      name: 'Yudeeswaran V',
      role: 'Technical Lead',
      imagePath: 'logo.png',
      bio: 'I am a Technical Lead'
    },
    {
      name: 'Shiiv R S',
      role: 'Graphics and Poster Designer',
      imagePath: 'Shiiv.jpg',
      bio: "I am the intellexa AI team's graphics and poster designer and I am also interested in being a part of the technical team."
    },
    {
      name: 'Kaushik S',
      role: 'Graphics and Poster Designer',
      imagePath: 'Kaushik.jpg',
      bio: "I am poster and graphics designer and knows how to manage things around me. And a team worker. Can co operate with my team and everyone. Knows how to handle critical situations and knows to take right decision. I use Photoshop, canva, after effects for editing. And have a passion in filming videos which can be used for marketing. Thankyou"
    },
    {
      name: 'Anand S',
      role: 'Graphics and Poster Designer',
      imagePath: 'Anand.jpg',
      bio: "I am a neutral headed person who is balancing both passion and studies. I am creative, hard-working, and detail-oriented. Even when things change at the last minute, I am able to adjust accordingly and meet tight deadlines. I like to study new things. I am confident in my abilities to produce, and while I prepare for the worst, I do the work necessary to tilt the odds that the best will happen."
    },
    {
      name: 'Thirumurugan A K S',
      role: 'Web Master',
      imagePath: 'Thirumurugan.jpg',
      bio: "I'm AKS.THIRUMURUGAN, a Fullstack web,app,game developer skilled in C, C++, C#, Java, Python, and JavaScript. My project Parkveu clinched runner-up in a national hackathon, highlighting my commitment to excellence. As leader of Guvi-REC and Intellexa AI, I foster a collaborative learning environment. With ambassador roles in Guvi, Skill Vertex, and Let's Upgrade, my diverse leadership aligns perfectly with the ethos of a Campus Ambassador."
    },
    {
      name: 'Abinauv R',
      role: 'Content Writer',
      imagePath: 'Abinauv.jpg',
      bio: "I'm Abinauv from the CSD department and a content writer at Intellexa AI. Fluent in English and a skilled communicator, I collaborate effectively with team members, ensuring tasks are completed with sincerity. Eager to learn and grow, I'm committed to elevating the club by reaching more members and delivering top-quality content." 
    },
    {
      name: 'Solainarayanan K S',
      role: 'Content Writer',
      imagePath: 'Solainarayanan.jpg',
      bio: "I have a strong ethic and am very motivated towards what I do. I enjoy working in groups and I am always happy to help."
    }
  ];
  
  

  return (
    <>
 
      <ClubMembers clubData={clubData} teamMembers={teamMembers} />
    
      

      </>
  );
};


export default TeamSection;
