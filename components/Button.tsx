// Imports
import { StyleSheet, View, Pressable, Text } from "react-native";
// NOTE: The <Pressable /> Component allows our application to react to pressable events, which is why we would use it for a button (We can use the "onPress" prop to pass a handler function)
import { FontAwesome } from "@expo/vector-icons";


type Props = {
    label: string;
    theme?: "primary";
};

const Button = ({label, theme}: Props) => {

    // Pressable Function
    const handleButtonPress = (): void => {
        alert("You pressed a button.");
    };


  if(theme === "primary"){
    return (
      <View style={[styles.buttonContainer, {borderWidth: 4, borderColor: "gold", borderRadius: 18}]}>
        <Pressable
        style={[styles.button, {backgroundColor: "#ffffff"}]}
        onPress={handleButtonPress}
        >
          <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon}/>
          <Text style={[styles.buttonLabel, {color: "#25292e"}]}>{label}</Text>
        </Pressable>
      </View>
    )
  }


  return (
    <View style={styles.buttonContainer}>
        <Pressable
        style={styles.button}
        onPress={handleButtonPress}
        >
            <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        backgroundColor: "#000000",
        borderRadius: 18,
      },
      button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      },
      buttonLabel: {
        color: '#fff',
        fontSize: 16,
      },
      buttonIcon: {
        paddingRight: 8,
      }
});

export default Button;