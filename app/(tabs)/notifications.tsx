import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Bell, Calendar, Truck, Trophy, CircleAlert as AlertCircle } from 'lucide-react-native';

const notifications = [
  {
    id: '1',
    type: 'pickup',
    title: 'Waste Pickup Scheduled',
    message: 'Your waste pickup is scheduled for tomorrow at 10:00 AM',
    time: '2 hours ago',
    unread: true,
  },
  {
    id: '2',
    type: 'challenge',
    title: 'New Challenge Available',
    message: 'Join the "Zero Waste Week" challenge and earn extra points!',
    time: '5 hours ago',
    unread: true,
  },
  {
    id: '3',
    type: 'reminder',
    title: 'Log Your Waste',
    message: "Don't forget to log your waste for today to maintain your streak",
    time: '1 day ago',
    unread: false,
  },
  {
    id: '4',
    type: 'alert',
    title: 'System Maintenance',
    message: 'The app will be under maintenance on Sunday from 2 AM to 4 AM',
    time: '2 days ago',
    unread: false,
  },
];

export default function NotificationsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Bell size={24} color="#10b981" />
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      {notifications.map((notification) => (
        <TouchableOpacity 
          key={notification.id}
          style={[
            styles.notificationCard,
            notification.unread && styles.unreadCard
          ]}
          onPress={() => alert('Opening notification...')}
        >
          <View style={styles.iconContainer}>
            {notification.type === 'pickup' && <Truck size={24} color="#3b82f6" />}
            {notification.type === 'challenge' && <Trophy size={24} color="#f59e0b" />}
            {notification.type === 'reminder' && <Calendar size={24} color="#10b981" />}
            {notification.type === 'alert' && <AlertCircle size={24} color="#ef4444" />}
          </View>
          
          <View style={styles.content}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{notification.title}</Text>
              {notification.unread && <View style={styles.unreadDot} />}
            </View>
            <Text style={styles.message}>{notification.message}</Text>
            <Text style={styles.time}>{notification.time}</Text>
          </View>
        </TouchableOpacity>
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
  notificationCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  unreadCard: {
    backgroundColor: '#f0fdf4',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    flex: 1,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10b981',
    marginLeft: 8,
  },
  message: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
    lineHeight: 20,
  },
  time: {
    fontSize: 12,
    color: '#9ca3af',
  },
});