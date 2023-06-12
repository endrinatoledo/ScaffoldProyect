import React from 'react';
import { client } from '../apollo-client';
// import MainContainer from './MainContainer';
import MainContainer from './MainContainer';
import { ApolloProvider } from '@apollo/client';
import { StyleSheet, View, Text } from 'react-native';

import Theme from '@themes';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Theme>
        <View style={styles.container}>
          <MainContainer />
          {/* <Text>
            App11124xdfhgfh45
          </Text> */}
        </View>
      </Theme>
        
      {/* </View> */}
      {/* <Theme>
        <View style={styles.container}>
          <MainContainer />
        </View>
      </Theme> */}
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
