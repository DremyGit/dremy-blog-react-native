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
    const ds = new ListView.DataSource({rowHasChanged: () => true});
    this.state = {
      menuItems: [
        {name: '主页', key: 'home', icon: require('../images/ic_home.png'), isActive: true},
        {name: '分类', key: 'category', icon: require('../images/ic_dashboard.png')},
        {name: '标签', key: 'tag', icon: require('../images/ic_label.png')},
        {name: '收藏', key: 'favorite', icon: require('../images/ic_favorite.png')},
        {name: '关于', key: 'about', icon: require('../images/ic_info.png')},
      ],
      dataSource: ds
    }
  }

  componentDidMount(){
    this.setState({
      dataSource:this.state.dataSource.cloneWithRows(this.state.menuItems)
    })
  }

  onMenuItemPress(rowId) {
    const newItems = this.state.menuItems.slice();
    newItems.forEach((item, i) => newItems[i].isActive = rowId == i);
    //setTimeout(() => Actions.refresh({key: 'drawer', open: value => false }), 10);
    setTimeout(() => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(newItems)
      });
      Actions[this.state.menuItems[rowId].key]();
      Actions.refresh({key: 'drawer', open: value => false })
    }, 300);
  }

  render() {
    const MenuItem = (props) => {
      return (
        <TouchableNativeFeedback
          onPress={() => this.onMenuItemPress(props.rowId)}
          delayPressIn={0}
          background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={[styles.menuItem, props.item.isActive && styles.activeItem]}>
            <Image source={props.item.icon} style={styles.menuIcon} />
            <Text style={[styles.menuItemText, props.item.isActive && styles.activeText]}>{props.item.name}</Text>
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
            renderRow={(rowData, sectionId, rowId) => <MenuItem item={rowData} rowId={rowId}/>}
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
