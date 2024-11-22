// Imports
import { StyleSheet, Text, View } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container} className='px-5'>
      <Text style={styles.text} className='text-5xl'>About Screen</Text>
    </View>
  )
}

export default AboutScreen;

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
