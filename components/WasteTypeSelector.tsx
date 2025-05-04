import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Trash2, Recycle, FileText, HardDrive, Wine } from 'lucide-react-native';

const wasteTypes = [
  { id: 'organic', name: 'Organic', icon: Trash2, color: '#22c55e' },
  { id: 'plastic', name: 'Plastic', icon: Recycle, color: '#3b82f6' },
  { id: 'paper', name: 'Paper', icon: FileText, color: '#f59e0b' },
  { id: 'ewaste', name: 'E-waste', icon: HardDrive, color: '#ef4444' },
  { id: 'glass', name: 'Glass', icon: Wine, color: '#8b5cf6' },
];

export default function WasteTypeSelector({ selected, onSelect }) {
  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {wasteTypes.map((type) => {
        const Icon = type.icon;
        const isSelected = selected === type.id;
        return (
          <TouchableOpacity
            key={type.id}
            style={[
              styles.typeCard,
              isSelected && { backgroundColor: type.color + '20' },
            ]}
            onPress={() => onSelect(type.id)}
          >
            <Icon size={24} color={type.color} />
            <Text style={[styles.typeName, isSelected && { color: type.color }]}>
              {type.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  typeCard: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginRight: 12,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    minWidth: 100,
  },
  typeName: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
    color: '#6b7280',
  },
});