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

const MenuItem = (props) => {
  console.log(props.rowId);
  return (
  <TouchableNativeFeedback
        onPress={() => {}}
        background={TouchableNativeFeedback.SelectableBackground()}>
      <View style={[styles.menuItem, props.isActive && styles.activeItem]}>
        <Image source={props.item.icon} style={styles.menuIcon} />
        <Text style={[styles.menuItemText, props.isActive && styles.activeText]}>{props.item.name}</Text>
      </View>
    </TouchableNativeFeedback>
  )
}

export default class ControlPanel extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.name !== r2.name});

    this.state = {
      dataSource: ds.cloneWithRows([
        {name: '主页', icon: require('../images/ic_home.png')},
        {name: '分类', icon: require('../images/ic_dashboard.png')},
        {name: '标签', icon: require('../images/ic_label.png')},
        {name: '收藏', icon: require('../images/ic_favorite.png')},
        {name: '关于', icon: require('../images/ic_info.png')},
      ]),
      activeItem: 0
    }
  }

  render() {
    return (

      <ScrollView style={styles.container}>
        <Image style={styles.top} source={require('../images/blue-grey-wallpaper.jpg')}>
          <Text style={styles.logo}>Dremy_Blog</Text>
        </Image>
        <View style={styles.menu}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData, sectionId, rowId) => <MenuItem item={rowData} isActive={rowId == 0}/>}
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
