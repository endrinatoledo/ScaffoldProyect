import React from "react";
import { Button } from "react-native";
import { LoginScreenContainer, Text } from "./styles";

const LoginScreen = ({ navigation }) => {
    return (
        <LoginScreenContainer>
            <Text>LoginScreen</Text>
            <Button title="Go to Home" onPress={() => navigation.push("Home")} />
        </LoginScreenContainer>
    );
};

export default LoginScreen;