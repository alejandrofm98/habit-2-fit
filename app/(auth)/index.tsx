import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import Button from '@/components/ui/Button';

import { signInWithGoogle } from '@/services/AuthService';



export default function LoginScreen() {
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
      console.log("prueba")
      router.replace('/(tabs)');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
      <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button
                onPress={handleLogin}>
              Sign in with Google
            </Button>

        </View>
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  googleButton: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  skipButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    padding: 8,
  },
  skipText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#2563EB',
    marginRight: 4,
  },
});