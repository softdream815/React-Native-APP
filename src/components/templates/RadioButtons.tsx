import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import RadioButtonRN from 'radio-buttons-react-native';
import colors from '@app/contants/colors';

type RadioButtonsPropsType = {
  data: any[];
  onSelect: (item: any) => void;
  value: any;
};

const RadioButtons = ({data, onSelect, value}: RadioButtonsPropsType) => {
  const index = data.findIndex(d => d.label === value?.label) + 1;

  return (
    <RadioButtonRN
      data={data}
      initial={index}
      activeColor={colors.text.active}
      boxStyle={{borderWidth: 0}}
      textStyle={styles.vehicleItem}
      selectedBtn={onSelect}
    />
  );
};

export default RadioButtons;

const styles = StyleSheet.create({
  vehicleItem: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
})