import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Drawer from 'react-native-drawer';
import ControlPanel from './ControlPanel';
import { Actions, DefaultRenderer } from 'react-native-router-flux';

export default class SideDrawer extends Component {


  render () {
    const state = this.props.navigationState;
    const children = state.children;
    return (
      <Drawer
        ref="navigation"
        open={state.open}
        onOpen={()=>Actions.refresh({key:state.key, open: true})}
        onClose={()=>Actions.refresh({key:state.key, open: false})}
        type="displace"
        content={<ControlPanel />}
        tapToClose={true}
        styles={drawerStyles}
        captureGestures={true}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        negotiatePan={true}
        tweenHandler={(ratio) => ({
        mainOverlay: { opacity: (ratio) / 2},
            })}>
          <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate}/>
      </Drawer>
    )
  }
};
const styles = StyleSheet.create({
  main: {
  },
});
const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 1, shadowRadius: 30},
  main: {paddingLeft: 3},
  mainOverlay: {opacity: 0, backgroundColor: '#000'}
}
