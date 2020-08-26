import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from "../Icon";

const BreadcrumbsList = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  height: 24px;
  padding-left: unset;
`;
const BreadcrumbsListItem = styled.li`
  margin-left: 8px;
  font-size: 12px;
  line-height: 14px;

  a {
    display: inline-block;
    color: ${props => props.theme.color.black50};
    max-width: 132px;
    font-size: 12px;
    line-height: 14px;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-decoration: none;
    transition: width 0.25s;
    &:hover {
      color: ${props => props.theme.color.primary};
      text-overflow: unset;
      max-width: unset;
      cursor: pointer;
    }
  }

  &:first-child {
    display: inline-block;
    width: inherit;
    text-overflow: unset;
    a {
      width: auto;
    }
  }

  &:last-child {
    display: inline-block;
    pointer-events: none;
    a {
      color: ${props => props.theme.color.black70};
    }
  }
`;

const BreadcrumbsExpand = styled.button`
  display: ${props => (props.longCrumbs === true ? "none" : "inline-block")};
  margin-left: 8px;
  width: 24px;
  height: 24px;
  font-size: 12px;
  line-height: 14px;
  padding: 0px 8px;
  &:hover {
    border-radius: ${props => props.theme.border.radius};
    background-color: ${props => props.theme.color.black20};
    cursor: pointer;
  }
`;

const BreadcrumbsArrow = styled(Icon)`
  margin-left: 8px;
  top: -1px;
`;

const CrumbsItem = (item, i) => {
  return (
    <React.Fragment key={i}>
      <BreadcrumbsArrow name="chevron-right" size={8} fillColor="#70727D" />
      <BreadcrumbsListItem key={i}>
        <Link to={item.link}>{item.name}</Link>
      </BreadcrumbsListItem>
    </React.Fragment>
  );
};

const Breadcrumbs = props => {
  const [expand, setExpand] = useState(false);
  useEffect(() => {
    props.pages.length > 3 ? setExpand(false) : setExpand(true);
  }, []);

  return (
    <BreadcrumbsList>
      <BreadcrumbsListItem>
        <Link to="/">Home</Link>
      </BreadcrumbsListItem>
      {props.pages.map((item, i) => (i === 0 ? CrumbsItem(item, i) : null))}
      {expand ? (
        props.pages.map((item, i) =>
          i !== 0 && i !== props.pages.length - 1 ? CrumbsItem(item, i) : null
        )
      ) : (
        <React.Fragment>
          <BreadcrumbsArrow name="chevron-right" size={8} fillColor="#70727D" />
          <BreadcrumbsExpand onClick={() => setExpand(true)}>
            <span>...</span>
          </BreadcrumbsExpand>
        </React.Fragment>
      )}
      {props.pages.map((item, i) =>
        i === props.pages.length - 1 ? CrumbsItem(item, i) : null
      )}
    </BreadcrumbsList>
  );
};

Breadcrumbs.propTypes = {
  pages: PropTypes.array
}

export default Breadcrumbs;
