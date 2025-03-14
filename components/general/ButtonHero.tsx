import React from "react";
import { Button } from "../ui/button";

interface ButtonHeroProps {
  name: string;
  isBeam: boolean;
  containerClass: string;
}

const ButtonHero = ({
  name,
  isBeam = false,
  containerClass = "",
}: ButtonHeroProps) => {
  return (
    <Button className={`btn $${containerClass}`}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping" />
          <span className="btn-ping_dot" />
        </span>
      )}
      {name}
    </Button>
  );
};

export default ButtonHero;
