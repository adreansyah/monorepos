import styled from "styled-components";
import { TextfieldControl, Right } from "../../Atom";

const SearchInput = styled(TextfieldControl)`
  border-color: ${props => props.theme.color.black30};
  background-color: ${props => props.theme.color.black20};
  padding-right: 4px;
`;

const SearchIconContainer = styled(Right)`
  background: ${props => props.theme.color.primary};
  width: 32px;
  height: 32px;
  justify-content: center;
  border-radius: ${props => props.theme.border.radius};
`;

export { SearchInput, SearchIconContainer };
