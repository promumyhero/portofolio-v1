"use client";

import React from "react";
import { IconCloud } from "../magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "express",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "vercel",
  "docker",
  "git",
  "jira",
  "github",
  "tailwindcss",
  "googlecloud",
  "visualstudiocode",
  "figma",
];

const TechStackCloud = () => {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/white`
  );

  return <IconCloud images={images} />;
};

export default TechStackCloud;
