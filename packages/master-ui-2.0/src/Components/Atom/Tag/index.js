import React from "react";
import PropTypes from "prop-types"
import Icon from "../Icon";
import StyledTag from "./styled";

const Tag = props => {
  const { children, icon, remove, active, disabled } = props;

  return (
    <StyledTag.TagWrapper remove={remove} active={active} disabled={disabled}>
      {icon && <StyledTag.TagIcon>{icon}</StyledTag.TagIcon>}
      <StyledTag.TagText active={active}>{children}</StyledTag.TagText>
      {remove && (
        <StyledTag.TagRemove>
          <Icon name={"cancel"} size={12} fillColor="black40" />
        </StyledTag.TagRemove>
      )}
    </StyledTag.TagWrapper>
  );
};

Tag.propTypes = {
  remove: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.object
}

export default Tag;
