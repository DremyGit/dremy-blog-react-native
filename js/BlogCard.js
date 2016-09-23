import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class BlogCard extends Component {
  render() {
    return (
      <View style={styles.card}>
        <View style={styles.image} />
        <View style={styles.textArea}>
          <TouchableOpacity
            onPress={() => {}}
            activeOpacity={0.3}
          >
            <Text style={styles.title}>MongoDB在Node.js中的运用</Text>
          </TouchableOpacity>
          <View style={styles.subtitle}>
            <Text style={styles.date}>Jun 16, 2016</Text>
            <Text style={styles.tag}>MongoDB</Text>
            <Text style={styles.tag}>Node.js</Text>
          </View>
        </View>
        <View style={styles.control}>
          <TouchableNativeFeedback
            onPress={() => {console.log('Press')}}
            delayPressIn={0}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>查看全文</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    elevation: 3,
    margin: 8,
    borderRadius: 4,
  },
  image: {
    height: 240,
    backgroundColor: '#78909c',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  textArea: {
    padding: 16
  },
  title: {
    fontSize: 24,
  },
  subtitle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  date: {
    fontSize: 14,
    marginRight: 12,
    color: '#999'
  },
  tag: {
    textAlign: 'center',
    fontSize: 12,
    backgroundColor: '#eee',
    margin: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    color: '#999',
  },
  control: {
    padding: 8,
    flex: 1,
    flexDirection: 'row'
  },
  button: {
    padding: 8,
    borderRadius: 4
  },
  buttonText: {
    color: '#78909c'
  }
})
