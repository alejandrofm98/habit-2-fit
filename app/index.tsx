import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useAuth } from './_layout';

export default function Index() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (user) {
        //router.replace('/(tabs)'); // Replace with your home screen path
        router.push('/(onboarding)/step1');
      } else {
        router.replace('/(auth)');
      }
    }
  }, [user, loading]);

  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
  );
}
