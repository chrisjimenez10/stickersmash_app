// Imports
import { StyleSheet, Text, View } from 'react-native';
import { Link, Stack } from 'expo-router';


const NotFoundScreen = () => {

    // Options Object
    const notFoundScreenOptions: {[variant: string]: string} = {
        title: "Oops! Not Found",
    }

  return (
    <>
    {/* To access the Screen properties like the options object to change the "title" of a Screen Component, we MUST import the <Stack /> Component and wrap everything inside fragments */}
        <Stack.Screen options={notFoundScreenOptions} />
        <View style={styles.container} className='px-5'>
            <Text style={styles.text} className='text-5xl'>* 404 * Error</Text>
            <Text className="text-xl text-white underline">
                <Link href={"/"}>Go back to Home screen!</Link>
            </Text>
        </View>
    </>
  )
}

export default NotFoundScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#25292e"
      },
      text: {
        color: "white",
        textAlign: "center",
      }
});