"use client";

import loaderGreen from "@/assets/animations/loader1Green.json";
import loaderWhite from "@/assets/animations/loader1White.json";
import { Player } from "@lottiefiles/react-lottie-player";

interface Props {
  size: number;
  color?: "primary" | "white";
}

export default function Spinner({ size = 40, color = "primary" }: Props) {
  return (
    <Player
      src={color === "white" ? loaderWhite : loaderGreen}
      className="loader"
      autoplay
      loop
      speed={1}
      style={{ height: size + "px", width: size + "px" }}
    />
  );
}
