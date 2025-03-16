import React from "react";
import ButtonHero from "../general/ButtonHero";
import { Globe } from "../magicui/globe";
import CopyButton from "../general/CopyButton";
import TechStackCloud from "../general/TechStackCloud";

const About = () => {
  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="gird-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            {/**
             * nanti disi sesuai kebutuhan
             */}
            <div>
              <p className="grid-headtext">Ridho Hery Winarto</p>
              <p className="grid-subtext">
                Medical Informatics graduate specializing in fullstack
                development, cloud computing, and product management. I combine
                healthcare knowledge with technical expertise to develop
                innovative digital solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <TechStackCloud />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools
                that allow me to build robust and scalable applications
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe />
            </div>
            <div>
              <p className="grid-headtext">
                I work remotely across most of the world
              </p>
              <p className="grid-subtext">I'm based in Indonesia</p>
              <ButtonHero
                name="Contact Me"
                isBeam
                containerClass="w-full mt-10"
              />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building digital solutions that make
                a difference. With experience in TypeScript, JavaScript,
                Next.js, and cloud technologies, I've developed applications
                that serve real-world needs in healthcare and agriculture. I'm
                constantly learning and exploring new technologies to enhance my
                skillset.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center" id="contact">
                Contact me
              </p>{" "}
              <CopyButton
                textToCopy="ridhoherywinarto@gmail.com"
                displayText="ridhoherywinarto@gmail.com"
                className="bg-transparent hover:bg-black-300 lg:text-2xl md:text-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
