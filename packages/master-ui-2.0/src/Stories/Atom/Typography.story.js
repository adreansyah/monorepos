import React from "react";
import { Text, Segment } from "../../Components/Atom";

export default {
  title: "Atom/Typography",
  component: Text
};

export const Preview = () => {
  return (
    <>
      <Segment>
        <Text H42>
          This is header font with font-size 42px and line-height 44px
        </Text>
      </Segment>
      <Segment mt={16}>
        <Text H28>
          This is header font with font-size 28px and line-height 30px
        </Text>
      </Segment>
      <Segment mt={16}>
        <Text H16>
          This is header font with font-size 16px and line-height 18px
        </Text>
      </Segment>
      <Segment mt={16}>
        <Text H14>
          This is header font with font-size 14px and line-height 16px
        </Text>
      </Segment>
      <Segment mt={16}>
        <Text H12>
          This is header font with font-size 12px and line-height 14px
        </Text>
      </Segment>
      <Segment mt={16}>
        <Text H10>
          This is header font with font-size 10px and line-height 12px
        </Text>
      </Segment>
      <Segment mt={16}>
        <Text B14>
          This is body font with font-size 14px and line-height 16px
        </Text>
      </Segment>
      <Segment mt={16}>
        <Text B12>
          This is body font with font-size 12px and line-height 14px
        </Text>
      </Segment>
      <Segment mt={16}>
        <Text B10>
          This is body font with font-size 10px and line-height 12px
        </Text>
      </Segment>
      <Segment mt={16}>
        <Text B10B>
          This is body font with font-size 10px and line-height 12px, but bolder
        </Text>
      </Segment>
      <Segment mt={16}>
        <Text P14>
          This is paragraph font with font-size 14px and line-height 21px
        </Text>
      </Segment>
      <Segment mt={16}>
        <Text P12>
          This is paragraph font with font-size 12px and line-height 18px, and
          bolder too
        </Text>
      </Segment>
    </>
  );
};
