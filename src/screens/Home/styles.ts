import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  list: {
    paddingBottom: 20,
  },
  deviceCard: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  deviceName: {
    fontSize: 18,
    fontWeight: '600',
  },
  deviceType: {
    fontSize: 14,
    color: '#666',
  },
});

export default styles;
