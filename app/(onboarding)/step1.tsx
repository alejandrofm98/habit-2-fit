import { Button } from '@/components/primitive/Button';
import { InputText } from '@/components/primitive/InputText';
import { iSelectorProps, Selector } from '@/components/primitive/Selector';
import { router } from 'expo-router';
import { ArrowLeft, ChevronRight } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
    console.log("-->Step 1 loaded");
    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState('');
    const [gender, setGender] = React.useState('');

    const options:iSelectorProps = {
        title: "Select your gender",
        options: [
            {
                label: "Male",
                value: "male",
                icon: "👨",
                onPress: () => setGender("male")
            },
            {
                label: "Female",
                value: "female",
                icon: "👩",
                onPress: () => setGender("female")
            },
            {
                label: "Other",
                value: "other",
                icon: "👽",
                onPress: () => setGender("other")
            }
        ]
    }
    return(
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <ArrowLeft size={24} color={'white'} onPress={() => router.back()} />
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row', gap: 8 }}>
                        <View style={[styles.dot, styles.dotActive]}></View>
                        <View style={styles.dot}></View>
                        <View style={styles.dot}></View>
                        <View style={styles.dot}></View>
                    </View>
                </View>
                <View style={styles.step}>
                    <Text style={styles.stepText}>Step 1 of 4</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.headerText}>Tell us more about you! 👋</Text>
                    <Text style={styles.bodyText}>We need some data for personalize your experience.</Text>
                </View>
                <View style={styles.inputSection}>
                    <InputText
                        placeholder="Enter your name"
                        value={name}
                        label="What's your name?"
                        onChangeText={(e) => setName(e)}
                    />
                    <InputText
                        placeholder="Enter your age"
                        value={age}
                        label="What's your age?"
                        onChangeText={(e) => setAge(e)}
                    />
                    <Selector {...options} />
                </View>
            </View>
            <View style={styles.footer}>
                <Button rightIcon={<ChevronRight color={'white'} />} title="Continue" onPress={() => router.push('/(onboarding)/step2')} />
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