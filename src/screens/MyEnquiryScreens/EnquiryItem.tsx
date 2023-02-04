import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import {
  Container,
  Text,
  ImageWithPlaceholder,
  Modal,
  GradientButton,
} from '@app/components/templates';
import {MstCustomerEnquiryType} from '@app/generated/graphql-types';
import colors from '@app/contants/colors';
import {Rating} from 'react-native-ratings';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {IMAGE_PREFIX} from '@env';

type EnquiryItemPropsType = {
  item: MstCustomerEnquiryType;
};

const EnquiryItem = ({item}: EnquiryItemPropsType) => {
  const [show, setShow] = useState(false);

  return (
    <Container
      pt={15}
      pb={15}
      key={item.customerEnquiryId}
      style={{
        borderBottomColor: colors.borderColorFade,
        borderBottomWidth: 2,
      }}>
      <Container dir="row">
        <ImageWithPlaceholder
          source={{uri: `${IMAGE_PREFIX}${item.mstCompanyLimited?.logoPath}`}}
          style={styles.companyLogo}
          resizeMode={'contain'}
        />
        <Container ml={10}>
          <Text color="primary" weight="medium">
            {item.mstCompanyLimited?.companyName}
          </Text>
          <Text mt={10}>
            Estd: <Text color="primary">{item.enquiryDate}</Text>
          </Text>
          <Text mt={10}>
            District: <Text color="primary">{item.enquiryTitle}</Text>
          </Text>
          <Container dir="row" alignItems="center" mt={10}>
            <Rating imageSize={20} readonly startingValue={4} />
          </Container>
        </Container>
      </Container>
      <Container dir="row" justifyContent="space-between" mt={20}>
        <TouchableOpacity onPress={() => setShow(true)}>
          <Container dir="row" alignItems="center" justifyContent="center">
            <Text color="active" weight="medium">
              View Enquiry
            </Text>
            <MIcon
              name="arrow-right-alt"
              color={colors.text.active}
              size={24}
            />
          </Container>
        </TouchableOpacity>
        <TouchableOpacity>
          <Container dir="row" alignItems="center" justifyContent="center">
            <Text color="active" weight="medium">
              View Details
            </Text>
            <MIcon
              name="arrow-right-alt"
              color={colors.text.active}
              size={24}
            />
          </Container>
        </TouchableOpacity>
      </Container>
      <Modal
        visible={show}
        bottomModal
        contentStyle={styles.modalContentStyle}
        onBackButtonPress={() => setShow(false)}
        onBackdropPress={() => setShow(false)}>
        <SafeAreaView>
          <Container
            dir="row"
            pt={20}
            pb={10}
            pr={10}
            pl={10}
            alignItems="center"
            justifyContent="space-between"
            style={styles.borderBottom}>
            <Text color="primary" weight="medium" size="lg" lineHeight={24}>
              Enquiry
            </Text>
            <TouchableOpacity onPress={() => setShow(false)}>
              <MIcon name="close" color={colors.text.primary} size={32} />
            </TouchableOpacity>
          </Container>
          <Container
            pt={20}
            pr={10}
            pl={10}
            pb={20}
            style={styles.borderBottom}>
            <Text>Enquriy Title</Text>
            <Text mt={15} ml={20} color="primary" size="md" lineHeight={20}>
              {item.enquiryTitle}
            </Text>
          </Container>
          <Container
            pt={20}
            pr={10}
            pl={10}
            pb={20}
            style={styles.borderBottom}>
            <Text>Enquiry Description</Text>
            <Text mt={15} ml={20} color="primary" size="md" lineHeight={24}>
              {item.enquiryDescription}
            </Text>
          </Container>
          <Container pr={10} pl={10} pt={20} pb={20}>
            <GradientButton title="Delete Enquiry" />
          </Container>
        </SafeAreaView>
      </Modal>
    </Container>
  );
};

export default EnquiryItem;

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
