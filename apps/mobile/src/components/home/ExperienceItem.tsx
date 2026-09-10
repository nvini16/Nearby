import type { Experience } from '@nearby/types';
import {View, StyleSheet, Text } from 'react-native';
import {Colors, Typography } from '@/constants/theme';

export default function ExperienceItem({ experience}: {experience: Experience}) {
    const media = experience.media[0];
    
    return (
        <View>
            <View style={styles.avatar} />

            <Text style={styles.name}>Nome</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        borderWidth: 2,
        borderColor: Colors.primary,
    },

    name: {
        color: Colors.textSecondary,
        fontSize: Typography.caption.fontSize,
        lineHeight: Typography.caption.lineHeight,
        textAlign: 'center',
        marginTop: 4,
    },
});