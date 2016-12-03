import React, { Component } from 'react';
import {Scene, Router, ActionConst} from 'react-native-router-flux';
import {View, Text, WebView} from 'react-native';

export default class ArticleScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {}
    }
  }
  componentDidMount() {
    fetch(`https://dremy.cn/api/blogs/${this.props.code}`).then(res => res.json()).then(data => {
      this.setState({article: data});
      console.log(data);
    })
  }
  render() {
    const { article } = this.state;
    if (!article.html) {
      return (
        <View>
          <Text>加载中{this.props.code}</Text>
        </View>
      )
    }
    return (
      <WebView source={{html: article.html.body}} />
    )
  }
}
