import styled, { css } from "styled-components";


const TagRemove = styled.button`
width: 28px;
height: 20px;
margin-left: 2px;
display: flex;
align-items: center;
justify-content: center;
`;

const TagText = styled.span`
font-size: 12px;
line-height: 14px;
color: ${props => props.theme.color.black70};
`;

const TagIcon = styled.div`
width: 16px;
height: 16px;
/* background-color: ${props => props.theme.color.black30}; */
border: 1px solid transparent;

+ ${TagText} {
  margin-left: 8px;
}
`;

const TagWrapper = styled.div`
  position: ${props => props.ps ? props.ps : "relative"};

  display: inline-flex;
  align-items: center;
  height: 24px;
  padding: ${props => (props.remove ? "4px 2px 4px 8px" : "4px 8px")};
  border-radius: 24px;
  background-color: ${props => props.theme.color.black20};

  :hover {
    background-color: ${props => props.theme.color.black30};
    /* ${TagIcon} {
      background-color: ${props => props.theme.color.black40};
    } */
  }

  ${props =>
        props.remove &&
        css`
      :hover {
        background-color: ${props => props.theme.color.black20};
        /* ${TagIcon} {
          background-color: ${props => props.theme.color.black40};
        } */
      }
      :hover ${TagRemove} {
        background-color: ${props => props.theme.color.black30};
        border-radius: 20px;
      }
    `}
 
  ${props =>
        props.active &&
        css`
      background-color: ${props => props.theme.color.orange10};
      :hover {
        background-color: ${props => props.theme.color.orange10};
        /* ${TagIcon} {
          background-color: ${props => props.theme.color.white};
        } */
      }
      /* ${TagIcon} {
        background-color: ${props => props.theme.color.white};
      } */
      ${TagText} {
        color: ${props => props.theme.color.orange30};
      }
    `}

    ${props =>
        props.disabled &&
        css`
        border: 1px solid ${props => props.theme.color.black20};
        background-color: ${props => props.theme.color.black10};

        :hover {
          background-color: ${props => props.theme.color.black10};
          /* ${TagIcon} {
            background-color: ${props => props.theme.color.black30};
          } */
        }
        :hover ${TagRemove} {
          background-color: ${props => props.theme.color.black10};
        }
        ${TagText} {
          color: ${props => props.theme.color.black30};
        }
      `}
`;

const StyledTag = { TagWrapper, TagRemove, TagText, TagIcon }
export default StyledTag