// Imports
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "../global.css";

// This is the ENTRY POINT to our application --> NOTE: We MUST have a <Stack></Stack> Component Parent that will encapsulate ALL the Screens/Routes we will have in our application (NOTE: Similar to how we use <Routes></Routes> as Parent Component encapsulating individual <Route> that redirect to Components/Screns) --> NOTE: We can include the "Screen" property to assign the "Stack" componnent as a screen and gain access to giving it its "name" prop (value set to the name of the component) and the "options" prop
export default function RootLayout() {

  // Options Objects --> NOTE: We can declare and define the objects outside the component's "options" prop like we have here, or we can create the object inside it (Developer Preference)
  const indexOptions: {[variant: string]: string | (()=> React.ReactNode) | boolean} = {
      headerShown: false,
  };

  return (
    <> 
    {/* NOTE: We can change the style of the mobile device's status bar (Include: Time, Network, Battery Life) by using the <StatusBar /> Component */}
      <StatusBar style="dark"/>
      <Stack>
        <Stack.Screen name="(tabs)" options={indexOptions}/>

        {/* NOTE: Leave the Error Component in the RootLayout --> This way, when user goes to non-existent URL Path the (tabs) holding links to the Screens WILL NOT appear  */}
        <Stack.Screen name="+not-found" options={{}}/>
      </Stack>
    </>
    
  );
}
