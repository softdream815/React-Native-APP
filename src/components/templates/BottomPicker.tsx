import React from 'react';
import {TextInputProps, StyleSheet} from 'react-native';
import Container from './Container';
import Text from './Text';
import RNPickerSelect from 'react-native-picker-select';
import colors from '@app/contants/colors';
import Icon from 'react-native-vector-icons/Feather';

export type BottomPickerDataType = {
  label: string;
  value: any;
};

export type BottomPickerPropsType = {
  ref?: any;
  label?: string;
  placeholder?: string;
  value?: any;
  onChange: (value: any, index: number) => void;
  data: BottomPickerDataType[];
  textInputProps?: TextInputProps;
  style?: Object;
  disabled?: boolean;
};

const BottomPicker = ({
  ref,
  label,
  value,
  onChange,
  data,
  textInputProps,
  placeholder,
  style,
  disabled,
}: BottomPickerPropsType) => {
  return (
    <Container mb={20} backgroundColor="transparent">
      {label && (
        <Text size="sm" mb={5} lineHeight={20}>
          {label}
        </Text>
      )}
      <RNPickerSelect
        ref={ref}
        value={value}
        onValueChange={onChange}
        items={data}
        textInputProps={textInputProps}
        placeholder={{label: placeholder, value: null}}
        Icon={() => <Icon name="chevron-down" size={24} />}
        style={{
          iconContainer: {
            bottom: 10,
            right: 5,
          },
          inputIOS: {...styles.inputiOS, ...style},
          inputAndroid: {...styles.inputAndroid, ...style},
          placeholder: {
            color: colors.text.label,
          },
        }}
        disabled={disabled}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  inputiOS: {
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 2,
    paddingVertical: 10,
    fontFamily: 'Poppins-Regular',
    color: colors.text.primary,
    fontSize: 16,
    paddingRight: 25,
  },
  inputAndroid: {
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 2,
    paddingVertical: 10,
    fontFamily: 'Poppins-Regular',
    color: colors.text.primary,
    fontSize: 16,
    paddingRight: 25,
  },
});

export default BottomPicker;
