import React, {useState} from 'react';
import {Input} from '@rneui/base';
import colors from '@app/contants/colors';

const TextInput = ({
  inputContainerStyle,
  inputStyle,
  onFocus,
  onBlur,
  ...props
}: any) => {
  const [isFocused, setFocused] = useState(false);
  return (
    <Input
      onFocus={() => {
        setFocused(true);
        onFocus && onFocus();
      }}
      onBlur={() => {
        setFocused(false);
        onBlur && onBlur();
      }}
      placeholderTextColor={colors.text.label}
      inputStyle={{
        color: props.color ? props.color : colors.text.primary,
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        ...inputStyle,
      }}
      inputContainerStyle={{
        borderColor: isFocused ? colors.activeBorderColor : colors.borderColor,
        borderBottomWidth: 2,
        ...inputContainerStyle,
      }}
      {...props}
    />
  );
};

export default TextInput;
