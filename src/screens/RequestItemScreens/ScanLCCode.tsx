import React, {useRef} from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {Modal, Container, Text, GradientButton} from '@app/components/templates';
import QRCodeScanner from 'react-native-qrcode-scanner';

type ScanLiceneseModal = {
  show: boolean;
  onCancel: () => void;
  onDone: (result: any) => void;
}

const ScanLCCode = ({show, onCancel, onDone}: ScanLiceneseModal) => {
  const scannerRef = useRef(null);
  const onRead = () => {

  }
  return (
    <Modal
      visible={show}
      contentStyle={{
        flex: 1,
        marginHorizontal: -20,
        marginVertical: -20,
      }}>
      <Container flex={1}>
        <QRCodeScanner
          reactivate={true}
          showMarker={true}
          ref={scannerRef}
          onRead={onRead}
          cameraContainerStyle={{flex: 1}}
          containerStyle={{flex: 1}}
          cameraStyle={{flex: 1}}
        />
        <Container>
          <GradientButton onPress={onCancel} title="Stop Scan" />
        </Container>
      </Container>
    </Modal>
  );
};

export default ScanLCCode;

const styles = StyleSheet.create({});
