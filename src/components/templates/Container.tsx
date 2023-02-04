import React, {PropsWithChildren} from 'react';
import {View, ViewStyle, StyleProp} from 'react-native';

export type ContainerProps = PropsWithChildren<{
  pt?: number;
  pb?: number;
  pr?: number;
  pl?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  flex?: number;
  dir?: 'row' | 'column';
  style?: StyleProp<ViewStyle>;
  backgroundColor?: string;
}>;

const Container = ({children, style, ...props}: ContainerProps) => {
  const _style = {
    paddingTop: props.pt ?? 0,
    paddingBottom: props.pb ?? 0,
    paddingLeft: props.pl ?? 0,
    paddingRight: props.pr ?? 0,
    marginTop: props.mt ?? 0,
    marginBottom: props.mb ?? 0,
    marginLeft: props.ml ?? 0,
    marginRight: props.mr ?? 0,
    justifyContent: props.justifyContent ?? 'flex-start',
    alignItems: props.alignItems ?? 'stretch',
    flex: props.flex ?? 0,
    flexDirection: props.dir ?? 'column',
    backgroundColor: props.backgroundColor || '#ffffff',
  };

  return <View style={[_style, style]}>{children}</View>;
};

export default Container;
