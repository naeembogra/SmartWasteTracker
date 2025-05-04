import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Trophy, Target, Award } from 'lucide-react-native';

const challenges = [
  {
    id: '1',
    title: 'Zero Plastic Week',
    description: 'Go 7 days without using single-use plastics',
    reward: 500,
    participants: 1234,
    daysLeft: 5,
    progress: 65,
  },
  {
    id: '2',
    title: 'Composting Champion',
    description: 'Start a composting system and log organic waste for 30 days',
    reward: 1000,
    participants: 856,
    daysLeft: 15,
    progress: 40,
  },
  {
    id: '3',
    title: 'Recycling Master',
    description: 'Properly sort and recycle 50 items',
    reward: 750,
    participants: 2341,
    daysLeft: 10,
    progress: 80,
  },
];

export default function ChallengesScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Trophy size={24} color="#f59e0b" />
        <Text style={styles.headerTitle}>Active Challenges</Text>
      </View>

      {challenges.map((challenge) => (
        <View key={challenge.id} style={styles.challengeCard}>
          <View style={styles.challengeHeader}>
            <Target size={24} color="#10b981" />
            <Text style={styles.challengeTitle}>{challenge.title}</Text>
          </View>
          
          <Text style={styles.description}>{challenge.description}</Text>
          
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

          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <Award size={16} color="#f59e0b" />
              <Text style={styles.statText}>{challenge.reward} points</Text>
            </View>
            <Text style={styles.statText}>{challenge.participants} participants</Text>
            <Text style={styles.daysLeft}>{challenge.daysLeft} days left</Text>
          </View>

          <TouchableOpacity 
            style={styles.joinButton}
            onPress={() => alert('Joining challenge...')}
          >
            <Text style={styles.joinButtonText}>Join Challenge</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginLeft: 8,
  },
  challengeCard: {
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
  challengeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  challengeTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginLeft: 8,
  },
  description: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 16,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
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
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    fontSize: 14,
    color: '#6b7280',
    marginLeft: 4,
  },
  daysLeft: {
    fontSize: 14,
    color: '#ef4444',
    fontWeight: '500',
  },
  joinButton: {
    backgroundColor: '#10b981',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  joinButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});