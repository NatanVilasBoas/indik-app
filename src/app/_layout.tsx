import Icon from "@/components/Icon";
import ThemeProvider from "@/providers/ThemeProvider";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerLeft: () => <Icon name="arrowLeft" color="black" />,
        }}
      ></Stack>
    </ThemeProvider>
  );
}
