// Imports
import { StyleSheet, View, Pressable, Text } from "react-native";
// NOTE: The <Pressable /> Component allows our application to react to pressable events, which is why we would use it for a button (We can use the "onPress" prop to pass a handler function)

type Props = {
    label: string;
};

const Button = ({label}: Props) => {

    // Pressable Function
    const handleButtonPress = (): void => {
        alert("You pressed a button.");
    };

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
});

export default Button;