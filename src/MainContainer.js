import React from "react";
import LoginScreen from "@screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from "react-native";

const Stack = createStackNavigator();

const Login = () => {
    return (
        <View><Text>LoginScreen</Text></View>);
}

const MainContainer = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainContainer;