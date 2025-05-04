import { View, Text, StyleSheet } from 'react-native';
import { Award, Leaf, Scale } from 'lucide-react-native';

type StatsProps = {
  points: number;
  impact: number;
  level: number;
};

export default function ProfileStats({ points, impact, level }: StatsProps) {
  return (
    <View style={styles.container}>
      <View style={styles.statCard}>
        <Award size={24} color="#10b981" />
        <Text style={styles.statNumber}>{points}</Text>
        <Text style={styles.statLabel}>Points</Text>
      </View>
      <View style={styles.statCard}>
        <Leaf size={24} color="#10b981" />
        <Text style={styles.statNumber}>{impact}</Text>
        <Text style={styles.statLabel}>Impact</Text>
      </View>
      <View style={styles.statCard}>
        <Scale size={24} color="#10b981" />
        <Text style={styles.statNumber}>{level}</Text>
        <Text style={styles.statLabel}>Level</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  statCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#10b981',
    marginVertical: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
});