import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HomeScreen from './HomeScreen';
import dictionary from './localdb'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HomeScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
  },
});
