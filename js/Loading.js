import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Loading extends Component {

  componentDidMount() {
    setTimeout(() => {
      Actions.main();
    }, 1000)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.center}>
          <Text style={styles.title}>
            {'Dremy\'s Blog'}
          </Text>
          <Text style={styles.url}>
            {'https://dremy.cn'}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#78909c',
  },
  center: {
  },
  title: {
    fontSize: 48,
    textAlign: 'center',
    color: '#fff'
  },
  url: {
    marginTop: 4,
    alignSelf: 'flex-end',
    color: '#fff',
  },
});
