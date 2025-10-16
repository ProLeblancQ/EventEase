import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 100, // Space for transparent header
  },
  input: {
    borderWidth: 1,
    marginVertical: 8,
    padding: 10,
    borderRadius: 8,
  },
  dateButton: {
    borderWidth: 1,
    marginVertical: 8,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  dateButtonText: {
    fontSize: 16,
    color: '#000000',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  datePicker: {
    width: '100%',
    height: 200,
  },
  webDatePickerContainer: {
    marginVertical: 8,
  },
  webDateInput: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
  },
});
