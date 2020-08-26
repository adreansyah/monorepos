import React from "react";
import { Container, Col, Row, Text } from "../../../Components/Atom";
import mdx from "./Sizing.mdx";

export default {
    title: "Utils/Sizing",
    parameters: {
      docs: {
        page: mdx
      }
    }
  };


const sizingProps = [
  { name: "width", desc: "width" },
  { name: "height", desc: "height" },
  { name: "minWidth", desc: "min-width" },
  { name: "minHeight", desc: "min-height" },
  { name: "maxWidth", desc: "max-width" },
  { name: "maxHeight", desc: "max-height" }
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
      {sizingProps.map((item, idx) => {
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
