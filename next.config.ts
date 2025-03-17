import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "three",
    "react-three-fiber",
    "@react-three/drei",
    "@react-three/rapier",
  ],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: "asset/resource",
    });

    return config;
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
