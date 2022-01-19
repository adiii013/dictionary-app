import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "./src/SearchScreen";


const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="search">
        <Stack.Screen name="search" component={SearchScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;