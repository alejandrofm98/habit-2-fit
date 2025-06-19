import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export type iButtonProps = {
    title: string;
    onPress: () => void;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export const Button = ({title, onPress, leftIcon, rightIcon}:iButtonProps) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            {leftIcon && <View style={{ marginRight: 8 }}>{leftIcon}</View>}
            <Text style={styles.buttonText}>{title}</Text>
            {rightIcon && <View style={{ marginLeft: 8 }}>{rightIcon}</View>}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FF4F6B',
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'row',
    },
    buttonText: {
        fontSize: 16,
        color: '#FFFFFF',
        fontFamily: 'Inter-Bold',
    }
})