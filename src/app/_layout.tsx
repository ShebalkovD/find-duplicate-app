import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Главная' }} />
      <Stack.Screen name="game" options={{ title: 'Игра' }} />
      <Stack.Screen name="score" options={{ title: 'Таблица очков' }} />
    </Stack>
  );
}
