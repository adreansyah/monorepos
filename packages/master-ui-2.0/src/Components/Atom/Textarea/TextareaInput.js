import styled from "styled-components";

const TextareaInput = styled.textarea.attrs(props => ({
  readOnly: props.readonly
}))`
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  color: ${props => props.theme.color.dark};
  flex: 1;
  &:disabled {
    pointer-events: none;
  } 

  pointer-events: ${props => props.readonly && "none"};

  resize: ${props => (props.resize ? props.resize : "none")};
  
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

export default TextareaInput;
