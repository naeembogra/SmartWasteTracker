import { View, Text, StyleSheet } from 'react-native';

type WasteData = {
  type: string;
  quantity: number;
  percentage: number;
};

const wasteData: WasteData[] = [
  { type: 'Organic', quantity: 25.5, percentage: 40 },
  { type: 'Plastic', quantity: 15.8, percentage: 25 },
  { type: 'Paper', quantity: 12.2, percentage: 20 },
  { type: 'Metal', quantity: 6.5, percentage: 10 },
  { type: 'Glass', quantity: 3.0, percentage: 5 },
];

export default function WasteAnalytics() {
  const totalWaste = wasteData.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Waste Breakdown</Text>
      <Text style={styles.totalText}>
        Total: {totalWaste.toFixed(1)} kg
      </Text>

      <View style={styles.chartContainer}>
        {wasteData.map((item, index) => (
          <View key={item.type} style={styles.barContainer}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>{item.type}</Text>
              <Text style={styles.percentage}>{item.percentage}%</Text>
            </View>
            <View style={styles.barBackground}>
              <View 
                style={[
                  styles.bar, 
                  { 
                    width: `${item.percentage}%`,
                    backgroundColor: getBarColor(index),
                  }
                ]} 
              />
            </View>
            <Text style={styles.quantity}>{item.quantity.toFixed(1)} kg</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function getBarColor(index: number): string {
  const colors = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6'];
  return colors[index % colors.length];
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  totalText: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 16,
  },
  chartContainer: {
    marginTop: 8,
  },
  barContainer: {
    marginBottom: 12,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  label: {
    fontSize: 14,
    color: '#111827',
  },
  percentage: {
    fontSize: 14,
    color: '#6b7280',
  },
  barBackground: {
    height: 8,
    backgroundColor: '#f3f4f6',
    borderRadius: 4,
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    borderRadius: 4,
  },
  quantity: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
  },
});