import React from "react";
import Image from "next/image";
import SectionHeading from "../../components/SectionHeading";
import Markdown from "../../components/Markdown";

const profileImg = "/profile-img.jpg";

const About = ({ about }: { about: string }) => (
  <div id="about" className="w-full py-24 flex flex-col justify-center ">
    <SectionHeading text={"About Me"} index={1} />
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-1 lg:gap-4">
      <div className="sm:col-start-1 sm:col-end-4 leading-normal text-blueGray-500 dark:text-gray-600 about-container">
        <Markdown content={about} isNotFullPage />
      </div>
      <div className="flex justify-center items-center mb-8 sm:mt-0 sm:col-end-6 sm:col-span-2 ">
        <Image
          alt="profile image"
          src={profileImg}
          width={320}
          height={320}
          className="rounded-full h-80 w-80 border-4 border-primary dark:border-primary-light"
        />
      </div>
    </div>
  </div>
);

export default About;
