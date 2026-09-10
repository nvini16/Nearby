import { StyleSheet, Text, View } from 'react-native';
import { Colors, Spacing } from '@/constants/theme';
import HomeHeader from '@/components/home/homeHeader';
import ExperienceSection from '@/components/home/ExperienceSection';

export default function HomeScreen() {
  return (

    
    <View style={styles.container}>
      <HomeHeader />
      <ExperienceSection />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: Spacing.xxl,
    justifyContent: 'flex-start',
    backgroundColor: Colors.background,
  },
});