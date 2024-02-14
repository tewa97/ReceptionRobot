import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  input: {
    elevation: 1,
    width: '99%',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  inputContainer: {
    position: 'absolute',
    elevation: 1,
    backgroundColor: 'white',
    width: '90%',
    height: '6%',
    bottom: 40,
    borderRadius: 3,
    shadowOpacity: 0.75,
    shadowRadius: 1,
    shadowColor: 'gray',
    shadowOffset: { height: 0, width: 0}
  }
  
});