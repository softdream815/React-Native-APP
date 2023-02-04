import React, {Component} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {textHeader} from '../contants/styles';
import Icon from 'react-native-vector-icons/Ionicons'

export default class HeaderBackLeft extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigationProps.goBack();
        }}
        style={textHeader.leftIcon}>
        <Icon name="chevron-back" size={24} />
      </TouchableOpacity>
    );
  }
}
