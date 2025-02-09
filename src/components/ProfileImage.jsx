import React from 'react';
import profile from '../assets/profile.jpg';

const ProfileImage = () => {
  return (
    <div className="">
      <div className="w-96 h-96 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
        <img 
          className="w-full h-full object-cover transform scale-150"  // Increased scale
          src={profile} 
          alt="Ishaan Apte Profile Image" 
        />
      </div>
      {/* <p className="mt-4 text-lg font-bold text-gray-700">Ishaan Apte</p> */}
    </div>
  );
};

export default ProfileImage;