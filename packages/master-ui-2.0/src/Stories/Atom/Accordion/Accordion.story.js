import React from "react";
import { Accordion } from "../../../Components/Atom";
import mdx from './Accordion.mdx'

export default {
  title: "Atom/Accordion",
  component: Accordion,
  parameters: {
      docs: {
          page: mdx,
      },
  },
};

export const Basic = () => {
  return (
  <Accordion label="Lorem Ipsum Sit Doloran">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas harum hic eveniet, porro dolores autem accusantium eum.
  </Accordion>
)};

