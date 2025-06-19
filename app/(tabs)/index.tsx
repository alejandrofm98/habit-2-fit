import { useAuth } from "@/app/_layout";
import { AnalyticCard } from "@/components/AnalyticsCard";
import { RecentActivities } from "@/components/RecentActivities";
import { WorkoutCard, iWorkoutCardProps } from "@/components/WorkoutCard";
import { signOutGoogle } from '@/services/AuthService';
import { useRouter } from "expo-router";
import { Calendar, Dumbbell, TrendingUp, Trophy, User } from 'lucide-react-native';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function Index() {
  const { user, setUser } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await signOutGoogle();
    setUser(null);
    router.replace('/(auth)');
  };

  //MOCK DATA
  const workoutCard:iWorkoutCardProps[] = [
    {
      title: "Workout 1",
      data: {
        duration: "30 mins",
        exercises: "8 Exercises",
        difficulty: "Expert"
      },
      image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg"
    }
  ]

  const formatDate = (date:Date) => {
    return date.toLocaleDateString('es-ES', {
      dayPeriod: 'long',
      month: 'long',
      year: 'numeric'
    });
  }

  const recentActivitiesList = [
    {
      id: 1,
      icon: <Dumbbell size={24} color={'#FF4F6B'} />,
      title: 'Push day completed',
      time: formatDate(new Date())
    },
    {
      id: 2,
      icon: <Trophy size={24} color={'#FF4F6B'} />,
      title: '4 days streak',
      time: formatDate(new Date())
    },
    {
      id: 3,
      icon: <Dumbbell size={24} color={'#FF4F6B'} />,
      title: 'Dead lift completed',
      time: formatDate(new Date())
    },
  ]
  return(
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never">
            <View style={styles.header}>
              <View style={styles.headerApp}>
                <Text style={styles.headerBienvenido}>Bienvenido</Text>
                <Text style={styles.headerUsuario}>{user?.user.givenName}</Text>
              </View>
              <TouchableOpacity onPress={() => handleLogout} style={styles.icon}>
                {user?.user.photo ? <Image src={user?.user.photo} width={48} height={48} /> : <User width={48} height={48} />}
              </TouchableOpacity>
            </View>
            {/*<Button title="Logout" onPress={handleLogout} />*/}
            <View style={styles.analyticSection}>
              <AnalyticCard icon={<Trophy size={24} color={'#FF4F6B'} />} data="12" title="Workouts" />
              <AnalyticCard icon={<TrendingUp size={24} color={'#FF4F6B'} />} data="8" title="Score" />
              <AnalyticCard icon={<Calendar size={24} color={'#FF4F6B'} />} data="5" title="Streak" />
            </View>
            
            <Text style={styles.titleSection}>Today's Workout</Text>
            <View style={styles.featuredWorkout}>
              <WorkoutCard title={workoutCard[0].title} data={workoutCard[0].data} image={workoutCard[0].image} />
            </View>

            <Text style={styles.titleSection}>Recent Activities</Text>
            <View style={styles.recentSection}>
              <RecentActivities list={recentActivitiesList} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#0f0f0f',
    paddingTop: 16,
    paddingHorizontal: 20,
    gap: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#0f0f0f',
    padding: 16,
  },
  analyticSection: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#0f0f0f',
    gap: 16,
    marginVertical: 16,
  },
  featuredWorkout: {
    width: '100%',
    backgroundColor: '#1f1f1f',
    borderRadius: 12,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 16,
    marginVertical: 16,
  },
  recentSection: {
    width: '100%',
    backgroundColor: '#1f1f1f',
    borderRadius: 12,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 16,
    marginVertical: 16,
  },
  headerApp: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 4
  },
  headerBienvenido: {
    fontSize: 22,
    fontWeight: 'black',
    color: 'white'
  },
  headerUsuario: {
    fontSize: 18,
    color: '#ababab',
    fontWeight: 'bold'
  },
  icon: {
    backgroundColor: '#ababab',
    padding: 4,
    borderRadius: 50
  },
  titleScreen: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  titleSection: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#2563EB',
    display: 'none',
    opacity: 0
  }
});