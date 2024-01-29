import React from 'react';
import MemberCardNew from './MemberCardNew'; // Import MemberCardNew
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect} from 'react';
const ClubMembers = ({ clubData, teamMembers }) => {
    // Find team member details by name
    const findMemberDetails = (name) => {
        return teamMembers.find(member => member.name === name);
    };

    useEffect(() => {
        AOS.init({
          duration: 1000, // You can also configure other AOS attributes
          once: false // Animation only happens once when the element is scrolled into view
        });
      }, []);
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4 text-center">Club Members</h1>
            {clubData.map((item, index) => (
                <div key={index} className="mb-6">
                    <h2 className="text-xl font-bold mb-2 text-center">{item.position}</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {item.members.map((memberName, idx) => {
                            const memberDetails = findMemberDetails(memberName);
                            return memberDetails ? (
                                <div data-aos="flip-down">
                                <MemberCardNew
                                    key={idx}
                                    name={memberDetails.name}
                                    role={memberDetails.role}
                                    imagePath={memberDetails.imagePath}
                                    bio={memberDetails.bio}
                                />
                                </div>
                            ) : null;
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ClubMembers;
