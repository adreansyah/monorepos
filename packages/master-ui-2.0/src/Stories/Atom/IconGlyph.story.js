import React from "react";
import styled from "styled-components";
import { Icon } from "../../Components/Atom";
import { select, boolean } from "@storybook/addon-knobs";
import { colorAll } from "../../Theme/_variable";

const sizeList = ["small", "large", 50];
const knobSize = () => select("Size", sizeList, "large", "Icon");
const knobColor = () => select("Color", Object.keys(colorAll.color), "black50", "Icon");
const knobLabel = () => boolean("Show Label", false, "Icon");

export default {
  title: "Atom/Icon",
  component: Icon
};

const IconContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: left;
`;

const IconWrapper = styled.div`
    position: relative;
  display: flex;
  flex-flow: column wrap;
  margin-top: 50px;
  flex-basis: 100px;
  justify-content: center;

  p {
      text-align: center;
  }

  &:hover::after {
      content: "${props => props.caption}";
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      display: inline-block;
      padding: 4px;
      background-color: white;
      border: 1px solid #70707D;
      bottom: -30px;
      white-space: nowrap;
  }
`;

const GlyphIconList = [
  "add-document",
  "add-image",
  "add-to-cart",
  "announcement",
  "approved",
  "arrow-down",
  "arrow-left",
  "arrow-right",
  "arrow-up",
  "attachment",
  "attention",
  "autofill",
  "back-to-top",
  "basket",
  "burgermenu",
  "cancel",
  "cancellation",
  "card",
  "cart",
  "cash",
  "category",
  "chat",
  "check",
  "chevron-down",
  "chevron-left",
  "chevron-right",
  "chevron-up",
  "date",
  "decrease",
  "delete",
  "delivery",
  "document",
  "down",
  "download-full",
  "download-outline",
  "duplicate",
  "edit",
  "exchange",
  "faq",
  "fav-product",
  "filter",
  "fingerprint",
  "fullscreen",
  "handphone",
  "help",
  "helpcenter",
  "home",
  "image",
  "increase",
  "increase-out",
  "information",
  "invisible",
  "locked",
  "logout",
  "mail",
  "minus",
  "more",
  "more-horizontal",
  "my-location",
  "my-location-android",
  "notification",
  "order",
  "order-status",
  "penjualan",
  "pin-point",
  "play",
  "plus",
  "point",
  "print",
  "profile",
  "qna",
  "reconcile",
  "reject-document",
  "reminder",
  "reply",
  "reply-outline",
  "reset",
  "return",
  "review",
  "save-full",
  "save-outline",
  "scan",
  "search",
  "setting",
  "share",
  "sharelink",
  "sort",
  "star",
  "statistic",
  "stock-renewal",
  "store",
  "tag",
  "template-pengiriman",
  "thumbs-up-full",
  "thumbs-up-outline",
  "time",
  "timer",
  "token",
  "transaction",
  "twist",
  "unlocked",
  "up",
  "view-grid",
  "view-list",
  "visible",
  "waiting-full",
  "waiting-outline",
  "wallet",
  "wishlist",
  "wishlist-outline",
  "zoom-in",
  "zoom-out"
];

export const Glyph = () => {
  return (
    <IconContainer>
      {GlyphIconList.map((item, i) => {
        return (
          <IconWrapper key={i} caption={item}>
            <div className="u-tx-center">
              <Icon name={item} size={knobSize()} fillColor={knobColor()} />
            </div>
            {
              knobLabel() &&
              <div className="u-tx-center">
                {item}
              </div>
            }
          </IconWrapper>
        );
      })}
    </IconContainer >
  );
};

const TabBarIconList = [
  "home",
  "wishlist",
  "category",
  "message",
  "basket",
  "profile",
  "sales",
  "product",
  "my-store"
];

export const TabBar = () => {
  return (
    <IconContainer>
      {TabBarIconList.map((item, i) => {
        return (
          <IconWrapper key={i} caption={item} >
            <div className="u-tx-center">
              <Icon name={item} size={knobSize()} fillColor={knobColor()} variant="special" active />
              <Icon name={item} size={knobSize()} fillColor={knobColor()} variant="special" />
            </div>
            {
              knobLabel() &&
              <div className="u-tx-center">
                {item}
              </div>
            }
          </IconWrapper>
        );
      })}
    </IconContainer>
  );
};

const MulticolorIconList = [
  "announcement",
  "review",
  "order",
  "store-performance",
  "qna",
  "send-item",
  "cash",
  "setting",
  "pin-location",
  "exchange"
];

const Multicolor2IconList = [
  "dekorasi",
  "elektronik",
  "f&b",
  "fashion-muslim",
  "fashion-pria",
  "fashion-wanita",
  "furniture",
  "gadget",
  "hiburan",
  "hobi-olahraga",
  "kamera",
  "kosmetik",
  "mokado",
  "otomotif",
  "perlengkapan-bayi",
  "tiket"
];

export const Multicolor = () => {
  return (
    <>
      <IconContainer>
        {MulticolorIconList.map((item, i) => {
          return (
            <IconWrapper key={i} caption={item}>
              <div className="u-tx-center">
                <Icon name={item} size={knobSize()} variant="multicolor" />
              </div>
              {
                knobLabel() &&
                <div className="u-tx-center">
                  {item}
                </div>
              }
            </IconWrapper>
          );
        })}
      </IconContainer >
      <IconContainer>
        {Multicolor2IconList.map((item, i) => {
          return (
            <IconWrapper key={i} caption={item}>
              <div className="u-tx-center">
                <Icon name={item} size={knobSize()} variant="multicolor" />
                <Icon name={item} size={knobSize()} variant="multicolor" active />
              </div>
              {
                knobLabel() &&
                <div className="u-tx-center">
                  {item}
                </div>
              }
            </IconWrapper>
          );
        })}
      </IconContainer>
    </>
  );
};

const SocialMediaIconList = [
  "facebook",
  "google",
  "instagram",
  "twitter"
];

export const SocialMedia = () => {
  return (
    <IconContainer>
      {SocialMediaIconList.map((item, i) => {
        return (
          <IconWrapper key={i} caption={item} >
            <div className="u-tx-center">
              <Icon name={item} size={knobSize()} fillColor={knobColor()} variant="social-media" active />
              <Icon name={item} size={knobSize()} fillColor={knobColor()} variant="social-media" />
            </div>
            {
              knobLabel() &&
              <div className="u-tx-center">
                {item}
              </div>
            }
          </IconWrapper>
        );
      })}
    </IconContainer>
  );
};