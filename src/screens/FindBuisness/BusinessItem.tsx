import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Container, Text, ImageWithPlaceholder} from '@app/components/templates';
import {MstCompanyDtoType} from '@app/generated/graphql-types';
import colors from '@app/contants/colors';
import {Rating} from 'react-native-ratings';
import {IMAGE_PREFIX} from '@env';
import moment from 'moment';

type BusinessItemPropsType = {
  item: MstCompanyDtoType;
  onPressItem: () => void;
};

const BusinessItem = ({item, onPressItem}: BusinessItemPropsType) => {
  return (
    <TouchableOpacity onPress={onPressItem}>
      <Container
        pt={15}
        pb={15}
        key={item.companyId}
        style={{
          borderBottomColor: colors.borderColorFade,
          borderBottomWidth: 2,
        }}>
        <Container dir="row">
          <ImageWithPlaceholder
            source={{uri: `${IMAGE_PREFIX}${item.logoPath}`}}
            style={styles.companyLogo}
            resizeMode={'contain'}
          />
          <Container ml={10}>
            <Text color="primary" weight="medium">
              {item.companyName}
            </Text>
            <Text mt={10}>
              Estd:{' '}
              <Text color="primary">
                {moment(item.joinDate).format('DD-MMM-Y')}
              </Text>
            </Text>
            <Text mt={10}>
              District: <Text color="primary">{item.compProvinceName}</Text>
            </Text>
            <Container dir="row" alignItems="center" mt={10}>
              <Rating imageSize={20} readonly startingValue={4} />
            </Container>
          </Container>
        </Container>
      </Container>
    </TouchableOpacity>
  );
};

export default BusinessItem;

const styles = StyleSheet.create({
  companyLogo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  modalContentStyle: {},
  borderBottom: {
    borderBottomColor: colors.borderColorFade,
    borderBottomWidth: 2,
  },
});
