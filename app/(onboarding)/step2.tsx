import { Button } from '@/components/primitive/Button';
import { InputText } from '@/components/primitive/InputText';
import { router } from 'expo-router';
import { ArrowLeft, ChevronRight } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
    console.log("-->Step 2 loaded");
    const [height, setHeight] = React.useState('');
    const [weight, setWeight] = React.useState('');
    
    return(
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <ArrowLeft size={24} color={'white'} onPress={() => router.back()} />
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row', gap: 8 }}>
                        <View style={styles.dot}></View>
                        <View style={[styles.dot, styles.dotActive]}></View>
                        <View style={styles.dot}></View>
                        <View style={styles.dot}></View>
                    </View>
                </View>
                <View style={styles.step}>
                    <Text style={styles.stepText}>Step 2 of 4</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.headerText}>Your body metrics! 📏</Text>
                    <Text style={styles.bodyText}>This will help us calculate BMI and customize your workout</Text>
                </View>
                <View style={styles.inputSection}>
                    <InputText
                        placeholder="Height in cm"
                        value={height}
                        label="Enter your height in cm"
                        onChangeText={(e) => setHeight(e)}
                    />
                    <InputText
                        placeholder="Weight in kg"
                        value={weight}
                        label="Enter your weight in kg"
                        onChangeText={(e) => setWeight(e)}
                    />
                </View>
            </View>
            <View style={styles.footer}>
                <Button rightIcon={<ChevronRight color={'white'} />} title="Continue" onPress={() => router.push('/(onboarding)/step3')} />
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
        color: '#FFFFFF',
        fontFamily: 'Inter-Bold',
    },
    body: {
        marginTop: 16,
        width: '100%',
        gap: 8
    },
    bodyText: {
        fontSize: 18,
        color: '#CCCCCC',
        fontFamily: 'Inter-Regular',
        lineHeight: 24,
    },
    inputSection: {
        flex: 1,
        paddingTop: 48,
        gap: 89
    },
    dot: {
        backgroundColor: '#2A2A2A',
        padding: 4,
        borderRadius: 50
    },
    dotActive: {
        backgroundColor: '#FF4F6B',
        padding: 6
    },
    step: {
        paddingTop: 16,
    },
    stepText: {
        fontSize: 14,
        color: '#FF4F6B',
        fontFamily: 'Inter-Regular',
        textAlign: 'center'
    },
    footer: {
        width: '100%',
        paddingHorizontal: 16,
        paddingBottom: 16,
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
})