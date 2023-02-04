import React, {PropsWithChildren} from 'react';
import {StyleSheet} from 'react-native';
import Container, {ContainerProps} from './Container';

export type CardPropTypes = ContainerProps;

const Card = ({
  children,
  style,
  pl,
  pr,
  pb,
  pt,
  ml,
  mt,
  mr,
  mb,
  backgroundColor,
  flex,
  ...props
}: ContainerProps) => {
  const cardStyle = {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
  };
  return (
    <Container
      {...props}
      style={[cardStyle, style]}
      flex={flex || 1}
      pl={pl || 15}
      pr={pr || 15}
      pt={pt || 15}
      pb={pb || 15}
      ml={ml === undefined ? 10 : ml}
      mr={mr === undefined ? 10 : mr}
      mt={mt === undefined ? 10 : mt}
      mb={mb === undefined ? 10 : mb}
      backgroundColor={backgroundColor || '#fff'}>
      {children}
    </Container>
  );
};

export default Card;

const styles = StyleSheet.create({});
