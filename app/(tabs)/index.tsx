// Imports
import { Text, View, StyleSheet } from "react-native";
// import { Link } from "expo-router"; // NOTE: The <Link> Component from expo-router can be used to navigate between Screens

export default function Index() {

  return (
    // We can use the "style" prop to pass the styles object we create using the StyleSheet namespace for CSS styling --> NOTE: We can also use NativeWind, which allows us to use Tailwind CSS (We would have to youse Utility Classes with the "className" prop)
    <View style={styles.container} className="px-5">
      <Text style={styles.heading} className="text-5xl">Home Screen</Text>
    </View>
  );
}

// We can use the StyleSheet namespace to create an object that can have multiple objects containing CSS properties in JavaScript format --> NOTE: Use Intellisense to help out when writing the property keys and values
const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#202978"
  },
  heading: {
    color: "white",
  }
});