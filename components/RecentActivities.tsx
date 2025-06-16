import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type iRecentActivity = {
    id: number;
    icon: ReactNode;
    title: string;
    time: string;
}

type iRecentActivities = {
    list: iRecentActivity[];
}

const RecentActivity = ({ icon, title, time }: iRecentActivity) => {
    return (
        <View style={styles.activity}>
            {icon}
            <View style={styles.activityText}>
                <Text style={styles.recentActivityTitle}>{title}</Text>
                <Text style={styles.recentActivityTime}>{time}</Text>
            </View>
        </View>
    )
}

export const RecentActivities = ({ list }: iRecentActivities) => {
    return (
        <View style={styles.container}>
            {list.map((val, idx) => {
                return (
                    <RecentActivity key={`recent-activity-${idx}`} {...val} />
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    activity: {
        flexDirection: 'row',
        backgroundColor: '#121212',
        borderRadius: 12,
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderBottomWidth: 2,
        gap: 16,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%'
    },
    activityText: {
        flexDirection: 'column',
        gap: 2
    },
    recentActivityTitle: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
    recentActivityTime:{
        fontSize: 14,
        color: '#bfbfbf'
    }

})