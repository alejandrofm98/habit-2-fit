import { InputText } from '@/components/primitive/InputText';
import { ArrowLeft } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
    console.log("-->Step Index loaded");
    const [name, setName] = React.useState('');
    return(
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <ArrowLeft size={24} color={'white'} />
                </View>
                <View style={styles.body}>
                    <Text style={styles.headerText}>Tell us more</Text>
                    <Text style={styles.bodyText}>Welcome to Habit2Fit now we are going to ask you some questions to better understand your habits and help you achieve your fitness goals.</Text>
                </View>
                <View style={styles.inputSection}>
                    <InputText
                        placeholder="Enter your name"
                        value={name}
                        label="What's your name?"
                        onChangeText={setName}
                    />
                </View>
            </View>
        </SafeAreaView>
    </SafeAreaProvider>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: '#121212',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8
    },
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    body: {
        marginTop: 16,
        width: '100%',
        gap: 8
    },
    bodyText: {
        fontSize: 16,
        color: '#B0B0B0',
        marginTop: 16,
        lineHeight: 24
    },
    inputSection: {
        width: '100%',
        flex: 1,
        marginTop: 16,
        gap: 16
    }
})