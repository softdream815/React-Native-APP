import React, {useState} from 'react';
import {StyleSheet, Pressable, View} from 'react-native';
import Modal from 'react-native-modal';
import {Container, Text, GradientButton} from '@app/components/templates';
import {Individual, Business} from '@app/assets/svgs/Authentication';
import colors from '@app/contants/colors';
import Icon from 'react-native-vector-icons/Ionicons';

export type RegisterModalPropTypes = {
  show: boolean;
  onDone: (accountType: string) => void;
  onClose: () => void;
};

const ActiveDot = () => <View style={styles.activeDot} />;

const RegisterModal = ({show, onDone, onClose}: RegisterModalPropTypes) => {
  const [type, setType] = useState<'individual' | 'business' | ''>('');

  return (
    <Modal isVisible={show}>
      <Container pt={22} pb={22} pl={22} pr={22} style={styles.container}>
        <Text weight="semibold" size="lg" align="center" lineHeight={32}>
          Select Account Type
        </Text>
        <Container
          dir="row"
          justifyContent="space-around"
          alignItems="center"
          mt={20}>
          <Pressable
            style={{
              ...styles.typeContainer,
              borderWidth: type === 'individual' ? 2 : 1,
              borderColor:
                type === 'individual'
                  ? colors.activeBorderColor
                  : colors.borderColor,
            }}
            onPress={() => setType('individual')}>
            <Individual />
            <Text mt={10} weight="medium" size="md">
              Individual
            </Text>
            {type === 'individual' && <ActiveDot />}
          </Pressable>
          <Pressable
            style={{
              ...styles.typeContainer,
              borderWidth: type === 'business' ? 2 : 1,
              borderColor:
                type === 'business'
                  ? colors.activeBorderColor
                  : colors.borderColor,
            }}
            onPress={() => setType('business')}>
            <Business />
            <Text mt={10} weight="medium" size="md">
              Business
            </Text>
            {type === 'business' && <ActiveDot />}
          </Pressable>
        </Container>
        <Container style={{width: 140, alignSelf: 'center'}} mt={25}>
          <GradientButton title="Process" onPress={() => onDone(type)} />
        </Container>

        <Pressable style={styles.closeButton} onPress={onClose}>
          <Icon name="close" size={32} color={colors.text.label} />
        </Pressable>
      </Container>
    </Modal>
  );
};

export default RegisterModal;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  typeContainer: {
    width: 135,
    height: 135,
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeDot: {
    height: 6,
    width: 6,
    borderRadius: 3,
    backgroundColor: colors.activeBorderColor,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 10,
  }
});
