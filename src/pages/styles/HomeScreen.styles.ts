import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 100, // Space for transparent header
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 10,
  },
  eventCard: {
    padding: 10,
    borderWidth: 1,
    marginVertical: 5,
    borderRadius: 8,
  },
  eventTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  eventDescription: {
    fontSize: 14,
    marginVertical: 4,
  },
  eventDate: {
    fontSize: 12,
    color: '#666',
  },
  participationStatus: {
    fontSize: 14,
    marginVertical: 4,
  },
});
