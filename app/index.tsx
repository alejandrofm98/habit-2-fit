import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { useAuth } from './_layout';
import { View, Text } from 'react-native';

export default function Index() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (user) {
        router.replace('/(tabs)'); // Replace with your home screen path
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
