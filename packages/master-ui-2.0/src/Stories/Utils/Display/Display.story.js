import React from "react";
import { Container, Col, Row, Text } from "../../../Components/Atom";
import mdx from "./Display.mdx";

export default {
    title: "Utils/Display",
    parameters: {
      docs: {
        page: mdx
      }
    }
  };


const displayProps = [
  { name: "display", desc: "display" },
  { name: "boxShadow", desc: "box-shadow" },
  { name: "visibility", desc: "visibility" }
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
      {displayProps.map((item, idx) => {
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
