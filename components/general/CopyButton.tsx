// components/general/CopyButton.tsx
"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";

interface CopyButtonProps {
  textToCopy: string;
  displayText?: string;
  className?: string;
  containerClassName?: string;
  onCopy?: () => void;
}

const CopyButton = ({
  textToCopy,
  displayText = textToCopy,
  className = "",
  containerClassName = "copy-container",
  onCopy,
}: CopyButtonProps) => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setHasCopied(true);
    if (onCopy) onCopy();

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <div className={containerClassName} onClick={handleCopy}>
      <Button className={`${className}`} type="button">
        {hasCopied ? "Copied!" : displayText}
      </Button>
    </div>
  );
};

export default CopyButton;
