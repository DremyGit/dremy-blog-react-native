import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ListView,
  TouchableNativeFeedback,
  ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';



export default class ControlPanel extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.name !== r2.name});
    this.state = {
      dataSource: ds.cloneWithRows(this.menuItems),
      activeItem: 0
    }
  }
  menuItems = [
        {name: '主页', key: 'home', icon: require('../images/ic_home.png')},
        {name: '分类', key: 'category', icon: require('../images/ic_dashboard.png')},
        {name: '标签', key: 'tag', icon: require('../images/ic_label.png')},
        {name: '收藏', key: 'favorite', icon: require('../images/ic_favorite.png')},
        {name: '关于', key: 'about', icon: require('../images/ic_info.png')},
  ]

  onMenuItemPress(rowId) {
    const i = rowId;
    Actions[this.menuItems[i].key]();
    this.setState({activeItem: rowId});
    setTimeout(() => Actions.refresh({key: 'drawer', open: value => false }), 1000);
  }

  render() {
    const MenuItem = (props) => {
      return (
        <TouchableNativeFeedback
          onPress={() => this.onMenuItemPress(props.rowId)}
          delayPressIn={0}
          background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={[styles.menuItem, props.isActive && styles.activeItem]}>
            <Image source={props.item.icon} style={styles.menuIcon} />
            <Text style={[styles.menuItemText, props.isActive && styles.activeText]}>{props.item.name}</Text>
          </View>
        </TouchableNativeFeedback>
      )
    }
    return (
      <ScrollView style={styles.container}>
        <Image style={styles.top} source={require('../images/blue-grey-wallpaper.jpg')}>
          <Text style={styles.logo}>Dremy_Blog</Text>
        </Image>
        <View style={styles.menu}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData, sectionId, rowId) => <MenuItem item={rowData} rowId={rowId} isActive={rowId == this.state.activeItem}/>}
          />
        </View>
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  top: {
    backgroundColor: '#78909c',
    height: 200,
  },
  logo: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    color: '#fff',
    fontSize: 24,

  },
  menu: {
    flex: 1,
  },
  menuItem: {
    marginTop: 12,
    height: 48,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  activeItem: {
    backgroundColor: '#ccc'
  },
  menuIcon: {
    margin: 16,
    width: 24,
    height: 24,
  },
  menuItemText: {
    fontSize: 16,
    marginLeft: 32
  },
  activeText: {
    color: '#78909c'
  }
});
