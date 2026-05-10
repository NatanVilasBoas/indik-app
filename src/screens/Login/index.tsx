import BaseButton from "@/components/BaseButton";
import BaseInput from "@/components/BaseInput";
import BasePasswordInput from "@/components/BasePasswordInput";
import BaseRadioButton from "@/components/BaseRadioButton";
import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import {
  ButtonContainer,
  Container,
  FormContainer,
  ImageContainer,
  SocialLoginButton,
  SocialLoginText,
} from "./styles";

const Login = () => {
  const [rememberLogin, setRememberLogin] = useState(false);
  return (
    <Container>
      <ImageContainer>
        <Image source={require("../../../assets/images/logo.png")} />
      </ImageContainer>
      <FormContainer>
        <BaseInput placeholder="E-mail" />
        <View style={{ gap: 8 }}>
          <BasePasswordInput placeholder="Digite sua senha" />
          <BaseRadioButton
            label="Lembrar login"
            value={rememberLogin}
            onValueChange={(value) => setRememberLogin(value)}
          />
        </View>
      </FormContainer>
      <ButtonContainer>
        <BaseButton variant="primary" title="Entrar" onPress={() => {}} />
        <BaseButton
          variant="ghost"
          title="Realizar cadastro"
          onPress={() => {}}
        />
        <SocialLoginText>Ou</SocialLoginText>
        <SocialLoginButton>
          <Image source={require("../../../assets/icons/google-icon.png")} />
          <Text style={{ textAlign: "center" }}>Entrar com Google</Text>
        </SocialLoginButton>
      </ButtonContainer>
    </Container>
  );
};

export default Login;
