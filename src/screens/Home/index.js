import React from "react";
import { Button } from "react-native";
import { HomeScreenContainer, Text } from "./styles";

const Home = ({ navigation }) => {
   return(
    <HomeScreenContainer>
      <Text>Home</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </HomeScreenContainer>
    )
}

export default Home;