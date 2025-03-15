"use client";

import React, { useState, useEffect } from "react";

interface TiltedCardProps {
  imageSrc: string;
  altText: string;
  captionText: string;
  containerWidth: string;
  containerHeight: string;
  imageWidth: string;
  imageHeight: string;
  rotateAmplitude: number;
  scaleOnHover: number;
  showMobileWarning: boolean;
  showTooltip: boolean;
  displayOverlayContent: boolean;
  overlayContent?: React.ReactNode;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

const TiltedCard: React.FC<TiltedCardProps> = ({
  imageSrc,
  altText,
  captionText,
  containerWidth,
  containerHeight,
  imageWidth,
  imageHeight,
  rotateAmplitude,
  scaleOnHover,
  showMobileWarning,
  showTooltip,
  displayOverlayContent,
  overlayContent,
  objectFit = "contain",
}) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const percentX = (mouseX - centerX) / (rect.width / 2);
    const percentY = (mouseY - centerY) / (rect.height / 2);

    const rotateY = rotateAmplitude * percentX;
    const rotateX = -rotateAmplitude * percentY;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovering(false);
  };

  return (
    <div
      className="relative flex justify-center items-center p-0 overflow-visible"
      style={{
        width: containerWidth,
        height: containerHeight,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative overflow-hidden rounded-lg transition-transform duration-300 ease-out transform-gpu"
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${
            rotation.y
          }deg) scale(${isHovering ? scaleOnHover : 1})`,
          width: imageWidth,
          height: imageHeight,
          transformStyle: "preserve-3d",
        }}
      >
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-full rounded-lg transition-transform duration-300 ease-out block"
          style={{
            objectFit: objectFit,
          }}
        />
        {displayOverlayContent && (
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-out text-white text-center p-4 rounded-lg">
            {overlayContent || <p>{captionText}</p>}
          </div>
        )}
      </div>
      {showTooltip && (
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white py-1 px-2.5 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none whitespace-nowrap">
          <p>{captionText}</p>
        </div>
      )}
      {showMobileWarning && isMobile && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 text-white p-2.5 rounded text-sm text-center z-10">
          <p>This component works best on desktop!</p>
        </div>
      )}
    </div>
  );
};

export default TiltedCard;
