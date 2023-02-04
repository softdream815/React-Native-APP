import React, {useEffect, useState, useRef, useCallback} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
  SafeAreaView,
  Alert,
} from 'react-native';
import {DeatilScreen} from '@app/navigation/RequestItemStack';
import {
  Container,
  Text,
  TextInput,
  Button,
  ImagePicker,
  Card,
  GradientButton,
  Modal,
  RadioButtons,
} from '@app/components/templates';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DocumentPicker from 'react-native-document-picker';
import QRCodeScanner from 'react-native-qrcode-scanner';
import colors from '@app/contants/colors';
import {useGetMainCategories} from '@app/hooks/useGetMainCategories';
import {useGetVehicles} from '@app/hooks/useGetVehicles';
import {useRequestItem} from './hooks/useRequestItem';
import {useAddVehicleMutation} from './hooks/useAddVehicleMutation';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {useSelector} from 'react-redux';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Capture from '@app/assets/svgs/Capture';
import Upload from '@app/assets/svgs/Upload';
import Scan from '@app/assets/svgs/Scan';
import {RootStateType, UserType} from '@app/types';
import {MstItemRequestVariables} from '@app/generated/graphql-types';
import Loading from '@app/components/Loading';
import ScanLCCode from './ScanLCCode';
import Toast from 'react-native-root-toast';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const fullButtonWidth = windowWidth - 40;

const RequestItemDetail = ({route}: DeatilScreen) => {
  const {category, provinceId, cityId, suburbId } = route.params;
  const {categories} = useGetMainCategories();
  const [fromDate, setFromDate] = useState(moment());
  const [toDate, setToDate] = useState(moment());
  const [openFromDatePicker, setOpenFromDatePicker] = useState(false);
  const [openToDatePicker, setOpenToDatePicker] = useState(false);
  const [productImages, setProductImages] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [documents, setDocuments] = useState([]);
  const [showVehicleSheet, setShowVehicleSheet] = useState(false);
  const [selectedVehicle, selectVehicle] = useState();
  const [loading, setLoading] = useState(false);
  const [scan, setScan] = useState(false);
  const scannerRef = useRef(null);
  const navigation = useNavigation();

  const mainCategory = categories.find(
    cat => cat?.categoryId === category.parentCategoryId,
  );
  const {vehicles, getVehicles} = useGetVehicles();
  const mutation = useRequestItem();
  const addVehicleMutation = useAddVehicleMutation();
  const user: UserType = useSelector((state: RootStateType) => state.user);

  const onSelectProductImages = (imageAssets: any) => {
    setProductImages(prev => [...prev, ...imageAssets]);
  };

  const removeImage = (imageIndex: number) => {
    const _productImages = [...productImages];
    _productImages.splice(imageIndex, 1);
    setProductImages(_productImages);
  };

  const selectFileDoc = async () => {
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [
          DocumentPicker.types.pdf,
          DocumentPicker.types.doc,
          DocumentPicker.types.xls,
          DocumentPicker.types.docx,
        ],
      });
      setDocuments(prev => {
        return [...prev, ...results];
      });
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        console.log(err);
        throw err;
      }
    }
  };

  const getDocumentIcon = (docType: string) => {
    if (docType === 'application/pdf' || docType === DocumentPicker.types.pdf) {
      return 'file-pdf-o';
    }

    if (
      docType ===
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
      docType === 'application/msword' ||
      docType === DocumentPicker.types.docx ||
      docType === DocumentPicker.types.doc
    ) {
      return 'file-word-o';
    }

    if (
      docType === 'application/vnd.ms-excel' ||
      docType === DocumentPicker.types.xls ||
      docType === DocumentPicker.types.xlsx ||
      docType ===
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ) {
      return 'file-excel-o';
    }

    return '';
  };

  const removeDocument = (docIndex: number) => {
    const _documents = [...documents];
    _documents.splice(docIndex, 1);
    setDocuments(_documents);
  };

  useEffect(() => {
    if (selectedVehicle) {
      let dataofvehicle = `Engine Number - ${selectedVehicle.engineNumber}\nVehicle Reg Number - ${selectedVehicle.registrationNumber}\nMake -  ${selectedVehicle.make}\nVIN - ${selectedVehicle.vIN}\nDescription - ${selectedVehicle.description}\nDate Of expiry - ${selectedVehicle.dateOfExpiry}`;
      setItemDescription(dataofvehicle);
    }
  }, [selectedVehicle]);

  const onScanQRCode = useCallback(async e => {
    const string = e.data;
    const vehicleData = string.split('%');
    if (vehicleData[14] === undefined) {
      Alert.alert('Error', 'Please try to use other licenses!', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Scan Again', onPress: () => scannerRef.current?.reactivate()},
      ]);
      // scannerRef.current?.reactivate();
      return;
    }
    if (user.isGuest) {
      navigation.navigate('AuthStack', {screen: 'Login'});
      return;
    }
    const vehicle = {
      registrationNumber: vehicleData[7],
      desc: vehicleData[8],
      engineNumber: vehicleData[13],
      date: new Date(),
      dateOfExpiry: moment(vehicleData[14]).toDate(),
      vin: vehicleData[12],
      make: vehicleData[9],
      vehicleID: Number(vehicleData[2]),
      userId: Number(user.id),
    };
    let dataofvehicle = `Engine Number - ${vehicle.engineNumber}\nVehicle Reg Number - ${vehicle.registrationNumber}\nMake -  ${vehicle.make}\nVIN - ${vehicle.vin}\nDescription - ${vehicle.desc}\nDate Of expiry - ${vehicle.dateOfExpiry}`;
    setItemDescription(dataofvehicle);
    await addVehicleMutation.mutateAsync(vehicle);
    getVehicles();
    Toast.show('Vehicle has been added!', {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
  }, []);

  const onSubmit = async () => {
    if (itemName === '') {
      // ToastAndroid.show('Please enter title', ToastAndroid.SHORT);
      Alert.alert('Please enter Item name.');
    } else if (itemDescription === '') {
      // ToastAndroid.show('Please enter description', ToastAndroid.SHORT);
      Alert.alert('Please enter description.');
    } else if (mainCategory === undefined || mainCategory === null) {
      // ToastAndroid.show('Category not selected', ToastAndroid.SHORT);
      Alert.alert('Category does not selected.');
    } else if (category === undefined || category === null) {
      // ToastAndroid.show('Subcategory not selected', ToastAndroid.SHORT);
      Alert.alert('Subcategory does not selected.');
    } else {
      const files = [...productImages, ...documents].map(file => ({
        uri: file.uri,
        name: file.name ?? file.fileName,
        type: file.type,
      }));

      const variables: MstItemRequestVariables = {
        title: itemName,
        desc: itemDescription,
        suburbId: suburbId,
        date: new Date().toISOString(),
        // catId: category.categoryId,
        catId: mainCategory.categoryId,
        userId: user.id,
        files: files,
      };

      setLoading(true);
      mutation
        .mutateAsync(variables)
        .then(() => {
          setLoading(false);
          Toast.show('Your request has been submitted successfully!', {
            duration: Toast.durations.LONG,
            position: Toast.positions.BOTTOM,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
          });
          navigation.navigate("Main", {screen: 'MyRequest'})
        })
        .catch(error => {
          console.log(error);
          setLoading(false);
        });
    }
  };

  return (
    <Container flex={1} backgroundColor={colors.appBackgroundColor}>
      <Container pl={20} pr={20} pt={16} style={styles.container} flex={1}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <Text lineHeight={24}>
            Category:{' '}
            <Text weight="medium" color="primary">
              {mainCategory?.categoryName}
            </Text>
          </Text>

          <Text lineHeight={24}>
            Sub Category:{' '}
            <Text weight="medium" color="primary">
              {category?.categoryName}
            </Text>
          </Text>

          <Container mt={10}>
            <Text>Item Name</Text>
            <TextInput
              inputContainerStyle={{
                borderBottomWidth: 1,
                marginLeft: -10,
                marginRight: -10,
                paddingLeft: 10,
              }}
              placeholder="Item name would be here..."
              value={itemName}
              onChangeText={setItemName}
            />
          </Container>
          {mainCategory?.categoryId === 1336 && (
            <Container alignItems="center">
              <Button
                title="For My Vehicle"
                width={fullButtonWidth}
                height={40}
                onPress={() => setShowVehicleSheet(true)}
              />
            </Container>
          )}
          <Container mt={10}>
            <Text>Description</Text>
            <TextInput
              inputContainerStyle={{
                borderBottomWidth: 1,
                marginLeft: -10,
                marginRight: -10,
                paddingLeft: 10,
              }}
              inputStyle={{height: 140}}
              placeholder="Item description would be here..."
              multiline
              value={itemDescription}
              onChangeText={setItemDescription}
            />
          </Container>
          <Container dir="row" justifyContent="space-between" pl={10} pr={10}>
            <View>
              <Text>Schedule From</Text>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingVertical: 10,
                  borderBottomColor: colors.borderColor,
                  borderBottomWidth: 1,
                }}
                onPress={() => setOpenFromDatePicker(true)}>
                <Text mr={25} color="primary" weight="medium">
                  {fromDate.format('DD.MM.YYYY')}
                </Text>
                <MCIcon name="calendar-blank" size={24} />
              </TouchableOpacity>
              <DatePicker
                modal
                mode="date"
                open={openFromDatePicker}
                date={fromDate.toDate()}
                minimumDate={new Date()}
                onConfirm={date => {
                  setOpenFromDatePicker(false);
                  setFromDate(moment(date));
                }}
                onCancel={() => {
                  setOpenFromDatePicker(false);
                }}
              />
            </View>
            <View>
              <Text>Schedule To</Text>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingVertical: 10,
                  borderBottomColor: colors.borderColor,
                  borderBottomWidth: 1,
                }}
                onPress={() => setOpenToDatePicker(true)}>
                <Text mr={25} color="primary" weight="medium">
                  {toDate.format('DD.MM.YYYY')}
                </Text>
                <MCIcon name="calendar-blank" size={24} />
              </TouchableOpacity>
              <DatePicker
                modal
                mode="date"
                open={openToDatePicker}
                date={toDate.toDate()}
                minimumDate={new Date()}
                onConfirm={date => {
                  setOpenToDatePicker(false);
                  setToDate(moment(date));
                }}
                onCancel={() => {
                  setOpenToDatePicker(false);
                }}
              />
            </View>
          </Container>
          <Container mt={20}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {productImages.map((prImage, imageIndex) => (
                <Container
                  backgroundColor={colors.activeBackgroundColor}
                  pl={0}
                  pb={0}
                  pt={0}
                  pr={0}
                  mr={5}
                  ml={5}
                  style={{borderRadius: 10}}>
                  <Card
                    pl={5}
                    pr={5}
                    pt={5}
                    pb={5}
                    style={{
                      borderColor: colors.borderColorFade,
                      borderWidth: 1,
                    }}>
                    <Image
                      source={{uri: prImage.uri}}
                      style={{width: 150, height: 150, borderRadius: 5}}
                    />
                  </Card>
                  <TouchableOpacity
                    style={{paddingVertical: 7}}
                    onPress={() => removeImage(imageIndex)}>
                    <Text align="center">- Remove this image</Text>
                  </TouchableOpacity>
                </Container>
              ))}
            </ScrollView>
            <ImagePicker
              ButtonComponent={onOpen => (
                <Button width={fullButtonWidth} height={40} onPress={onOpen}>
                  <Container
                    dir="row"
                    backgroundColor="transparent"
                    alignItems="center"
                    justifyContent="center">
                    <Capture />
                    <Text ml={10} color="active" lineHeight={20}>
                      Add Product Image
                    </Text>
                  </Container>
                </Button>
              )}
              onPickImage={onSelectProductImages}
            />
          </Container>
          <Container mt={20}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {documents.map((doc, docIndex) => (
                <Container
                  backgroundColor={colors.activeBackgroundColor}
                  pl={0}
                  pb={0}
                  pt={0}
                  pr={0}
                  mr={5}
                  ml={5}
                  style={{borderRadius: 10}}>
                  <Card
                    pl={5}
                    pr={5}
                    pt={5}
                    pb={5}
                    alignItems="center"
                    justifyContent="center"
                    style={{
                      borderColor: colors.borderColorFade,
                      borderWidth: 1,
                    }}>
                    <FontAwesome
                      name={getDocumentIcon(doc.type)}
                      size={72}
                      color={colors.text.active}
                    />
                    <Text style={{width: 120}} mt={10} pl={10} pr={10}>
                      {doc.name}
                    </Text>
                  </Card>
                  <TouchableOpacity
                    style={{paddingVertical: 7}}
                    onPress={() => removeDocument(docIndex)}>
                    <Text align="center">- Remove this file</Text>
                  </TouchableOpacity>
                </Container>
              ))}
            </ScrollView>
            <Button width={fullButtonWidth} height={50} onPress={selectFileDoc}>
              <Container
                pl={10}
                pr={10}
                style={{width: '100%'}}
                dir="row"
                backgroundColor="transparent"
                justifyContent="space-between"
                alignItems="center">
                <Text color="primary">Upload File (max 5mb)...</Text>
                <Container
                  pr={10}
                  pl={10}
                  pb={10}
                  pt={10}
                  dir="row"
                  alignItems="center"
                  backgroundColor="rgba(255, 104, 120, 0.2)"
                  style={{borderRadius: 5}}>
                  <Upload />
                  <Text color="active" ml={10}>
                    Upload
                  </Text>
                </Container>
              </Container>
            </Button>
          </Container>
          {mainCategory?.categoryId === 1336 && (
            <TouchableOpacity onPress={() => setScan(true)}>
              <Container pl={5} pr={5} mt={20}>
                <Card>
                  {scan ? (
                    <QRCodeScanner
                      reactivate={false}
                      showMarker={true}
                      ref={scannerRef}
                      onRead={onScanQRCode}
                      cameraContainerStyle={{flex: 1}}
                      containerStyle={{flex: 1}}
                      cameraStyle={{width: '100%', height: '100%'}}
                      cameraProps={{ratio: '1:1'}}
                      markerStyle={{margin: 10}}
                      reactivateTimeout={2000}
                    />
                  ) : (
                    <Container
                      alignItems="center"
                      justifyContent="center"
                      pt={40}
                      pb={40}
                      style={{
                        borderStyle: 'dashed',
                        borderWidth: 1,
                        borderColor: colors.borderColor,
                      }}>
                      <Scan />
                      <Text
                        color="active"
                        size="md"
                        lineHeight={24}
                        weight="medium">
                        Scan License Disc
                      </Text>
                    </Container>
                  )}
                </Card>
              </Container>
            </TouchableOpacity>
          )}
          <Container mt={20} mb={20}>
            <GradientButton title="Submit Request" onPress={onSubmit} />
          </Container>
        </KeyboardAwareScrollView>
      </Container>
      <Modal
        visible={showVehicleSheet}
        bottomModal
        onBackButtonPress={() => setShowVehicleSheet(false)}
        onBackdropPress={() => setShowVehicleSheet(false)}>
        <SafeAreaView>
          <Container
            dir="row"
            pt={10}
            pb={10}
            pr={10}
            pl={10}
            alignItems="center"
            justifyContent="space-between"
            style={styles.borderBottom}>
            <Text color="primary" weight="medium" size="lg" lineHeight={24}>
              Select Vehicle
            </Text>
            <TouchableOpacity onPress={() => setShowVehicleSheet(false)}>
              <MCIcon name="close" color={colors.text.primary} size={32} />
            </TouchableOpacity>
          </Container>
          <Container pr={10} pl={10}>
            <RadioButtons
              data={vehicles.map(vehicle => ({
                label: `${vehicle?.make}-${vehicle?.vIN}`,
                ...vehicle,
              }))}
              onSelect={selectVehicle}
              value={selectedVehicle}
            />
          </Container>
          <Container
            pr={20}
            pl={20}
            mt={10}
            pt={20}
            style={{borderTopWidth: 1, borderTopColor: colors.borderColor}}>
            <GradientButton
              title="Apply"
              onPress={() => setShowVehicleSheet(false)}
            />
          </Container>
        </SafeAreaView>
      </Modal>

      {loading && <Loading />}
      {/* <ScanLCCode
        show={scan}
        onCancel={() => setScan(false)}
        onDone={result => console.log(result)}
      /> */}
    </Container>
  );
};

export default RequestItemDetail;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
  },
  borderBottom: {
    borderBottomColor: colors.borderColorFade,
    borderBottomWidth: 2,
  },
});
