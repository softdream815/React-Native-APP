import React from 'react';
import {StyleSheet, View, StyleProp, ViewStyle, TouchableOpacity} from 'react-native';
import Text from './Text';
import colors from '@app/contants/colors';
import Icon from 'react-native-vector-icons/Ionicons';

type QuantityInputPropsType = {
  value: number;
  onChange: (value: number) => void;
  style?: StyleProp<ViewStyle>;
}

const QuantityInput = ({value, onChange, style}: QuantityInputPropsType) => {
  const _style = {
    flex: 1,
    height: 35,
    borderRadius: 5,
    borderColor: colors.borderColorFade,
    borderWidth: 1,
    backgroundColor: colors.appBackgroundColor,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 2,
  };

  const onPressPlus = () => {
    onChange(value + 1);
  };

  const onPressMinus = () => {
    if (value > 1) {
      onChange(value - 1);
    }
  };

  return (
    <View style={[_style, style]}>
      <TouchableOpacity style={styles.button} onPress={onPressMinus}>
        <Icon name="remove" color="#ffffff" size={18} />
      </TouchableOpacity>
      <Text color="primary" weight="medium">
        {value}
      </Text>
      <TouchableOpacity style={styles.button}>
        <Icon name="add" color="#ffffff" size={18} onPress={onPressPlus} />
      </TouchableOpacity>
    </View>
  );
};

export default QuantityInput;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 26,
    height: 26,
    borderRadius: 4,
    backgroundColor: '#756569',
  }
})