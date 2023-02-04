import React, {PropsWithChildren} from 'react';
import {StyleProp, ViewStyle, GestureResponderEvent} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Text from './Text';
import colors from '@app/contants/colors';
import {Button} from '@rneui/themed';

type GradientButtonProps = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
  title?: string;
  onPress?: (event: GestureResponderEvent) => void;
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
  height?: number;
  disabled?: boolean;
  loading?: boolean;
}>;

const GradientButton = ({
  style,
  onPress,
  title,
  children,
  ...props
}: GradientButtonProps) => {
  const _style = {
    height: props.height ?? 40,
    marginTop: props.mt ?? 0,
    marginBottom: props.mb ?? 0,
    marginRight: props.mr ?? 0,
    marginLeft: props.ml ?? 0,
    borderRadius: 10,
  };
  return (
    <Button
      ViewComponent={LinearGradient} // Don't forget this!
      onPress={onPress}
      linearGradientProps={{
        colors: [colors.button.primary2, colors.button.primary1],
        start: {x: 0, y: 0},
        end: {x: 0, y: 1},
        locations: [0.5, 0],
      }}
      buttonStyle={[
        _style,
        style,
        {alignItems: 'center', justifyContent: 'center'},
      ]}
      title={
        children ? (
          children
        ) : (
          <Text color="white" weight="medium">
            {title}
          </Text>
        )
      }
      disabled={props.disabled || props.loading}
      loading={props.loading}
    />
  );
};

export default GradientButton;
