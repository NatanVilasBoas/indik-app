import BaseButton from "@/components/BaseButton";
import BaseTokenInput from "@/components/BaseTokenInput";
import theme from "@/shared/theme/theme";
import { useState } from "react";
import { View } from "react-native";

export default function FirstScreen() {
  const [value, setValue] = useState<string[]>(Array(6).fill(""));
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
        <BaseTokenInput
          length={6}
          value={value}
          onChange={setValue}
          disabled={true}
        />
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <BaseButton
            disabled
            variant="primary"
            title="Button"
            leftIcon="arrowLeft"
          />
        </View>
      </View>
    </View>
  );
}
