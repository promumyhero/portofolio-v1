import React from "react";
import ButtonHero from "../general/ButtonHero";
import { Globe } from "../magicui/globe";
import CopyButton from "../general/CopyButton";
import { IconCloud } from "../magicui/icon-cloud";
import TechStackCloud from "../general/TechStackCloud";

const About = () => {
  return (
    <section className="c-space my-20">
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
              <p className="grid-headtext">hi, i'm ridho</p>
              <p className="grid-subtext">
                dengan pengalaman lebih dari 5 tahun, saya telah menyelesaikan
                beberapa proyek.
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
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code.
                Programming isn&apos;t just my profession—it&apos;s my passion.
                I enjoy exploring new technologies, and enhancing my skills.
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
