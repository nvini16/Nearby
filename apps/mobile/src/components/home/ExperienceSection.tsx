import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Colors, Spacing, Typography } from '@/constants/theme';
import ExperienceItem from '@/components/home/ExperienceItem';
import type { Experience } from '@nearby/types';


export default function ExperienceSection() {
    const experiences: Experience[] = [
    { 
        id: '1',
        userId: 'user-1',
        placeId: 'place-1',
        media: [],
        occurredAt: '2026-09-09T10:00:00z',
        createdAt: '2026-09-09T10:30:00z',
        visibility: 'public',
    },

    {
        id: '2',
        userId: 'user-2',
        placeId: 'place-2',
        media: [],
        occurredAt: '2026-09-10T14:00:00z',
        createdAt: '2026-09-10T14:30:00z',
        visibility: 'public',
    },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Experiências
            </Text>

            <ScrollView 
                horizontal
                contentContainerStyle={styles.list}
                > 
                {experiences.map((experience) => (
                    <ExperienceItem
                        key={experience.id}
                        experience={experience}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: Spacing.xxl,
    },

    title: {
        ...Typography.subtitle,
        color: Colors.textPrimary,
        marginBottom: Spacing.md,
    },

    list: {
        gap: Spacing.md,
    },
});