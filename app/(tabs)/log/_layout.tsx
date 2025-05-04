import { Stack } from 'expo-router';

export default function LogLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Log Waste',
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerTitleStyle: {
            color: '#111827',
            fontWeight: '600',
          },
          presentation: 'modal',
        }}
      />
    </Stack>
  );
}