import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Platform, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import GoogleButton from '@/components/GoogleButton';
import BrandLogo from '@/components/BrandLogo';
import { LogIn } from 'lucide-react-native';

// Prevent the splash screen from hiding automatically
SplashScreen.preventAutoHideAsync();

export default function LoginScreen() {
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-SemiBold': Inter_600SemiBold,
    'Inter-Bold': Inter_700Bold,
  });

  // Animation values
  const fadeAnim = useSharedValue(0);
  const slideAnim = useSharedValue(50);

  // Reference to track if animations have started
  const animationStarted = useRef(false);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Hide splash screen once fonts are loaded
      SplashScreen.hideAsync();

      // Start animations if they haven't started yet
      if (!animationStarted.current) {
        fadeAnim.value = withSpring(1, { damping: 15 });
        slideAnim.value = withSpring(0, { damping: 15 });
        animationStarted.current = true;
      }
    }
  }, [fontsLoaded, fontError, fadeAnim, slideAnim]);

  // Animated styles
  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeAnim.value,
      transform: [{ translateY: slideAnim.value }],
    };
  });

  // Return null to keep splash screen visible while fonts load
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
      <View style={styles.container}>
        <StatusBar style="light" />

        {/* Background Image with Gradient Overlay */}
        <Image
            source={{ uri: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg' }}
            style={styles.backgroundImage}
        />
        <LinearGradient
            colors={['rgba(0,0,0,0.3)', 'rgba(26, 26, 46, 0.85)']}
            style={styles.gradientOverlay}
        />

        {/* Main Content */}
        <Animated.View style={[styles.contentContainer, animatedContainerStyle]}>
          <BrandLogo style={styles.logo} />

          <Text style={styles.welcomeText}>WELCOME TO</Text>
          <Text style={styles.appName}>HABIT2FIT</Text>

          <Text style={styles.tagline}>Your journey to fitness excellence starts here</Text>

          <View style={styles.buttonContainer}>
            <GoogleButton />

            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
              <Text style={styles.dividerText}>OR</Text>
              <View style={styles.divider} />
            </View>

            <TouchableOpacity style={styles.emailButton}>
              <LogIn size={18} color="#FFFFFF" style={styles.buttonIcon} />
              <Text style={styles.emailButtonText}>Continue with Email</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>
              Don&#39;t have an account? <Text style={styles.footerHighlight}>Sign up</Text>
            </Text>
          </View>
        </Animated.View>
      </View>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A2E',
  },
  backgroundImage: {
    position: 'absolute',
    width: width,
    height: height,
    resizeMode: 'cover',
  },
  gradientOverlay: {
    position: 'absolute',
    width: width,
    height: height,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginBottom: 30,
  },
  welcomeText: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  appName: {
    fontFamily: 'Inter-Bold',
    fontSize: 40,
    color: '#FFFFFF',
    textAlign: 'center',
    letterSpacing: 2,
    marginBottom: 16,
  },
  tagline: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#CCCCCC',
    textAlign: 'center',
    marginBottom: 48,
    maxWidth: '80%',
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 320,
    alignItems: 'center',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
    width: '100%',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  dividerText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#FFFFFF',
    paddingHorizontal: 16,
  },
  emailButton: {
    flexDirection: 'row',
    backgroundColor: '#FF5A5F',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 16,
  },
  buttonIcon: {
    marginRight: 12,
  },
  emailButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  footerContainer: {
    position: 'absolute',
    bottom: Platform.OS === 'web' ? 40 : 50,
  },
  footerText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#CCCCCC',
  },
  footerHighlight: {
    fontFamily: 'Inter-SemiBold',
    color: '#FF5A5F',
  },
});