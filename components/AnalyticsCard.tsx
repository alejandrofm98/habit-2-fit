import React, { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

type iAnalyticCardProps = {
    icon: ReactNode;
    data: string;
    title: string;
};

export const AnalyticCard = ({icon, data, title}: iAnalyticCardProps) => {
    return (
        <View style={styles.card}>
            {icon}
            <Text style={styles.cardData}>{data}</Text>
            <Text style={styles.cardTitle}>{title}</Text>
        </View>
    ) 
}

const styles = StyleSheet.create({
    card: {
        padding: 16,
        backgroundColor: "#1F1F1F",
        borderRadius: 12,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'center',
        flex: 1,
        gap: 8,
    },
    cardData: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#FFFFFF",
        textAlign: "center",
    },
    cardTitle: {
        fontSize: 14,
        color: "#fff",
        textAlign: "center",
    },
})