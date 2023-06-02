import React from "react";
import Home from "@screens/Home";
import LoginScreen from "@screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MainContainer = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainContainer;