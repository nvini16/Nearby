import { View, Text, StyleSheet } from 'react-native';
import { Colors, Typography } from '../../constants/theme';

export default function HomeHeader() {
    return (  <View style={styles.container}>
        <Text style={styles.title }>Nearby</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },

    title: {
        color: Colors.textPrimary,
        fontSize: Typography.title.fontSize,
        fontWeight: Typography.title.fontWeight,
    }
})