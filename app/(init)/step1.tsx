import { Dimensions, StyleSheet, Text, View } from 'react-native';

import { ArrowLeft } from 'lucide-react-native';

const Step1 = () => {
    console.log("-->Step 1 loaded");
    <View style={styles.container}>
        <View style={styles.header}>
            <ArrowLeft size={24} color={'white'} />
            <Text style={styles.headerText}>Tell us more</Text>
        </View>
    </View>
}

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height,
        width: width,
        padding: 16,
        backgroundColor: '#121212',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    header: {
        flexDirection: 'row',
    },
    headerText: {
        fontSize: 32,
        fontWeight: 'black',
    }
})

export default Step1;