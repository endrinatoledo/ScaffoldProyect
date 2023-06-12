import React from "react";
import Home from "@screens/Home";
import LoginScreen from "@screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Text } from 'react-native';

const Stack = createStackNavigator();

const MainContainer = () => {
    return (
        // <View >
        //     <Text>
        //         App11124xdfhgfh45
        //     </Text>
        // </View>
        
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainContainer;