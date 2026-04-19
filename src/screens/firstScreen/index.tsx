import BaseInput from "@/components/BaseInput";
import BaseLinkInput from "@/components/BaseLinkInput";
import BasePasswordInput from "@/components/BasePasswordInput";
import BaseSearchInput from "@/components/BaseSearchInput";
import BaseValueInput from "@/components/BaseValueInput";
import theme from "@/shared/theme/theme";
import { useState } from "react";
import { View } from "react-native";

export default function FirstScreen() {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.white,
      }}
    >
      <View style={{ width: "80%", marginTop: 20, gap: 16 }}>
        <BaseInput
          required
          label="Título"
          placeholder="Teste input container"
          supportText="Texto de suporte"
          value={value}
          onChangeText={setValue}
        />
        <BasePasswordInput
          required
          label="Senha"
          placeholder="Teste input container"
          supportText="Texto de suporte"
          value={value2}
          onChangeText={setValue2}
        />
        <BaseSearchInput
          placeholder="Pesquise aqui"
          value={value3}
          onChangeText={setValue3}
        />
        <BaseLinkInput
          placeholder="Insira o link"
          value={value}
          onChangeText={setValue}
        />
        <BaseValueInput
          placeholder="0,00"
          value={value}
          onChangeText={setValue}
        />
      </View>
    </View>
  );
}
