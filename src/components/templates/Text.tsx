import React, {PropsWithChildren} from 'react';
import {Text as RNText, StyleProp, TextStyle} from 'react-native';
import colors from '@app/contants/colors';

const FONT_FAMILIES = {
  bold: 'Poppins-Bold',
  light: 'Poppins-Light',
  medium: 'Poppins-Medium',
  regular: 'Poppins-Regular',
  semibold: 'Poppins-SemiBold',
  thin: 'Poppins-Thin',
};

const FONT_SIZE = {
  xl: 24,
  lg: 20,
  md: 16,
  sm: 14,
  xs: 12,
  xxs: 10,
};

export type TextColorTypes =
  | 'primary'
  | 'secondary'
  | 'label'
  | 'white'
  | 'black'
  | 'active'
  | 'menu'
  | 'green';

export type TextSizeTypes = 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs';
export type TextWeightTypes =
  | 'bold'
  | 'light'
  | 'medium'
  | 'regular'
  | 'semibold'
  | 'thin';

export type TextPropsType = PropsWithChildren<{
  color?: TextColorTypes;
  size?: TextSizeTypes;
  weight?: TextWeightTypes;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
  align?: 'left' | 'center' | 'right';
  lineHeight?: number;
  underline?: boolean;
  uppercase?: boolean;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
}>;

const Text = (props: TextPropsType) => {
  const style = {
    color: props.color ? colors.text[props.color] : colors.text.label,
    fontFamily: props.weight
      ? FONT_FAMILIES[props.weight]
      : FONT_FAMILIES.regular,
    fontSize: props.size ? FONT_SIZE[props.size] : FONT_SIZE.sm,
    marginTop: props.mt ?? 0,
    marginLeft: props.ml ?? 0,
    marginRight: props.mr ?? 0,
    marginBottom: props.mb ?? 0,
    paddingTop: props.pt ?? 0,
    paddingBottom: props.pb ?? 0,
    paddingRight: props.pr ?? 0,
    paddingLeft: props.pl ?? 0,
    textAlign: props.align ?? 'left',
    lineHeight: props.lineHeight
      ? props.lineHeight
      : props.size
      ? FONT_SIZE[props.size]
      : FONT_SIZE.md,
    textDecorationLine: props.underline ? 'underline' : 'none',
    textDecorationStyle: 'solid',
    textDecorationColor: props.color
      ? colors.text[props.color]
      : colors.text.label,
    textTransform: props.uppercase ? 'uppercase' : 'none',
    ...props?.style,
  };
  return (
    <RNText style={style} numberOfLines={props.numberOfLines}>
      {props.children}
    </RNText>
  );
};

export default Text;
