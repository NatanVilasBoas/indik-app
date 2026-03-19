import { styled } from "styled-components/native";

export const StyledInput = styled.TextInput`
  font-family: ${(props) => props.theme.fonts.PlusJakartaSansRegular};
  font-size: ${(props) => props.theme.fonts.sizeSmall}px;
`;
