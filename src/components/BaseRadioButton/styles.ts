import { styled } from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const RadioCircle = styled.View<{
  selected: boolean;
  disabled?: boolean;
}>`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border-width: 2px;
  border-color: ${({ disabled, selected, theme }) =>
    disabled
      ? theme.colors.greyLight
      : selected
        ? theme.colors.black
        : theme.colors.greyMedium};
  align-items: center;
  justify-content: center;
`;

export const SelectedCircle = styled.View<{ disabled?: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.greyLight : theme.colors.black};
`;

export const Label = styled.Text<{ disabled?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.DMSansRegular};
  font-size: 16px;
  color: ${({ disabled, theme }) =>
    disabled ? theme.colors.greyLight : theme.colors.black};
`;
