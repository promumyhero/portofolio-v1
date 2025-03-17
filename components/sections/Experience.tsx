import { workExperiences } from "@/lib/navitem";
import React from "react";
import TiltedCard from "../reactbits/Components/TiltedCard/TiltedCard";

const Experience = () => {
  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">My Work Experience</p>

        <div className="work-container">
          {/* Left side - TiltedCard - Only modify this part */}
          <div className="work-canvas h-full flex items-center justify-center">
            <TiltedCard
              imageSrc="/assets/profile.jpg"
              altText="Profile Picture"
              captionText="Profile Picture"
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="text-white font-bold">Kendrick Lamar - GNX</p>
              }
              objectFit="cover"
            />
          </div>

          {/* Right side - Work content - Keep this unchanged */}
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((experience, index) => (
                <div
                  className="work-content_container group"
                  key={`experience-${experience.name}-${index}`}
                >
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img
                        className="w-full h-full"
                        src={experience.icon}
                        alt={`${experience.name} logo`}
                      />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">
                      {experience.name}
                    </p>
                    <p className="text-sm mb-5">
                      {experience.pos} | <span>{experience.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">
                      {experience.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
