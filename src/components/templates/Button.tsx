import React, {PropsWithChildren} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
  ActivityIndicator,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Text, {TextColorTypes, TextSizeTypes, TextWeightTypes} from './Text';
import colors from '@app/contants/colors';

export type ButtonPropTypes = PropsWithChildren<{
  title?: string;
  backgroundColor?: string;
  titleColor?: TextColorTypes;
  titleSize?: TextSizeTypes;
  titleWeight?: TextWeightTypes;
  titleUndeline?: boolean;
  width?: number;
  height?: number;
  onPress?: (event: GestureResponderEvent) => void;
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
  disabled?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
}>;

const Button = (props: ButtonPropTypes) => {
  const style = {
    backgroundColor: props.backgroundColor
      ? props.backgroundColor
      : colors.button.secondary,
    width: props.width || 120,
    height: props.height || 35,
    marginTop: props.mt || 5,
    marginBottom: props.mb || 5,
    marginRight: props.mr || 0,
    marginLeft: props.ml || 0,
  };
  return (
    <TouchableOpacity
      style={[style, styles.buttonContainer, props.style]}
      onPress={props.disabled ? () => {} : props.onPress}
      activeOpacity={props.disabled ? 1 : 0.5}>
      {props.loading && (
        <View style={{marginTop: 10}}>
          <ActivityIndicator />
        </View>
      )}
      {!props.loading && props.children ? (
        props.children
      ) : (
        <Text
          color={props.titleColor || 'active'}
          size={props.titleSize}
          weight={props.titleWeight}
          underline={props.titleUndeline}>
          {props.title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
