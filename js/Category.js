import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import BlogCard from './BlogCard';
import { Actions } from 'react-native-router-flux';

export default class Category extends Component {
  render() {
    return (
      <ScrollView style={styles.scroll}>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#eee'
  }
})
