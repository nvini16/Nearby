import {View, StyleSheet, Text } from 'react-native';
import {Colors, Typography } from '../../constants/theme';

export default function ExperienceItem({viewed}: { viewed: boolean}) {
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
        borderColor: viewed ? Colors.primaryActive : Colors.primary,
    },

    name: {
        color: Colors.textSecondary,
        fontSize: Typography.caption.fontSize,
        lineHeight: Typography.caption.lineHeight,
        textAlign: 'center',
        marginTop: 4,
    },
});