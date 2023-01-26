import "./src/styles/global.css";

import "@fontsource/open-sans"; // Defaults to weight 400 with normal variant
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";

import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

export const wrapRootElement = ({ element }) => {
  return <ParallaxProvider>{element}</ParallaxProvider>;
};
