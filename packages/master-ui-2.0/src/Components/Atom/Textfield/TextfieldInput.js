import styled from "styled-components";

const TextfieldInput = styled.input.attrs(props => ({
  readOnly: props.readonly
}))`
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  color: ${props => props.theme.color.dark};
  flex: 1;
  /* &::placeholder {
    color: ${props => props.theme.color.black40};
  }
  &:focus {
    outline: 0;
    border-color: ${props => props.theme.color.primary};
  }
  &:disabled {
    background-color: ${props => props.theme.color.black20};
  } */

  &:disabled {
    pointer-events: none;
  } 

  pointer-events: ${props => props.readonly && "none"};

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: ${props => props.theme.border.primary};
    background-color: "#FFFEC5";
    -webkit-text-fill-color: ${props => props.theme.color.black70};
    -webkit-box-shadow: 0 0 0px 1000px rgba(255, 227, 131, 0.5) inset;
    box-shadow: 0 0 0px 1000px rgba(255, 227, 131, 0.5) inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const Left = styled.div`
  display: flex;
  flex-shrink: 1;
  align-items: center;
  margin-right: 8px;
  margin-left: 0px;
`;

const Right = styled(Left)`
  margin-right: 0px;
  margin-left: 8px;
`;

export { TextfieldInput, Right, Left };
