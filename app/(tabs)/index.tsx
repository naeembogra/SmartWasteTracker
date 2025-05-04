import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { CirclePlus as PlusCircle, Recycle, Scale, MapPin } from 'lucide-react-native';
import WastePrediction from '../../components/WastePrediction';
import GlobalLeaderboard from '../../components/GlobalLeaderboard';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg' }}
          style={styles.headerImage}
        />
        <View style={styles.overlay}>
          <Text style={styles.headerTitle}>Smart Waste Tracker</Text>
          <Text style={styles.headerSubtitle}>Track and manage waste responsibly</Text>
        </View>
      </View>

      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome back, Naeem! 👋</Text>
        <Text style={styles.welcomeSubtext}>Let's make a difference today.</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>23.5</Text>
          <Text style={styles.statLabel}>Total KG</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Submissions</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>4.2</Text>
          <Text style={styles.statLabel}>Impact Score</Text>
        </View>
      </View>

      <WastePrediction />
      
      <GlobalLeaderboard />

      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => alert('New waste logging feature coming soon!')}
      >
        <PlusCircle size={24} color="#ffffff" />
        <Text style={styles.addButtonText}>Log New Waste</Text>
      </TouchableOpacity>

      <View style={styles.featuresGrid}>
        <TouchableOpacity 
          style={styles.featureCard}
          onPress={() => alert('Waste types information coming soon!')}
        >
          <Recycle size={32} color="#10b981" />
          <Text style={styles.featureTitle}>Waste Types</Text>
          <Text style={styles.featureDescription}>Learn about different waste categories</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.featureCard}
          onPress={() => alert('Impact tracking coming soon!')}
        >
          <Scale size={32} color="#10b981" />
          <Text style={styles.featureTitle}>My Impact</Text>
          <Text style={styles.featureDescription}>View your environmental impact</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.featureCard}
          onPress={() => alert('Drop points feature coming soon!')}
        >
          <MapPin size={32} color="#10b981" />
          <Text style={styles.featureTitle}>Drop Points</Text>
          <Text style={styles.featureDescription}>Find nearby recycling centers</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    height: 200,
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#ffffff',
    opacity: 0.9,
  },
  welcomeContainer: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  welcomeSubtext: {
    fontSize: 16,
    color: '#6b7280',
  },
  statsContainer: {
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
    fontSize: 20,
    fontWeight: '700',
    color: '#10b981',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  addButton: {
    backgroundColor: '#10b981',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  featuresGrid: {
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    width: '48%',
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginTop: 12,
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
  },
});