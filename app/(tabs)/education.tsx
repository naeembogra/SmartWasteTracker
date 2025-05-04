import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { BookOpen, Video, Award } from 'lucide-react-native';

const articles = [
  {
    id: '1',
    title: 'Understanding Waste Types',
    description: 'Learn about different types of waste and how to properly sort them',
    image: 'https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg',
    readTime: '5 min',
    type: 'Article',
  },
  {
    id: '2',
    title: 'Composting Basics',
    description: 'Start your composting journey with these essential tips',
    image: 'https://images.pexels.com/photos/4503261/pexels-photo-4503261.jpeg',
    readTime: '8 min',
    type: 'Video',
  },
  {
    id: '3',
    title: 'Reducing Plastic Usage',
    description: 'Simple ways to cut down on plastic in your daily life',
    image: 'https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg',
    readTime: '6 min',
    type: 'Quiz',
  },
];

export default function EducationScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <BookOpen size={24} color="#10b981" />
        <Text style={styles.headerTitle}>Sustainability Education</Text>
      </View>

      <View style={styles.progressCard}>
        <Text style={styles.progressTitle}>Your Learning Progress</Text>
        <View style={styles.progressStats}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Articles Read</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Quizzes Completed</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Badges Earned</Text>
          </View>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Featured Content</Text>

      {articles.map((article) => (
        <TouchableOpacity 
          key={article.id} 
          style={styles.articleCard}
          onPress={() => alert('Opening article...')}
        >
          <Image 
            source={{ uri: article.image }}
            style={styles.articleImage}
          />
          <View style={styles.articleContent}>
            <View style={styles.articleHeader}>
              <View style={styles.typeContainer}>
                {article.type === 'Video' ? (
                  <Video size={16} color="#10b981" />
                ) : article.type === 'Quiz' ? (
                  <Award size={16} color="#10b981" />
                ) : (
                  <BookOpen size={16} color="#10b981" />
                )}
                <Text style={styles.articleType}>{article.type}</Text>
              </View>
              <Text style={styles.readTime}>{article.readTime}</Text>
            </View>
            <Text style={styles.articleTitle}>{article.title}</Text>
            <Text style={styles.articleDescription}>{article.description}</Text>
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
  progressCard: {
    backgroundColor: '#ffffff',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  progressTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  progressStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#10b981',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginHorizontal: 16,
    marginTop: 24,
    marginBottom: 12,
  },
  articleCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    margin: 16,
    marginTop: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
  },
  articleImage: {
    width: '100%',
    height: 160,
  },
  articleContent: {
    padding: 16,
  },
  articleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  typeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  articleType: {
    fontSize: 14,
    color: '#10b981',
    marginLeft: 4,
    fontWeight: '500',
  },
  readTime: {
    fontSize: 14,
    color: '#6b7280',
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  articleDescription: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
});