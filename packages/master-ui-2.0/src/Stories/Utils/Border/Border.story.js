import React from "react";
import { Container, Col, Row, Text } from "../../../Components/Atom";
import mdx from "./Border.mdx";

export default {
    title: "Utils/Border",
    parameters: {
      docs: {
        page: mdx
      }
    }
  };


const borderProps = [
  { name: "border", desc: "border" },
  { name: "borderWidth", desc: "border-width" },
  { name: "borderStyle", desc: "border-style" },
  { name: "borderColor", desc: "border-color" },
  { name: "borderRadius", desc: "border-radius" },
  { name: "borderTop", desc: "border-top" },
  { name: "borderTopWidth", desc: "border-top-width" },
  { name: "borderTopStyle", desc: "border-top-style" },
  { name: "borderTopColor", desc: "border-top-color" },
  { name: "borderTopLeftRadius", desc: "border-top-left-radius" },
  { name: "borderTopRightRadius", desc: "border-top-right-radius" },
  { name: "borderRight", desc: "border-right" },
  { name: "borderRightWidth", desc: "border-right-width" },
  { name: "borderRightStyle", desc: "border-right-style" },
  { name: "borderRightColor", desc: "border-right-color" },
  { name: "borderBottom", desc: "border-bottom" },
  { name: "borderBottomWidth", desc: "border-bottom-width" },
  { name: "borderBottomStyle", desc: "border-bottom-style" },
  { name: "borderBottomColor", desc: "border-bottom-color" },
  { name: "borderBottomLeftRadius", desc: "border-bottom-left-radius" },
  { name: "borderBottomRightRadius", desc: "border-bottom-right-radius" },
  { name: "borderLeft", desc: "border-left" },
  { name: "borderLeftWidth", desc: "border-left-width" },
  { name: "borderLeftStyle", desc: "border-left-style" },
  { name: "borderLeftColor", desc: "border-left-color" },
  { name: "borderX", desc: "border-x" },
  { name: "borderY", desc: "border-y" }
];

export const List = () => {
  return (
    <Container>
      <Row border="1px solid black" mt={16}>
        <Col p={8} wide={4}>
          <Text textAlign="left" fontWeight="500">
            Prop
          </Text>
        </Col>
        <Col p={8} wide={8}>
          <Text textAlign="left" fontWeight="500">
            CSS Property
          </Text>
        </Col>
      </Row>
      {borderProps.map((item, idx) => {
        return (
          <Row border="1px solid black" borderTop="none" key={idx}>
            <Col p={8} wide={4}>
              <Text textAlign="left">{item.name}</Text>
            </Col>
            <Col p={8} wide={8}>
              <Text textAlign="left">{item.desc}</Text>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};
