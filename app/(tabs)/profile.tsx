import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Settings, Bell, Share2, LogOut } from 'lucide-react-native';
import ProfileStats from '../../components/ProfileStats';
import AchievementCard from '../../components/AchievementCard';

const achievements = [
  {
    id: '1',
    title: 'Waste Warrior',
    description: 'Log your first waste entry',
    points: 50,
    unlocked: true,
  },
  {
    id: '2',
    title: 'Recycling Champion',
    description: 'Log 10 different types of waste',
    points: 100,
    unlocked: true,
  },
  {
    id: '3',
    title: 'Green Guardian',
    description: 'Maintain a streak of daily logs for 7 days',
    points: 200,
    unlocked: false,
  },
  {
    id: '4',
    title: 'Earth Protector',
    description: 'Reduce waste by 25% in a month',
    points: 300,
    unlocked: false,
  },
];

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Naeem Najm</Text>
        <Text style={styles.email}>naeembogra@gmail.com</Text>
      </View>

      <ProfileStats points={275} impact={15} level={4} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem} onPress={() => alert('Settings coming soon!')}>
            <Settings size={24} color="#10b981" />
            <Text style={styles.menuText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => alert('Notifications coming soon!')}>
            <Bell size={24} color="#10b981" />
            <Text style={styles.menuText}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => alert('Share coming soon!')}>
            <Share2 size={24} color="#10b981" />
            <Text style={styles.menuText}>Share Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Achievements</Text>
        <View style={styles.achievementsContainer}>
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.id} {...achievement} />
          ))}
        </View>
      </View>

      <TouchableOpacity 
        style={styles.logoutButton}
        onPress={() => alert('Logout functionality coming soon!')}
      >
        <LogOut size={24} color="#ffffff" />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    borderWidth: 3,
    borderColor: '#10b981',
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: '#6b7280',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  menuContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  menuText: {
    fontSize: 16,
    marginLeft: 12,
    color: '#111827',
    fontWeight: '500',
  },
  achievementsContainer: {
    marginTop: 8,
  },
  logoutButton: {
    margin: 16,
    marginBottom: 32,
    backgroundColor: '#ef4444',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  logoutText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});