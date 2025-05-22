import {GoogleSignin, User} from '@react-native-google-signin/google-signin';

export const signInWithGoogle = async (): Promise<User|null> => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    return userInfo.data;
  } catch (error: any) {
    throw new Error(error.message ?? 'Google Sign-In failed');
  }
};

export const getCurrentGoogleUser = async (): Promise<User | null> => {
  try {
      return GoogleSignin.getCurrentUser();
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
};

export const signOutGoogle = async (): Promise<void> => {
  try {
    await GoogleSignin.signOut();
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};