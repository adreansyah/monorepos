import React from "react";
import { Box, NextNavButton, PrevNavButton } from "../../Components/Atom";

export default {
  title: "Atom/Next-Navigation Button",
  component: { Box, NextNavButton, PrevNavButton }
};

export const NextNavigation = () => {
  return (
    <Box style={{ padding: "40px" }}>
      Lorem Ipsum
      <NextNavButton />
    </Box>
  );
};
export const PrevNavigation = () => {
  return (
    <Box style={{ padding: "40px" }}>
      <PrevNavButton />
      Lorem Ipsum
    </Box>
  );
};
