import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import BlogCard from './BlogCard';
import { Actions } from 'react-native-router-flux';

export default class HomeScene extends Component {

  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    }
  }
  componentDidMount() {
    fetch(`https://dremy.cn/api/blogs`).then(res => res.json()).then(data => {
      this.setState({blogs: data})
    })
  }
  render() {
    return (
      <ScrollView style={styles.scroll}>
        {this.state.blogs.map(blog =>
          <BlogCard blog={blog} key={blog._id} />
        )}
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
