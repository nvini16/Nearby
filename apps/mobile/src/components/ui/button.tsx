import { Pressable, StyleSheet, Text } from 'react-native';

import { Colors, Radius, Spacing, Typography } from '@/constants/theme';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = {
    title: string;
    onPress: () => void;
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
};

export function Button({
    title,
    onPress,
    variant = 'primary',
    size = 'md',
    disabled = false,
}: ButtonProps) {
    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
            style={[
                styles.base,
                styles[size],
                styles[variant],
                disabled && styles.disabled,
            ]}
        >
            <Text style={[styles.text, styles[`${variant}Text`]]}>
                {title}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    base: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Radius.md,
    },

    sm: {
        minHeight: 36,
        paddingHorizontal: Spacing.md,
    },

    md: {
        minHeight: 44,
        paddingHorizontal: Spacing.lg,
    },

    lg: {
        minHeight: 52,
        paddingHorizontal: Spacing.xl,
    },

    primary: {
        backgroundColor: Colors.primary,
    },

    secondary: {
        backgroundColor: Colors.primarySoft,
        borderWidth: 1,
        borderColor: Colors.border,
    },

    ghost: {
        backgroundColor: 'transparent',
    },

    text: {
        ...Typography.bodyMedium,
    },

    primaryText: {
        color: Colors.textPrimary,
    },

    secondaryText: {
        color: Colors.textPrimary,
    },

    ghostText: {
        color: Colors.primaryActive,
    },

    disabled: {
        opacity: 0.5,
    },
});
