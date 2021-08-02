import {StyleSheet} from 'react-native';

export const loginStyles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
    marginTop: 20,
  },
  label: {
    fontWeight: 'bold',
    color: 'white',
    marginTop: 25,
  },
  container: {
    padding: 25,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  button: {
    borderWidth: 2,
    borderColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 100,
  },
  buttonTexto: {
    fontSize: 18,
    color: 'white',
  },
  inputField: {
    color: 'white',
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'white',
    width: '100%',
    padding: 10,
    borderRadius: 5,
  },
});
