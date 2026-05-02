import { styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 32px 24px;
`;

export const ImageContainer = styled.View`
  margin-bottom: 20px;
  padding: 64px 80px;
`;

export const FormContainer = styled.View`
  width: 100%;
  margin-top: 12px;
  margin-bottom: 68px;
  gap: 24px;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  gap: 16px;
`;

export const SocialLoginText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.PlusJakartaSansMedium};
  font-size: ${({ theme }) => theme.fonts.sizeSmall}px;
  color: ${({ theme }) => theme.colors.greyLight};
  text-align: center;
`;

export const SocialLoginButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: ${({ theme }) => theme.colors.white};
  flex-direction: row;
  align-items: center;
  gap: 8px;
  align-self: center;
`;
