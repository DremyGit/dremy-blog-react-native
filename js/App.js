import React, { Component } from 'react';
import {Scene, Router, ActionConst} from 'react-native-router-flux';
import {View, Text, Image} from 'react-native';
import Loading from './Loading';
import Home from './Home';
import SideDrawer from './SideDrawer';
import NavBar from './NavBar';
import { StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class App extends Component {

  render() {
    return (
      <Router key='mainrouter' name='router'>
        <Scene key="drawer" component={SideDrawer} >
          <Scene key="loading" component={Loading} hideNavBar={true}/>
          <Scene key="main"
            navigationBarStyle={styles.navigation} 
            titleStyle={styles.title}
            leftButtonIconStyle={styles.navButtonIcon}
            leftButtonStyle={styles.navButton}
            leftButtonImage={require('../images/ic_menu.png')}
            onLeft={() => Actions.refresh({key: 'drawer', open: value => !value })}
            rightButtonIconStyle={styles.navButtonIcon}
            rightButtonStyle={styles.navButton}
            rightButtonImage={require('../images/ic_search.png')}
            onRight={() => {}}
            style={styles.main}
            type={ActionConst.REPLACE} 
          >
            <Scene key="home" component={Home} title="Dremy_博客" hideNavBar={false}/>
          </Scene>
        </Scene>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'left',
    paddingLeft: 64,
    marginTop: 32,
    color: '#fff',
  },
  navigation: {
    backgroundColor: '#78909c',
    paddingTop: 24,
    height: 78
  },
  navButtonIcon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  navButton: {
    marginTop: 24,
    padding: 15,
  },
  main: {
    paddingTop: 78,
    backgroundColor: '#888'
  }
});
