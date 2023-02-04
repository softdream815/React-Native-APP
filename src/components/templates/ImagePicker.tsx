import {StyleSheet, View} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Container from './Container';
import Text from './Text';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

type ImagePickerPropsType = {
  ButtonComponent: (onOpen: () => void) => JSX.Element;
  onPickImage: (assets: Object[]) => void;
  multiple?: boolean;
};

const ImagePicker = ({
  ButtonComponent,
  onPickImage,
  multiple,
}: ImagePickerPropsType) => {
  const bsRef = useRef(null);

  const onOpen = () => {
    bsRef.current?.open();
  };
  const onPressChooseImage = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: multiple ? 5 : 1,
    });

    const {didCancel, errorCode, errorMessage, assets} = result;

    if (didCancel || errorCode) {
      return false;
    }
    onPickImage(assets ?? []);
    bsRef.current?.close();
  };
  const onPressTakePhoto = async () => {
    const result = await launchCamera({
      mediaType: 'photo',
    });
    const {didCancel, errorCode, errorMessage, assets} = result;

    if (didCancel || errorCode) {
      return false;
    }

    onPickImage(assets ?? []);
    bsRef.current?.close();
  };
  return (
    <View>
      {ButtonComponent(onOpen)}
      <RBSheet
        ref={bsRef}
        height={120}
        openDuration={250}
        customStyles={{
          container: {
            paddingHorizontal: 20,
            paddingVertical: 10,
          },
        }}>
        <Container>
          <TouchableOpacity style={styles.button} onPress={onPressChooseImage}>
            <Icon name="photo" size={24} />
            <Text ml={10}>Choose Image</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onPressTakePhoto}>
            <Icon name="photo-camera" size={24} />
            <Text ml={10}>Take Photo</Text>
          </TouchableOpacity>
        </Container>
      </RBSheet>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },
});
