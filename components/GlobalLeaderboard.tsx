import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Trophy, Medal } from 'lucide-react-native';

type LeaderboardEntry = {
  id: string;
  rank: number;
  name: string;
  avatar: string;
  points: number;
  wasteReduced: string;
};

const leaderboardData: LeaderboardEntry[] = [
  {
    id: '1',
    rank: 1,
    name: 'Sarah Chen',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    points: 12500,
    wasteReduced: '125kg',
  },
  {
    id: '2',
    rank: 2,
    name: 'John Smith',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    points: 11200,
    wasteReduced: '112kg',
  },
  {
    id: '3',
    rank: 3,
    name: 'Maria Garcia',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    points: 10800,
    wasteReduced: '108kg',
  },
  {
    id: '4',
    rank: 4,
    name: 'Alex Kim',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    points: 9500,
    wasteReduced: '95kg',
  },
  {
    id: '5',
    rank: 5,
    name: 'Emma Wilson',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    points: 9200,
    wasteReduced: '92kg',
  },
];

export default function GlobalLeaderboard() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Trophy size={24} color="#f59e0b" />
        <Text style={styles.title}>Global Leaderboard</Text>
      </View>

      <ScrollView style={styles.leaderboard}>
        {leaderboardData.map((entry) => (
          <View key={entry.id} style={styles.leaderboardEntry}>
            <View style={styles.rankContainer}>
              {entry.rank <= 3 ? (
                <Medal size={24} color={getMedalColor(entry.rank)} />
              ) : (
                <Text style={styles.rankText}>{entry.rank}</Text>
              )}
            </View>

            <Image source={{ uri: entry.avatar }} style={styles.avatar} />

            <View style={styles.userInfo}>
              <Text style={styles.userName}>{entry.name}</Text>
              <Text style={styles.wasteReduced}>{entry.wasteReduced} reduced</Text>
            </View>

            <View style={styles.pointsContainer}>
              <Text style={styles.points}>{entry.points}</Text>
              <Text style={styles.pointsLabel}>pts</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

function getMedalColor(rank: number): string {
  switch (rank) {
    case 1:
      return '#fbbf24';
    case 2:
      return '#94a3b8';
    case 3:
      return '#b45309';
    default:
      return '#6b7280';
  }
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
  leaderboard: {
    maxHeight: 400,
  },
  leaderboardEntry: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  rankContainer: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rankText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6b7280',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 2,
  },
  wasteReduced: {
    fontSize: 14,
    color: '#6b7280',
  },
  pointsContainer: {
    alignItems: 'flex-end',
  },
  points: {
    fontSize: 16,
    fontWeight: '600',
    color: '#f59e0b',
  },
  pointsLabel: {
    fontSize: 12,
    color: '#6b7280',
  },
});