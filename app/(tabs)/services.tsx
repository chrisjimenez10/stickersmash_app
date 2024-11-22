// Imports
import { StyleSheet, Text, View } from 'react-native';

const ServicesScreen = () => {
  return (
    <View style={styles.container} className='px-5'>
      <Text style={styles.text} className='text-5xl'>Services Screen</Text>
    </View>
  )
}

export default ServicesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#202978"
      },
      text: {
        color: "white",
        textAlign: "center",
      }
});