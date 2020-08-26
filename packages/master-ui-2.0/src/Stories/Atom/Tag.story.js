import React from "react";
import { Tag, Icon } from "../../Components/Atom";

export default {
  title: "Atom/Tag",
  component: Tag
};

export const Basic = () => {
  return <Tag>Tag Label</Tag>;
};

export const BasicActive = () => {
  return <Tag active>Tag Label</Tag>;
};

export const WithIcon = () => {
  return <Tag icon={<Icon name={"cart"} size={16} fillColor="black40" />}>Tag Label</Tag>;
};

export const WithIconActive = () => {
  return <Tag icon={<Icon name={"cart"} size={16} fillColor="black40" />} active>Tag Label</Tag>;
};

export const WithRemove = () => {
  return <Tag remove>Tag Label</Tag>;
};

export const WithIconAndRemove = () => {
  return <Tag icon={<Icon name={"cart"} size={16} fillColor="black40" />} remove>Tag Label</Tag>;
};

export const Disabled = () => {
  return (
    <Tag disabled>Tag Label</Tag>
  )
}

