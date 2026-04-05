import Icon from "@/components/Icon";
import ThemeProvider from "@/providers/ThemeProvider";
import theme from "@/shared/theme/theme";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.black,
          },
          headerTintColor: theme.colors.white,
          headerTitleStyle: {
            color: theme.colors.white,
            fontFamily: theme.fonts.DMSansBold,
          },
          headerTitleAlign: "left",
          headerLeft: () => <Icon name="arrowLeft" color="white" />,
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Primeira tela",
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
