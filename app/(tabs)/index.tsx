import React from 'react';
import {Text, View, StyleSheet, Button, Alert, Pressable} from 'react-native';
import {useRouter} from "expo-router";
import {useAuth} from "@/app/_layout";

import { signOutGoogle } from '@/services/AuthService';


export default function Index() {
  const { user, setUser } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await signOutGoogle();
    setUser(null);
    router.replace('/(auth)');
  };
  return(
      <View style={styles.container}>
        <Text style={styles.text}>Home Screen</Text>
        <Button title="Logout" onPress={handleLogout} />

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white'
  },
  button: {
    backgroundColor: '#2563EB',
  }
});