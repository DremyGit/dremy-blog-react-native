import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const Tag = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {}}
      activeOpacity={0.3}
    >
      <Text style={[{fontSize: props.fontSize || 12}, styles.tagText]}>{props.title}</Text>
    </TouchableOpacity>
    )
}

export default class TagScene extends Component {
  render() {
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Tag title="React.js" fontSize={16} />
          <Tag title="JavaScript" fontSize={24} />
          <Tag title="函数式编程" fontSize={16} />
          <Tag title="JavaScript" fontSize={30} />
          <Tag title="Node.js" fontSize={12} />
          <Tag title="HTTP" fontSize={18} />
          <Tag title="NPM" fontSize={12} />
          <Tag title="函数式编程" fontSize={16} />
          <Tag title="Node.js" fontSize={12} />
          <Tag title="HTTP" fontSize={18} />
          <Tag title="NPM" fontSize={12} />
          <Tag title="函数式编程" fontSize={16} />
          <Tag title="NPM" fontSize={12} />
          <Tag title="Node.js" fontSize={12} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#eee'
  },
  container: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 4,
    elevation: 2,
    margin: 8,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  tagText: {
    paddingVertical: 8,
    paddingHorizontal: 0,
    marginHorizontal: 4
  }
})
