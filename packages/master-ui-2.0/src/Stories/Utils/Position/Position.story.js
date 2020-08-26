import React from "react";
import { Container, Col, Row, Text } from "../../../Components/Atom";
import mdx from "./Position.mdx";

export default {
    title: "Utils/Position",
    parameters: {
      docs: {
        page: mdx
      }
    }
  };


const positionProps = [
  { name: "position", desc: "position" },
  { name: "zIndex", desc: "z-index" },
  { name: "top", desc: "top" },
  { name: "right", desc: "right" },
  { name: "bottom", desc: "bottom" },
  { name: "transform", desc: "transform" }
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
      {positionProps.map((item, idx) => {
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
