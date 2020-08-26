import React from "react";
import { Container, Col, Row, Text } from "../../../Components/Atom";
import mdx from "./Flexbox.mdx";

export default {
    title: "Utils/Flexbox",
    parameters: {
      docs: {
        page: mdx
      }
    }
  };


const flexboxProps = [
  { name: "alignItems", desc: "align-items" },
  { name: "alignContent", desc: "align-content" },
  { name: "justifyItems", desc: "justify-items" },
  { name: "justifyContent", desc: "justify-content" },
  { name: "flexWrap", desc: "flex-wrap" },
  { name: "flexDirection", desc: "flex-direction" },
  { name: "flex", desc: "flex" },
  { name: "flexGrow", desc: "flex-grow" },
  { name: "flexShrink", desc: "flex-shrink" },
  { name: "flexBasis", desc: "flex-basis" },
  { name: "justifySelf", desc: "justify-self" },
  { name: "alignSelf", desc: "align-self" },
  { name: "order", desc: "order" }
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
      {flexboxProps.map((item, idx) => {
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
