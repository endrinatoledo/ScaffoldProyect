import React from 'react';
import Home from '@components/Home';
import { client } from '../apollo-client';
import MainContainer from './MainContainer';
import { StatusBar } from 'expo-status-bar';
import { ApolloProvider } from '@apollo/client';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        {/* <Home /> */}
        <MainContainer />
        <StatusBar style="auto" />
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
