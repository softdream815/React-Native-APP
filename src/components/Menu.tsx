import React, {Component} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {textHeader} from '../contants/styles';
import BurgerMenu from '@app/assets/svgs/Navigations/BurgerMenu';

export default class Meun extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigationProps.openDrawer();
        }}
        style={{...textHeader.leftIcon, ...this.props.style}}>
        <BurgerMenu />
      </TouchableOpacity>
    );
  }
}
