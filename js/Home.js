import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='rgba(0, 0, 0, 0.35)'
          translucent={true}
          hidden={false}
          animated={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
})
