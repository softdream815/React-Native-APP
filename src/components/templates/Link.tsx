import React from 'react';
import {Linking} from 'react-native';
import Button, {ButtonPropTypes} from './Button';

export type LinkPropTypes = ButtonPropTypes & {
  link: string;
};

const Link = (props: LinkPropTypes) => {
  const _onPress = () => {
    Linking.openURL(props.link);
  };
  return (
    <Button
      {...props}
      onPress={_onPress}
      backgroundColor="transparent"
      titleUndeline={
        props.titleUndeline === undefined ? true : props.titleUndeline
      }
    />
  );
};

export default Link;
