import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import fImage1 from "../assets/facilities/Sauna.png"
import fImage2 from "../assets/facilities/Shower Room.png"
import fImage3 from "../assets/facilities/Locker.png"
import fImage4 from "../assets/facilities/Cardio.png"
import fImage5 from "../assets/facilities/Matras.png"
import fImage6 from "../assets/facilities/Machine.png"
import opeingImage from "../assets/facilities/Operational Time.png"



const GymDetails = ({ name, location, image }) => {
  const facilities = [
    { icon: fImage1, title: "Sauna", description: "Relax body" },
    { icon: fImage2, title: "Shower", description: "After Gym" },
    { icon: fImage3, title: "Locker", description: "Saving Bag" },
    { icon: fImage4, title: "Cardio", description: "Heart Rate" },
    { icon: fImage5, title: "Matress", description: "Equipment" },
    { icon: fImage6, title: "Machine", description: "Saving Bag" },
  ];

  return (
    <div 
      className="w-[379px] h-[670px] bg-white shadow-md rounded-lg p-6 flex flex-col justify-between"
    >
      {/* Title and Location */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        <div className="flex items-center text-gray-600 text-sm mb-4">
          <FaMapMarkerAlt className="mr-2 w-6 h-6 text-[#058CCC]" />
          {location}
        </div>
      </div>

      {/* Gym Image */}
      <div className="flex justify-center mb-6">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover rounded-md" 
        />
      </div>

      {/* Facilities and View All Button */}
      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-base font-semibold font-manrope text-gray-800">Facilities</h4>
          <button 
            className="text-sm text-blue-500 hover:underline"
          >
            View All
          </button>
        </div>
        <ul className="grid grid-cols-3 pb-4 border-b  gap-8">
          {facilities.map((facility, index) => (
            <li key={index} className="flex flex-col items-center gap-1 justify-center text-sm text-gray-600">
              <img src={facility.icon} alt={facility.name} className='w-10 h-10'></img>
              <h5 className="font-semibold text-sm font-manrope text-gray-800">{facility.title}</h5>
              <p className="font-normal text-sm font-inter text-gray-500">{facility.description}</p>
            </li>
          ))}
        </ul>
        <div className='flex mt-6 gap-3 justify-start'>
            <img src= {opeingImage} alt='Opeing Hour'></img>
            <div className='flex flex-col'>
            <h5 className="font-semibold text-sm font-manrope text-gray-800">Opening Work</h5>
            <p className="font-normal text-sm font-inter text-gray-500">05:00 AM - 11.00 PM</p>

            </div>
        </div>
      </div>
    </div>
  );
};

export default GymDetails;
