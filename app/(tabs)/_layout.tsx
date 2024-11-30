// Import
import { Tabs } from "expo-router";
import "../../global.css";
import { Ionicons } from "@expo/vector-icons"; // NOTE: We can use the Ionicons Component to render different types of icons --> The Icons are selected through the "name" prop by passing the corresponding value --> We add the <Ionicons> Component as part of the arrow function to the "tabBarIcon" property in the "options" object --> The arrow function accetps two desctructured paramters 1.focused and 2.color that we can use to dynamically render different styles of the icon

export default function TabsLayout() {

  // Options Objects --> NOTE: We can declare and define the objects outside the component's "options" prop like we have here, or we can create the object inside it (Developer Preference)
  const indexOptions: {[variant: string]: any} = {
    title: "Home",
    headerTitle: "Sticker Smash",
    tabBarIcon: ({focused, color}:{focused: boolean; color: string})=> <Ionicons name={focused ? "home-sharp" : "home-outline"} size={24} color={color}/>
  };
  const aboutOptions: {[variant: string]: string | any} = {
    title: "About Screen",
    tabBarIcon: ({focused, color}:{focused: boolean; color: string})=> <Ionicons name={focused ? "information-circle" : "information-circle"} size={24} color={color}/>
  };
  const servicesOptions: {[variant: string]: string | any} = {
    title: "Services Screen",
    // headerLeft: ()=> <></>, //NOTE: We don't need this once we assign "headerShown: false" on the options object of the app/_layout.tsx file's (tabs) screen component
    tabBarIcon: ({focused, color}:{focused: boolean; color: string})=> <Ionicons name={focused ? "server-sharp" : "server-outline"} size={24} color={color}/>
  };

    // NOTE: This is the "options" object we are passing to the <Tabs> Component, which is the Parent Component of the <Tabs.Screen> Components    
    const tabsScreenOptions = {
        tabBarActiveTintColor: "gold",
        headerStyle: {
            backgroundColor: "#202978",
        },
        headerShadowVisible: false,
        headerTintColor: "#ffffff",
        tabBarStyle: {
            backgroundColor: "#202978",
        },
    };

  return (
    <Tabs
    screenOptions={tabsScreenOptions}
    >
      <Tabs.Screen name="index" options={indexOptions}/>
      <Tabs.Screen name="about" options={aboutOptions}/>
      <Tabs.Screen name="services" options={servicesOptions}/>
    </Tabs>
  );
}