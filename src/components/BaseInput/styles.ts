import { styled } from "styled-components/native";

interface StyledInputProps {
  disabled?: boolean;
}

export const StyledInput = styled.TextInput<StyledInputProps>`
  width: 90%;
  font-family: ${(props) => props.theme.fonts.PlusJakartaSansRegular};
  font-size: ${(props) => props.theme.fonts.sizeSmall}px;
  color: ${(props) =>
    props.disabled ? props.theme.colors.greyMedium : props.theme.colors.black};
`;

export const IconContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 24px;
`;
