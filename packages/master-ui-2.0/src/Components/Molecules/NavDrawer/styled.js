import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
`;

export const LeftContent = styled.div`
  display: inline-flex;
  margin-right: 12px;
  width: 24px;
`;

export const RightContent = styled.div.attrs(() => ({
  className: "nav-drawer-item__chevron"
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  height: 20px;
  width: 20px;
  border-radius: 50%;
`;

export const List = styled.div.attrs(() => ({
  className: `nav-drawer-list`
}))`
  display: block;
  list-style: none;
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 0;
  padding-left: 0;
  height: ${props => (props.isOpen ? "auto" : "0")};
  transition: all 300ms ease;
  overflow: hidden;
`;

export const ListItem = styled(Link).attrs(props => ({
  className: `nav-drawer-item${props.parent === "true" ? "__parent" : "__child"}
              ${props.open === true ? "open" : ""}
              ${props.active === "active" ? "active" : ""}`
}))`
  && {
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    padding: 12px 8px 12px calc(12px + (${props => props.level} * 16px));
    width: 100%;
    border-radius: 0 4px 4px 0;
    background-color: ${props => props.theme.color.white};
    font-size: 12px;
    line-height: 14px;
    text-align: left;
    text-decoration: none;
    color: ${props => props.theme.color.black70};

    > * {
      pointer-events: none;
    }

    &.nav-drawer-item {
      &__parent,
      &__child {
        $blockClass: &;
        border-radius: 10px;
        &:hover {
          background-color: ${props => props.theme.color.black20};

          .nav-drawer-item__chevron {
            background-color: ${props => props.theme.color.black30};
          }
        }
      }

      &__parent {
        &.open {
          /* color: ${props => props.theme.color.white};
          background-color: ${props => props.theme.color.orange30}; */

          &:hover {
            &.open.active {
              .nav-drawer-item__chevron {
                background-color: ${props => props.theme.color.black30};
              }
            }
          }
          &.active {
            background-color: unset;
            color: initial;
          }
        }
      }
      &__child {
        &.active {
          background-color: ${props => props.theme.color.orange30};
          color: ${props => props.theme.color.white};
        }
      }
    }
  }
`;
