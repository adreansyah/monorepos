import React from "react";
import { Container, Col, Row, Text } from "../../../Components/Atom";
import { space } from "../../../Theme/_variable";
import mdx from "./Spacing.mdx";

export default {
  title: "Utils/Spacing",
  parameters: {
    docs: {
      page: mdx
    }
  }
};

const spacing = [
  { name: "m", desc: "margin" },
  { name: "mt", desc: "margin-top" },
  { name: "mr", desc: "margin-right" },
  { name: "mb", desc: "margin-bottom" },
  { name: "ml", desc: "margin-left" },
  { name: "mx", desc: "margin-right and margin-left" },
  { name: "my", desc: "margin-top and margin-bottom" },
  { name: "p", desc: "padding" },
  { name: "pt", desc: "padding-top" },
  { name: "pr", desc: "padding-right" },
  { name: "pb", desc: "padding-bottom" },
  { name: "pl", desc: "padding-left" },
  { name: "px", desc: "padding-right and padding-left" },
  { name: "py", desc: "padding-top and padding-bottom" }
];

export const List = () => {

  return (
    <Container>
      <Row border="1px solid black">
        <Col p={8}>
          <Text textAlign="left" fontWeight="500">
            Value
          </Text>
        </Col>
      </Row>
      <Row border="1px solid black" borderTop="none">
        <Col p={8}>
          <Text textAlign="left">
            {space.reduce((string, item, idx) => {
              return (string +=
                idx === space.length - 1 ? item + "px" : item + "px, ");
            }, "")}
          </Text>
        </Col>
      </Row>

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
        {/* <Col p={8} wide={5}>
                    <Text textAlign="left" fontWeight="500">Value</Text>
                </Col> */}
      </Row>
      {spacing.map((item, idx) => {
        return (
          <Row border="1px solid black" borderTop="none" key={idx}>
            <Col p={8} wide={4}>
              <Text textAlign="left">{item.name}</Text>
            </Col>
            <Col p={8} wide={8}>
              <Text textAlign="left">{item.desc}</Text>
            </Col>
            {/* <Col p={8} wide={5}>
                            <Text textAlign="left">{item.value}</Text>
                        </Col> */}
          </Row>
        );
      })}
    </Container>
  );
};
