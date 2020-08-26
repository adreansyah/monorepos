import React from "react";
import { Container, Col, Row, Text, Segment } from "../../../Components/Atom";
import { colorPallete, colorMain } from "../../../Theme/_variable";
import mdx from "./Color.mdx";

export default {
  title: "Utils/Color",
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const List = () => {
  return (
    <Container>
      <Row cols={3} border="1px solid black">
        <Col p={8}>
          <Text textAlign="left" fontWeight="500">
            Main Color
          </Text>
        </Col>
        <Col p={8}>
          <Text textAlign="center" fontWeight="500">
            Preview
          </Text>
        </Col>
        <Col p={8}>
          <Text textAlign="right" fontWeight="500">
            Value
          </Text>
        </Col>
      </Row>
      {Object.keys(colorMain.color).map((item, idx) => {
        return (
          <Row cols={3} border="1px solid black" borderTop="none" key={idx}>
            <Col p={8}>
              <Text textAlign="left">{item}</Text>
            </Col>
            <Col p={8}>
              <Segment p={8} bg={item}></Segment>
            </Col>
            <Col p={8}>
              <Text textAlign="right">
                {Object.values(colorMain.color)[idx]}
              </Text>
            </Col>
          </Row>
        );
      })}
      <Row cols={3} border="1px solid black" mt={16}>
        <Col p={8}>
          <Text textAlign="left" fontWeight="500">
            Color Pallete
          </Text>
        </Col>
        <Col p={8}>
          <Text textAlign="center" fontWeight="500">
            Preview
          </Text>
        </Col>
        <Col p={8}>
          <Text textAlign="right" fontWeight="500">
            Value
          </Text>
        </Col>
      </Row>
      {Object.keys(colorPallete.color).map((item, idx) => {
        return (
          <Row cols={3} border="1px solid black" borderTop="none" key={idx}>
            <Col p={8}>
              <Text textAlign="left">{item}</Text>
            </Col>
            <Col p={8}>
              <Segment p={8} bg={item}></Segment>
            </Col>
            <Col p={8}>
              <Text textAlign="right">
                {Object.values(colorPallete.color)[idx]}
              </Text>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};
