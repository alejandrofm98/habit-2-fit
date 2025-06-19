import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export type iSelectorProps = {
    title?: string;
    options: {
        label: string;
        value: string;
        icon?: React.ReactNode | any;
        onPress: () => void;
    }[];
}

export const Selector = ({title, options}:iSelectorProps) => {
    const [activeOption, setActiveOption] = React.useState<string | null>('male');
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.options}>
                {options.map((option) => (
                    <TouchableOpacity activeOpacity={1} key={option.value} style={[styles.optionButton, option.value === activeOption ? styles.active : null]} onPress={() => {setActiveOption(option.value); option.onPress()}}>
                        {React.isValidElement(option.icon) ? option.icon : <Text style={styles.buttonIcon}>{option.icon}</Text>}
                        <Text style={styles.optionText}>{option.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    optionButton: {
        padding: 24,
        backgroundColor: '#1F1F1F',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#2A2A2A',
    },
    optionText: {
        fontSize: 16,
        fontFamily: 'Inter-SemiBold',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    buttonIcon: {
        fontSize: 48,
        marginBottom: 8,
    },
    active: {
        borderColor: '#FF4F6B',
    }
})