import { TextInput } from "react-native";
import { styled } from "styled-components/native";

interface InputProps {
  isFocused?: boolean;
  disabled?: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Input = styled(TextInput)<InputProps>`
  width: 44px;
  height: 52px;
  border-width: 2px;
  border-color: ${({ isFocused, theme }) =>
    isFocused ? theme.colors.black : theme.colors.greyLight};
  border-radius: 12px;
  font-size: ${({ theme }) => theme.fonts.sizeMedium}px;
  font-family: ${({ theme }) => theme.fonts.PlusJakartaSansRegular};
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.greyLight2 : theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
`;
