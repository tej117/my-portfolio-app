// src/components/PreloadImages.tsx

import { useEffect } from "react";
import { Images } from "../assets/assets";

const PreloadImages = () => {
  useEffect(() => {
    Object.values(Images).forEach((group) => {
      Object.values(group).forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    });
  }, []);

  return null; // nothing rendered
};

export default PreloadImages;