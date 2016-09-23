import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView
} from 'react-native';
import BlogCard from './BlogCard';
import { Actions } from 'react-native-router-flux';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          {React.cloneElement(this.props.children, { ...props })}
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scroll: {
    flex: 1,
    backgroundColor: '#eee'
  }
})