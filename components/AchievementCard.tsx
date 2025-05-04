import { View, Text, StyleSheet } from 'react-native';
import { Award } from 'lucide-react-native';

type AchievementProps = {
  title: string;
  description: string;
  points: number;
  unlocked: boolean;
};

export default function AchievementCard({ title, description, points, unlocked }: AchievementProps) {
  return (
    <View style={[styles.container, !unlocked && styles.locked]}>
      <Award size={24} color={unlocked ? '#10b981' : '#9ca3af'} />
      <View style={styles.content}>
        <Text style={[styles.title, !unlocked && styles.lockedText]}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={[styles.pointsBadge, !unlocked && styles.lockedBadge]}>
        <Text style={[styles.pointsText, !unlocked && styles.lockedText]}>{points} pts</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  locked: {
    opacity: 0.7,
  },
  content: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#6b7280',
  },
  pointsBadge: {
    backgroundColor: '#10b981',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  lockedBadge: {
    backgroundColor: '#9ca3af',
  },
  pointsText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  lockedText: {
    color: '#6b7280',
  },
});