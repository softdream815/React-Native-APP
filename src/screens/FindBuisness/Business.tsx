import React, {useState} from 'react';
import {
  StyleSheet,
  Pressable,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {
  Container,
  Text,
  ImageWithPlaceholder,
  GradientButton,
  RatingForm,
} from '@app/components/templates';
import colors from '@app/contants/colors';
import {BusinessScreenProps} from '@app/navigation/FindBuisnessStack';
import {IMAGE_PREFIX} from '@env';
import moment from 'moment';
import SpecialProducts from '@app/screens/HomeScreens/SpecialProductsList';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {useGetMagazines} from '@app/hooks/useGetMagazines';
import CreateEnquiryModal from './CreateEnquiryModal';

const Business = ({route}: BusinessScreenProps) => {
  const business = route.params.business;
  const {magazines} = useGetMagazines({
    companyId: business.companyId.toString(),
  });
  const [showEnquiry, setShowEnquiry] = useState(false);
  const _onPressAllSpeical = () => {};

  const renderMagazinItem = ({item}: any) => {
    const uploads = item.mapEflyersUploadDtos;
    const imageURL = uploads.length === 0 ? '' : uploads[0].documentName;
    return (
      <TouchableOpacity>
        <Container mr={10}>
          <ImageWithPlaceholder
            source={{uri: `${IMAGE_PREFIX}${imageURL}`}}
            style={{width: 140, height: 180}}
            resizeMode={'contain'}
          />
          <Text
            color="primary"
            size="sm"
            lineHeight={18}
            style={{width: 140}}
            numberOfLines={1}>
            {item.magazineName}
          </Text>
          <Text lineHeight={14} size="xs">
            {moment(item.startDate).format('DD MMM Y')}
          </Text>
        </Container>
      </TouchableOpacity>
    );
  };
  return (
    <Container flex={1} backgroundColor={colors.appBackgroundColor}>
      <Container pl={20} pr={20} pt={16} style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageWithPlaceholder
            source={{uri: `${IMAGE_PREFIX}${business.logoPath}`}}
            style={styles.companyLogo}
            resizeMode={'contain'}
          />
          <Container mt={20}>
            <Text size="md" weight="medium" color="primary" lineHeight={20}>
              {business.companyName}
            </Text>
            <Container dir="row" mt={10}>
              <Text>Address:</Text>
              <Text ml={10} color="primary" style={{width: 300}}>
                {`${business.compStreetAddress}, ${business.compSuburb}, ${business.compCityName}, ${business.compProvinceName}, ${business.compCountryName}`}
              </Text>
            </Container>
            <Container dir="row" mt={10}>
              <Text>Registered Data:</Text>
              <Text ml={10} color="primary">
                {moment(business.joinDate).format('DD-MMM-Y')}
              </Text>
            </Container>
            <Container dir="row" mt={10}>
              <Text>Status: </Text>
              <Text ml={10} color="green">
                {business.companyStatus}
              </Text>
            </Container>
          </Container>
          <Container mt={20}>
            <Text color="primary" weight="medium" size="md" lineHeight={20}>
              Contact Information
            </Text>
            <Container mt={10} dir="row">
              <Text>Phone:</Text>
              <Text ml={10} color="primary">
                {business.compPhone === '' ? 'None' : business.compPhone}
              </Text>
            </Container>
            <Container mt={10} dir="row">
              <Text>Website:</Text>
              <Text ml={10} color="primary">
                {business.compWebSite === '' ? 'None' : business.compWebSite}
              </Text>
            </Container>
            <Container mt={10} dir="row">
              <Text>Email:</Text>
              <Text ml={10} color="primary">
                {business.compEmailId === '' ? 'None' : business.compEmailId}
              </Text>
            </Container>
            <Container mt={10} dir="row">
              <Text>Help Desk:</Text>
              <Text ml={10} color="primary">
                {business.compHelpDeskNumber === ''
                  ? 'None'
                  : business.compHelpDeskNumber}
              </Text>
            </Container>
          </Container>
          <Container mt={20}>
            <Container
              dir="row"
              alignItems="center"
              justifyContent="space-between">
              <Text color="primary" weight="medium">
                Special Products
              </Text>
              <Pressable style={styles.moreButton} onPress={_onPressAllSpeical}>
                <Text color="active" weight="medium">
                  Explore All
                </Text>
                <MaterialIcon
                  name="arrow-right-alt"
                  size={24}
                  color={colors.text.active}
                />
              </Pressable>
            </Container>
            <Container mt={10} ml={-5}>
              <SpecialProducts companyId={business.companyId} />
            </Container>
          </Container>
          <Container mt={20} style={styles.card}>
            <Container
              pt={12}
              pb={12}
              pl={10}
              pr={10}
              backgroundColor={colors.borderColorFade}
              ml={-1}
              mr={-1}
              style={styles.cardHeader}>
              <Text color="primary" weight="medium">
                Magazines
              </Text>
            </Container>
            <Container
              pt={10}
              pb={10}
              pl={10}
              pr={10}
              backgroundColor="transparent">
              {magazines.length === 0 ? (
                <Text>No Companies Selected</Text>
              ) : (
                <Container>
                  <FlatList
                    data={magazines}
                    renderItem={renderMagazinItem}
                    horizontal
                  />
                </Container>
              )}
            </Container>
          </Container>
          <Container
            backgroundColor={colors.borderColorFade}
            mt={20}
            pt={10}
            pb={10}
            pl={10}
            pr={10}
            style={{
              borderRadius: 10,
            }}>
            <Container
              pt={10}
              pb={15}
              pl={5}
              pr={5}
              backgroundColor="white"
              style={{
                borderRadius: 10,
                borderColor: colors.borderColor,
                borderWidth: 1,
                borderStyle: 'dashed',
              }}>
              <RatingForm type={2} data={business} />
            </Container>
          </Container>

          <Container mt={20} mb={40} pl={20} pr={20}>
            <GradientButton
              title="Enquiry Now"
              onPress={() => setShowEnquiry(true)}
            />
          </Container>
        </ScrollView>
      </Container>
      <CreateEnquiryModal
        show={showEnquiry}
        onClose={() => setShowEnquiry(false)}
        companyId={business?.companyId}
      />
    </Container>
  );
};

export default Business;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
  },
  companyLogo: {
    width: '100%',
    height: 200,
  },
  moreButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 10,
    overflow: 'hidden',
    borderTopWidth: 0,
  },
  cardHeader: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  cardFooter: {
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 10,
  },
});
