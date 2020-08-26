import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Icon, { StyledIcon } from "../../Atom/Icon";

const SelectListText = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  padding-right: 16px;
  color: ${props => props.theme.color.black70};
  font-size: 14px;
  line-height: 16px;
  ${StyledIcon} {
    text-align: right;
    visibility: hidden;
  }
`;

const SelectListItem = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  padding: 16px 0px;
  border-bottom: 1px solid ${props => props.theme.color.black30};
  &.active {
    position: relative;
    ${StyledIcon} {
      visibility : visible;
    }
  }
  &:last-child {
    border: none;
  }
`;

const SelectListWrapper = styled.div`
  position: relative;
  margin-bottom: 3px;
  padding-left:16px;
  background-color: ${props => props.theme.color.white}
`;

class SelectList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: {}
    };
    this.els = {};
  }

  render() {
    return (
      <SelectListWrapper ref={el => (this.root = el)}>
        {React.Children.map(this.props.children, (child, i) => {
          let className = ``;
          if (child.key === this.props.active) {
            className = `active`;
          }
          return (
            <SelectListItem
              className={className}
              onClick={() => {
                this.props.onChange(child.key);
              }}
              ref={el => (this.els[child.key] = el)}
            >
              <SelectListText>
                {child}
                <Icon name="check" size="16" fillColor="success" />
              </SelectListText>
            </SelectListItem>
          );
        })}
      </SelectListWrapper>
    );
  }
}

SelectList.defaultProps = {
  active: "false",
}

SelectList.propTypes = {
  active: PropTypes.string,
  onChange: PropTypes.func
}

export default SelectList;
