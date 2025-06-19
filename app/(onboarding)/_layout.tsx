import { Stack } from 'expo-router';
import React from 'react';

export default function InitStepLayout() {
  return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="step1" />
        <Stack.Screen name="step2" />
        <Stack.Screen name="step3" />
        <Stack.Screen name="step4" />
      </Stack>
  );
}