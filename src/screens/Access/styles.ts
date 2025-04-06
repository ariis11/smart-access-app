import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  deviceName: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 32,
  },
  loadingText: {
    textAlign: 'center',
    marginBottom: 16,
    color: '#666',
  },
  button: {
    backgroundColor: '#333',
    padding: 16,
    borderRadius: 12,
    alignSelf: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default styles;
