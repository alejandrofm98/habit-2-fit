import { getCurrentGoogleUser } from '@/services/AuthService';
import { configureGoogleSignIn } from '@/services/GoogleSignInConfig';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { createContext, useContext, useEffect, useState } from 'react';
import 'react-native-reanimated';



import { useColorScheme } from '@/hooks/useColorScheme';
import { User } from '@react-native-google-signin/google-signin';

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
  loading: true,

});

export const useAuth = () => useContext(AuthContext);


export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    if (!loaded) {
      return;
    }
    configureGoogleSignIn();
    const checkUser = async () => {
      const currentUser = await getCurrentGoogleUser();
      setUser(currentUser);
      setLoading(false);
    };
    checkUser();
  }, [loaded]);




  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(init)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </AuthContext.Provider>
  );
}
