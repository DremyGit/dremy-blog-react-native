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

  constructor(props) {
    super(props);
    this.state = {
      tags: []
    }
  }
  componentDidMount() {
    fetch(`https://dremy.cn/api/tags`).then(res => res.json()).then(data => {
      this.max = data.reduce((max, next) => next.count < max ? max : next.count, 0);
      this.min = data.reduce((min, next) => next.count > min ? min : next.count, this.max);
      this.setState({tags: data})
    })
  }

  render() {
    const { tags } = this.props;
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          {this.state.tags.map(tag =>
            <Tag title={tag.name} key={tag.code} fontSize={this.getFontSize(tag.count)} />
          )}
        </View>
      </ScrollView>
    );
  }

  getFontSize(count) {
    return 14 + Math.log(count - this.min + 1) / Math.log(this.max - this.min + 1) * (24 - 14)
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
