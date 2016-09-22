import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class NavBar extends Component {


  render() {
    return (
      <View style={styles.navigation}>
        <Text style={styles.title}>Title</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'left',
    paddingLeft: 80,
    color: '#fff'
  },
  navigation: {
    backgroundColor: '#78909c',
    paddingTop: 24,
  }
});
