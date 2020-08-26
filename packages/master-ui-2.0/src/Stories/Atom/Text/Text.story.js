import React from "react";
import { Text, Segment } from "../../../Components/Atom";
import { select } from "@storybook/addon-knobs";
import { colorAll } from "../../../Theme/_variable";

export default {
  title: "Atom/Text",
  component: Text
};

export const _0Text = () => {
  return <Text>Lorem Ipsum Dolor Sit Amet</Text>;
};

export const TypographyProp = () => {
  return (
    <>
    <Text>
        Text component reads if the only first prop assigned is one of
        typography token, it'll be styled to desire token.
      </Text>
      <Segment border="1px solid black" p={8} mt={8}>
        <Text>Lorem Ipsum Dolor Sit Amet</Text>
      </Segment>
      <Segment mt={8}>
      <Text mt={8}>Examples:</Text>
      <Text H16>
          This is header font with font-size 20px and line-height 22px
        </Text>
        <Text B14>
          This is body font with font-size 14px and line-height 16px
        </Text>
        <Text P14>
          This is paragraph font with font-size 14px and line-height 21px
        </Text>
      </Segment>
    </>
  );
};

export const TextSpan = () => {
  return <Text as="span">Lorem Ipsum Dolor Sit Amet. Span Ver.</Text>;
};

export const TextAlign = () => {
  const textAlign = select("textAlign", ["left", "center", "right"]);

  return (
    <>
      <Segment border="1px solid black" p={8}>
        <Text textAlign={textAlign}>Lorem Ipsum Dolor Sit Amet</Text>
      </Segment>
      <Segment mt={8}>
        <Text textAlign="left">Lorem Ipsum Dolor Sit Amet</Text>
        <Text textAlign="center">Lorem Ipsum Dolor Sit Amet</Text>
        <Text textAlign="right">Lorem Ipsum Dolor Sit Amet</Text>
      </Segment>
    </>
  );
};

export const FontWeight = () => {
  const fontWeight = select(
    "fontWeight",
    ["lighter", "normal", "bold", "300", "400", "500"],
    "normal"
  );
  return (
    <>
      <Segment border="1px solid black" p={8}>
        <Text fontWeight={fontWeight}>
          The text with fontWeight {fontWeight}
        </Text>
      </Segment>
      <Segment mt={8}>
        <Text fontWeight="lighter">
          Light Weight: Lorem Ipsum Dolor Sit Amet
        </Text>
        <Text fontWeight="normal">
          Normal Weight: Lorem Ipsum Dolor Sit Amet
        </Text>
        <Text fontWeight="bold">Bold Weight: Lorem Ipsum Dolor Sit Amet</Text>
        <Text fontWeight="300">300 Weight: Lorem Ipsum Dolor Sit Amet</Text>
        <Text fontWeight="400">400 Weight: Lorem Ipsum Dolor Sit Amet</Text>
        <Text fontWeight="500">500 Weight: Lorem Ipsum Dolor Sit Amet</Text>
      </Segment>
    </>
  );
};

export const Color = () => {
  const ColorList = Object.keys(colorAll.color);
  let ColorArray = [];
  ColorList.map((item, idx) => {
    const ColorString = item + " " + Object.values(colorAll.color)[idx];
    return ColorArray.push(ColorString);
  });
  const color = select("color", ColorArray, ColorArray[0].toString());

  return (
    <>
      <Segment border="1px solid black" p={8}>
        <Text color={color.split(" ")[0]}>The text with color {color}</Text>
      </Segment>
      <Segment mt={8}>
        <Text H16 color="light">
          This is light color
        </Text>
        <Text H16 color="dark">
          This is dark color
        </Text>
        <Text H16 color="black50">
          This is black50 color
        </Text>
        <Text H16 color="orange30">
          This is orange30 color
        </Text>
      </Segment>
    </>
  );
};

export const NoWrap = () => {
  return (
    <div style={{ width: "300px", border: "1px solid black" }}>
      <Text nowrap>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </Text>
    </div>
  );
};

export const Italic = () => {
  return <Text italic>Lorem Ipsum Dolor Sit Amet</Text>;
};

export const NoDecoration = () => {
  return <Text nodecor>Lorem Ipsum Dolor Sit Amet</Text>;
};
