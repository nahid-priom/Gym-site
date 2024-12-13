import React from "react";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/hero-background.png";
import profile1 from "../assets/profile-icon/Profile 1.png";
import profile2 from "../assets/profile-icon/Profile 2.png";
import profile3 from "../assets/profile-icon/Profile 4.png";

import location from "../assets/Location.png";
import maintain from "../assets/Maintain.png";
import membership from "../assets/Membership.png";

const HeroSection = () => {
  return (
    <section
      className="relative max-w-[1440px] h-[720px] lg:h-[1044px] mx-auto bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar className="absolute bg-transparent w-full" />

      <div className="absolute top-[115px] lg:top-[180px] text-center text-white px-6">
        <div className="flex items-center justify-center gap-4 lg:gap-8 flex-col">
          {/* Profile images and Text */}
          <div className="flex items-center justify-center w-[293px] h-[56px] bg-black py-2 px-3 rounded-[90px]">
            <div className="relative flex items-center">
              <img
                src={profile1}
                alt="Profile 1"
                className="w-10 h-10 rounded-full"
              />
              <img
                src={profile2}
                alt="Profile 2"
                className="w-10 h-10 rounded-full -ml-4"
              />
              <img
                src={profile3}
                alt="Profile 3"
                className="w-10 h-10 rounded-full -ml-4"
              />
            </div>

            <div className="ml-3 text-white">
              <h3 className="text-[12px] font-semibold">
                Over 100k+ Members Joined
              </h3>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-manrope md:text-6xl lg:text-[96px] font-semibold mb-4">
            Prioritize Your Health
          </h1>

          {/* Description Text */}
          <p className="text-lg font-normal md:text-xl">
            Transform your life by investing in your wellness
          </p>

          {/* Search Bar */}
          <div className="flex items-center max-w-[480px] lg:w-[487px] h-[59px] px-3 py-2 rounded-[90px] mx-auto bg-white overflow-hidden shadow-lg">
            <input
              type="text"
              placeholder="Search gym location, city nearby..."
              className="w-full px-4 py-2 text-black outline-none"
            />
            <button className="bg-black w-[104px] h-[43px] rounded-[24px] text-white font-semibold hover:bg-gray-600 transition">
              Search
            </button>
          </div>
          {/* New Cards Section */}
          <div className="flex flex-col shadow-xl rounded-[4px]  md:flex-row max-w-[1200px] absolute top-[518px] lg:top-[701px] p-8 gap-[64px] bg-white justify-center mx-auto">
            {/* New Section */}
            <div className="flex flex-col w-[330px] h-[217px] items-center justify-center text-black">
              {/* Image */}
              <img
                src={location}
                alt="Location Icon"
                className="w-[76px] h-[76px] rounded-full mb-4"
              />
              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">
                Find Nearby Location
              </h3>
              {/* Paragraph */}
              <p className="text-xl font-normal text-center">
                Find the nearby gym that near your location to transform your
                healthy journey
              </p>
            </div>

            {/* New Section */}
            <div className="flex flex-col w-[330px] h-[217px] items-center justify-center text-black">
              {/* Image */}
              <img
                src={membership}
                alt="Membership"
                className="w-[76px] h-[76px] rounded-full mb-4"
              />
              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">Become Membership</h3>
              {/* Paragraph */}
              <p className="text-xl font-normal text-center">
                Access to all FitCamp gyms and become part of our exclusive
                healthy community.
              </p>
            </div>

            {/* New Section */}
            <div className="flex flex-col w-[330px] h-[217px] items-center justify-center text-black">
              {/* Image */}
              <img
                src={maintain}
                alt="Maintain"
                className="w-[76px] h-[76px] rounded-full mb-4"
              />
              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">Maintain The Body</h3>
              {/* Paragraph */}
              <p className="text-xl font-normal text-center">
                Ensure long-term wellness with effective healthy body
                maintenance strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
