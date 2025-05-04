import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Brain, Target, Trophy } from 'lucide-react-native';

type Challenge = {
  id: string;
  title: string;
  description: string;
  target: string;
  reward: number;
  progress: number;
};

const challenges: Challenge[] = [
  {
    id: '1',
    title: 'Reduce Plastic Week',
    description: 'Reduce your plastic waste by 30% this week',
    target: '30% reduction',
    reward: 500,
    progress: 65,
  },
  {
    id: '2',
    title: 'Paper-Free Month',
    description: 'Minimize paper waste for the next 30 days',
    target: '50% reduction',
    reward: 1000,
    progress: 40,
  },
];

export default function WastePrediction() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Brain size={24} color="#10b981" />
        <Text style={styles.title}>AI Predictions & Challenges</Text>
      </View>

      <View style={styles.predictionCard}>
        <Text style={styles.predictionTitle}>Your Waste Insights</Text>
        <Text style={styles.predictionText}>
          Based on your recent activity, you could reduce your plastic waste by 25%
          by replacing disposable items with reusable alternatives.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Active Challenges</Text>
      {challenges.map((challenge) => (
        <View key={challenge.id} style={styles.challengeCard}>
          <View style={styles.challengeHeader}>
            <Target size={20} color="#10b981" />
            <Text style={styles.challengeTitle}>{challenge.title}</Text>
          </View>
          <Text style={styles.challengeDescription}>{challenge.description}</Text>
          
          <View style={styles.progressContainer}>
            <View style={styles.progressBackground}>
              <View 
                style={[
                  styles.progressBar,
                  { width: `${challenge.progress}%` }
                ]} 
              />
            </View>
            <Text style={styles.progressText}>{challenge.progress}%</Text>
          </View>

          <View style={styles.challengeFooter}>
            <View style={styles.targetContainer}>
              <Text style={styles.targetLabel}>Target:</Text>
              <Text style={styles.targetValue}>{challenge.target}</Text>
            </View>
            <View style={styles.rewardContainer}>
              <Trophy size={16} color="#f59e0b" />
              <Text style={styles.rewardText}>{challenge.reward} points</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginLeft: 8,
  },
  predictionCard: {
    backgroundColor: '#f0fdf4',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
  },
  predictionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#10b981',
    marginBottom: 8,
  },
  predictionText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
  },
  challengeCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  challengeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  challengeTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginLeft: 8,
  },
  challengeDescription: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 12,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  progressBackground: {
    flex: 1,
    height: 8,
    backgroundColor: '#f3f4f6',
    borderRadius: 4,
    marginRight: 8,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#10b981',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#10b981',
    width: 45,
  },
  challengeFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  targetContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  targetLabel: {
    fontSize: 14,
    color: '#6b7280',
    marginRight: 4,
  },
  targetValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
  },
  rewardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fef3c7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  rewardText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#f59e0b',
    marginLeft: 4,
  },
});