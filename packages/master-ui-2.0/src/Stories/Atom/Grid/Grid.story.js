import React from "react";
import { Container, Row, Col, Text, Segment } from "../../../Components/Atom";

export default {
  title: "Utils/Layout/Grid",
  component: [Container, Row, Col]
};

export const _0Grid = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Segment border="1px solid gray">
            <Text textAlign="center">Col</Text>
          </Segment>
        </Col>
        <Col>
          <Segment border="1px solid gray">
            <Text textAlign="center">Col</Text>
          </Segment>
        </Col>
        <Col>
          <Segment border="1px solid gray">
            <Text textAlign="center">Col</Text>
          </Segment>
        </Col>
      </Row>
    </Container>
  );
};

export const ColumnsPerRow = () => {
  return (
    <Container>
      <Row cols={1}>
        <Col>
          <Segment border="1px solid gray">
            <Text textAlign="center">Col 12/12</Text>
          </Segment>
        </Col>
      </Row>
      <Row cols={3} mt={16}>
        <Col>
          <Segment border="1px solid gray">
            <Text textAlign="center">Col 3/12</Text>
          </Segment>
        </Col>
        <Col>
          <Segment border="1px solid gray">
            <Text textAlign="center">Col 3/12</Text>
          </Segment>
        </Col>
        <Col>
          <Segment border="1px solid gray">
            <Text textAlign="center">Col 3/12</Text>
          </Segment>
        </Col>
      </Row>
      <Row cols={4} mt={16}>
        <Col>
          <Segment border="1px solid gray">
            <Text textAlign="center">Col 4/12</Text>
          </Segment>
        </Col>
        <Col>
          <Segment border="1px solid gray">
            <Text textAlign="center">Col 4/12</Text>
          </Segment>
        </Col>
        <Col>
          <Segment border="1px solid gray">
            <Text textAlign="center">Col 4/12</Text>
          </Segment>
        </Col>
        <Col>
          <Segment border="1px solid gray">
            <Text textAlign="center">Col 4/12</Text>
          </Segment>
        </Col>
      </Row>
      <Row cols={4} mt={16}>
        <Col>
          <Segment border="1px solid gray">
            <Text textAlign="center">Col 4/12</Text>
          </Segment>
        </Col>
        <Col>
          <Segment border="1px solid gray">
            <Text textAlign="center">Col 4/12</Text>
          </Segment>
        </Col>
        <Col>
          <Segment border="1px solid gray">
            <Text textAlign="center">Col 4/12</Text>
          </Segment>
        </Col>
      </Row>
    </Container>
  );
};

export const ColumnWidth = () => {
  return (
    <Container>
      <Row>
        <Col wide={12}>
          <Segment border="1px solid gray">
            <Text textAlign="center">Col 12/12</Text>
          </Segment>
        </Col>
      </Row>
      <Row mt={16}>
        <Col wide={3}>
          <Segment border="1px solid gray">
            <Text textAlign="center">Col 3/12</Text>
          </Segment>
        </Col>
        <Col wide={5}>
          <Segment border="1px solid gray">
            <Text textAlign="center">Col 5/12</Text>
          </Segment>
        </Col>
        <Col wide={4}>
          <Segment border="1px solid gray">
            <Text textAlign="center">Col 4/12</Text>
          </Segment>
        </Col>
      </Row>
    </Container>
  );
};

export const Nesting = () => {
  return (
    <Container>
      <Row>
        <Col wide={6} border="1px solid gray" alignItems="center" p={8}>
          <Text textAlign="center">Col 6/12</Text>
        </Col>
        <Col wide={6} border="1px solid gray" p={8}>
          <Container>
            <Row>
              <Col wide={6} border="1px solid gray" p={8}>
                <Text textAlign="center">Col 6/12</Text>
              </Col>
              <Col wide={6} border="1px solid gray" p={8}>
                <Text textAlign="center">Col 6/12</Text>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export const Offset = () => {
  return (
    <Container>
      <Row>
        <Col wide={3} offset={3} border="1px solid gray" p={8}>
          <Text textAlign="center">Col 3/12, Offset 3/12</Text>
        </Col>
      </Row>
      <Row mt={16}>
        <Col wide={3} offset={2} border="1px solid gray" p={8}>
          <Text textAlign="center">Col 3/12, Offset 2/12</Text>
        </Col>
        <Col wide={5} offset={1} border="1px solid gray" p={8}>
          <Text textAlign="center">Col 5/12, Offset 1/12</Text>
        </Col>
      </Row>
    </Container>
  );
};
