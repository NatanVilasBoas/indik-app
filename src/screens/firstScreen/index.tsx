import BaseInput from "@/components/BaseInput";
import theme from "@/shared/theme/theme";
import { useState } from "react";
import { View } from "react-native";

export default function FirstScreen() {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.white,
      }}
    >
      <View style={{ width: "80%", marginTop: 20 }}>
        <BaseInput
          required
          label="Título"
          placeholder="Teste input container"
          supportText="Texto de suporte"
          value={value}
          onChangeText={setValue}
        />
        <BaseInput
          required
          label="Título"
          placeholder="Teste input container"
          supportText="Texto de suporte"
          value={value2}
          onChangeText={setValue2}
        />
      </View>
    </View>
  );
}
