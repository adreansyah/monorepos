import React, { useState } from "react";
import { select, text } from "@storybook/addon-knobs";
import { Button, ButtonGroup } from "../../../Components/Atom";
import { ModalLite, ModalHeader, ModalTitle, ModalBody, ModalFooter } from "../../../Components/Molecules";
import mdx from './ModalLite.mdx';

const backdrop = [true, false, "static"];

const knobType = () => select("backdrop", backdrop, "true", "ModalLite");
const knobHeader = () => text("Header Text", "Lorem Ipsum", "ModalLite");
const knobContent = () => text("Content Text", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "ModalLite");

export default {
  title: "Molecules/ModalLite",
  component: ModalLite,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Basic = () => {
  const [isModalShow, setModal] = useState(false)

  return (
    <>
      <Button variant="primary-alt" onClick={() => setModal(!isModalShow)}>Modal</Button>

      <ModalLite isOpen={isModalShow} toggle={() => setModal(!isModalShow)} backdrop={knobType()}>
        <ModalHeader>
          <ModalTitle>{knobHeader()}</ModalTitle>
        </ModalHeader>
        <ModalBody>
          {knobContent()}
        </ModalBody>
        <ModalFooter>
          <ButtonGroup space={8}>
            <Button size="medium" variant="secondary-alt" onClick={() => alert('YA')}>YA</Button>
            <Button size="medium" variant="primary-alt" onClick={() => setModal(!isModalShow)}>TIDAK</Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalLite>
    </>
  );
};

