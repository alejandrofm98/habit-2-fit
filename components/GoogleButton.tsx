import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

import { signInWithGoogle } from '@/services/AuthService';
import { useRouter } from "expo-router";

// Google logo component
const GoogleLogo = () => (
    <View style={styles.logoContainer}>
      <Text style={styles.logoText}>G</Text>
    </View>
);

const GoogleButton= () => {
  const router = useRouter();
  // Animation values for button press
  const scale = useSharedValue(1);

  // Animated styles for button press
  const animatedButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  // Handle button press animations
  const handlePressIn = () => {
    scale.value = withSpring(0.97, { damping: 15 });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, { damping: 15 });
  };

  const handleLogin = async () => {
    try {
      const user = await signInWithGoogle();
      console.log('User logged in:', user);
      if (user){
        router.navigate('/(onboarding)/step1');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
      <Animated.View style={[styles.buttonWrapper, animatedButtonStyle]}>
        <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            activeOpacity={0.9}
        >
          <GoogleLogo />
          <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>
      </Animated.View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    width: '100%',
    borderRadius: 12,
    overflow: 'hidden',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      web: {
        cursor: 'pointer',
      },
    }),
  },
  logoContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#4285F4',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  buttonText: {
    fontSize: 16,
    color: '#333333',
    fontFamily: 'Inter-SemiBold',
  },
});

export default GoogleButton;