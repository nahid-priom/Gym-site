import React from "react";
import HeroSection from "../components/HeroSection";
import GymDetails from "../components/GymDetails";
import gym1 from "../assets/gym-image/Gym 3.png";
import gym2 from "../assets/gym-image/Gym 5.png";
import gym3 from "../assets/gym-image/image.png";

const Home = () => {
  const gymData = [
    {
      name: "Fitcamp Senayan City Victory",
      location: "Senayan, Jakarta Selatan",
      image: gym1,
    },
    {
      name: "Fitcamp Padang Winner",
      location: "Kota Padang, Sumtra Barat",
      image: gym2,
    },
    {
      name: "Fitcamp Majapahit Solo",
      location: "Solo, Jawa Tengah",
      image: gym3,
    },
  ];

  return (
    <div className=" bg-gray-50 h-full">
      <HeroSection />
      <div className="pt-44 pb-20 lg:pb-44 mt-[616px] lg:mt-0 px-4 lg:px-0 max-w-[1200px] mx-auto">
        <div className="flex flex-col sm:flex-row gap-2 justify-between">
          <div>
            <h2 className="text-5xl font-normal mb-6 font-manrope text-gray-800">
              Latest Added
            </h2>
            <p className="text-gray-600 mb-2 text-base font-inter mt-2">
              New gyms from around the city with variety facilities available
            </p>
          </div>
          <button className="text-base font-semibold text-white bg-black w-[105px] h-[43px] rounded-[24px] hover:underline">
            See All
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gymData.map((gym, index) => (
            <GymDetails
              key={index}
              name={gym.name}
              location={gym.location}
              image={gym.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
