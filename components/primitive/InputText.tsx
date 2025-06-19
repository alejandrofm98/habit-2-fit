import { View } from "lucide-react-native";
import React from "react";
import { Dimensions, StyleSheet, Text, TextInput } from "react-native";


const {width} = Dimensions.get('window');

export const InputText = ({
    placeholder,
    value,
    onChangeText,
    label = '',
}: {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    label?: string;
}) => {
    

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', gap: 18 }}>
            {(label && label.length > 0) && <Text style={[styles.text, { height: 35, marginBottom: 0 }]}>{label}</Text>}
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    input: {
        backgroundColor: '#1F1F1F',
        borderRadius: 12,
        padding: 16,
        fontSize: 16,
        color: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#2A2A2A',
        width: width - 48,
        zIndex: 99999
    },
    text:{
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        color: '#FFFFFF',
        width: width,
        paddingBottom: 8,
        height: 24,
    }
})