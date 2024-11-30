// Imports
import { View, StyleSheet } from "react-native";
// import { Link } from "expo-router"; // NOTE: The <Link> Component from expo-router can be used to navigate between Screens
import { bgImage } from "@/assets";
// Components
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";

export default function Index() {

  // Button Label
  const buttonLabelOne: string = "Choose a photo";
  const buttonLabelTwo: string = "Use this photo";

  return (
    // We can use the "style" prop to pass the styles object we create using the StyleSheet namespace for CSS styling --> NOTE: We can also use NativeWind, which allows us to use Tailwind CSS (We would have to youse Utility Classes with the "className" prop)
    <View style={styles.container} className="px-5">
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={bgImage}/>
      </View>

      <View style={styles.footerContainer}>
        <Button label={buttonLabelOne} theme="primary"/>
        <Button label={buttonLabelTwo} />
      </View>
    </View>
  );
}

// We can use the StyleSheet namespace to create an object that can have multiple objects containing CSS properties in JavaScript format --> NOTE: Use Intellisense to help out when writing the property keys and values
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#202978"
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
    gap: 10,
  }
});