import React, {PropsWithChildren} from 'react';
import {StyleSheet, View, ViewStyle, StyleProp} from 'react-native';
import RNModal from 'react-native-modal';

type ModalPropsType = PropsWithChildren<{
  visible: boolean;
  bottomModal?: boolean;
  contentStyle?: StyleProp<ViewStyle>;
  onBackButtonPress?: () => void;
  onBackdropPress?: () => void;
}>;

const Modal = ({
  children,
  visible,
  bottomModal,
  contentStyle,
  ...props
}: ModalPropsType) => {
  return (
    <RNModal
      testID={'modal'}
      isVisible={visible}
      style={bottomModal ? styles.bottomView : {}}
      {...props}>
      <View style={[styles.modalContainer, contentStyle]}>{children}</View>
    </RNModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  bottomView: {
    justifyContent: 'flex-end',
    margin: 0,
    flex: 1,
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
});
