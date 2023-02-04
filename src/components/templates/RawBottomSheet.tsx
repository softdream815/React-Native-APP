import React, {PropsWithChildren, useEffect, useRef} from 'react';
import {StyleSheet, View, Pressable} from 'react-native';
import Container from './Container';
import Text from './Text';
import RBSheet from 'react-native-raw-bottom-sheet';

export type RawBottomSheetPropsType = PropsWithChildren<{
  show: boolean;
  height?: number;
  onClose: () => void;
}>;

const RawBottomSheet = ({show, children, onClose}: RawBottomSheetPropsType) => {
  const bsRef = useRef(null);

  useEffect(() => {
    if (show && bsRef.current) {
      bsRef.current?.open();
    } else if (bsRef.current) {
      bsRef.current?.close();
    }
  }, [show]);

  return (
    <RBSheet
      ref={bsRef}
      openDuration={250}
      customStyles={{
        container: {
          paddingHorizontal: 20,
          paddingVertical: 10,
        },
      }}
      onClose={onClose}>
      {children}
    </RBSheet>
  );
};

export default RawBottomSheet;

const styles = StyleSheet.create({});
