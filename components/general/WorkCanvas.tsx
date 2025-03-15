"use client";
import { motion } from "framer-motion";
import { EvervaultCard, Icon } from "../ui/evervault-card";

const WorkCanvas = () => {
  return (
    <motion.div
      className="relative w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="border border-white/[0.2] dark:border-white/[0.1] bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-xl flex flex-col items-start w-full h-full mx-auto p-6 relative overflow-hidden">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 text-cyan-500" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-purple-500" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 text-cyan-500" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-purple-500" />

        <div className="absolute inset-0 flex items-center justify-center">
          <EvervaultCard text="Experience" className="" />
        </div>

        <div className="relative z-10 mt-auto w-full">
          <h2 className="text-white text-2xl font-bold mb-2">
            Professional Journey
          </h2>
          <p className="text-white/70 text-sm font-light mb-4">
            Hover over the card to explore my professional background and
            skills. Each role has shaped my expertise in software development.
          </p>
          <div className="flex gap-2 flex-wrap">
            {["React", "NextJS", "TypeScript", "UI/UX", "Tailwind"].map(
              (skill) => (
                <span
                  key={skill}
                  className="text-xs border font-medium border-white/[0.2] rounded-full text-white/90 px-3 py-1 bg-white/5"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkCanvas;
