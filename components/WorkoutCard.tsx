import { Play } from 'lucide-react-native';
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type iData = {
    duration: string;
    exercises: string;
    difficulty: "Easy" | "Medium" | "Hard" | "Expert";
}

export type iWorkoutCardProps = {
    title: string;
    data: iData;
    image: string;
}

export const WorkoutCard = ({title, data, image}:iWorkoutCardProps) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: image }} style={{ width: '100%', height: 230, borderTopLeftRadius: 12, borderTopRightRadius: 12 }} />
            <View style={{ padding: 16, width: '100%', gap: 8 }}>
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={styles.cardData}>{data.duration} • {data.exercises} • {data.difficulty}</Text>
                <TouchableOpacity style={styles.button}>
                    <Play size={24} color={'#FFFFFF'} />
                    <Text style={styles.buttonText}>Start Workout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#1F1F1F",
        borderRadius: 12,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFFFFF",
        textAlign: 'left',
    },
    cardData: {
        fontSize: 14,
        color: "#bfbfbf",
        textAlign: 'left',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF4F6B',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 12,
        gap: 8,
        width: '100%',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold'
    }
})