import React from 'react';
import {StyleSheet} from 'react-native';
import {MstBusinessUserDtoType} from '@app/generated/graphql-types';
import {Container, Text, ImageWithPlaceholder} from '@app/components/templates';
import colors from '@app/contants/colors';
import {IMAGE_PREFIX} from '@env';

type HireItemPropsType = {
  hireItem: MstBusinessUserDtoType;
};

const HireItem = ({hireItem}: HireItemPropsType) => {
  return (
    <Container
      pl={5}
      pt={5}
      pb={5}
      pr={5}
      mb={10}
      backgroundColor={colors.activeBackgroundColor}
      style={{borderRadius: 10}}>
      <ImageWithPlaceholder
        source={{uri: `${IMAGE_PREFIX}${hireItem.userProfileImage}`}}
        style={{width: '100%', height: 200}}
        resizeMode="contain"
      />
      <Container mt={10} backgroundColor="transparent">
        <Text mt={10}>{hireItem.productName}</Text>
        <Text mt={5}>Price</Text>
        <Text mt={5}>Qty</Text>
        <Container
          dir="row"
          justifyContent="space-between"
          backgroundColor="transparent"
          mt={5}>
          <Text>Start Date</Text>
          <Text>End Date</Text>
        </Container>
        <Container
          alignItems="center"
          pt={5}
          pb={5}
          style={{borderRadius: 5}}
          mt={10}>
          <Text size="md" lineHeight={21}>
            Total Price to Pay
          </Text>
        </Container>
      </Container>
    </Container>
  );
};

export default HireItem;
