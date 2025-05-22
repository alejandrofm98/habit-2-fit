import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Dumbbell } from 'lucide-react-native';

interface BrandLogoProps {
  style?: ViewStyle;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ style }) => {
  return (
      <View style={[styles.container, style]}>
        <View style={styles.logoContainer}>
          <Dumbbell size={32} color="#FFFFFF" />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  logoContainer: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#FF5A5F',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  logoText: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#FFFFFF',
    letterSpacing: 1.5,
  },
});

export default BrandLogo;