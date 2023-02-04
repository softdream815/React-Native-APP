import React from 'react';
import {StyleSheet, View, Switch as RNSwitch} from 'react-native';
import Container from './Container';
import Text from './Text';

type SwitchPropsType = {
  title?: string;
  value: boolean;
  onChange?: (value: boolean) => void;
};

const Switch = ({title, value, onChange}: SwitchPropsType) => {
  return (
    <Container dir="row" alignItems="center">
      <RNSwitch
        trackColor={{false: '#767577', true: '#F01D5088'}}
        thumbColor={value ? '#F01D50' : '#f4f3f4'}
        onValueChange={onChange}
        value={value}
      />
      <Text ml={10} color="secondary" weight="medium">
        {title}
      </Text>
    </Container>
  );
};

export default Switch;

const styles = StyleSheet.create({});