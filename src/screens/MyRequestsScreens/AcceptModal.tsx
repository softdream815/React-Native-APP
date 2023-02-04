import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, TouchableOpacity, Alert} from 'react-native';
import {
  Container,
  Text,
  Modal,
  GradientButton,
  Button,
} from '@app/components/templates';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import colors from '@app/contants/colors';
import {useUpdateMstItemResponse} from './hooks/useUpdateMstItemResponse';
import Gift from '@app/assets/svgs/Gift';
import {useSelector} from 'react-redux';
import {RootStateType} from '@app/types';

type AcceptModalPropsType = {
  show: boolean;
  onClose: () => void;
  companyId: number;
};

const AcceptModal = ({show, onClose, companyId}: AcceptModalPropsType) => {
  const [loading, setLoading] = useState(false);
  const mutation = useUpdateMstItemResponse();
  const user = useSelector((state: RootStateType) => state.user);

  const purchase = async () => {
    setLoading(true);
    try {
      await mutation.mutateAsync({
        companyId: companyId,
        comment: '',
        userId: user.id,
        isAccepted: true,
        itemResponseId: 0,
      });
      setLoading(false);
      Alert.alert('Your Enquiry has been posted successfully!');
      onClose();
    } catch (err) {
      Alert.alert('Something went wrong!');
      setLoading(false);
    }
  }

  const decline = async () => {
    setLoading(true);
    try {
      await mutation.mutateAsync({
        companyId: companyId,
        comment: '',
        itemResponseId: 0,
        userId: 0,
        isRejected: false,
      });
      setLoading(false);
      Alert.alert('Your Enquiry has been posted successfully!');
      setTitle('');
      setDescroption('');
      onClose();
    } catch (err) {
      Alert.alert('Something went wrong!');
      setLoading(false);
    }
  };

  return (
    <Modal visible={show} onBackButtonPress={onClose} onBackdropPress={onClose}>
      <Container pt={10} pr={10} pl={10} alignItems="flex-end">
        <TouchableOpacity onPress={onClose}>
          <MIcon name="close" color={colors.text.primary} size={32} />
        </TouchableOpacity>
      </Container>
      <Container alignItems="center" mt={20}>
        <Gift />
        <Text
          mt={20}
          weight="medium"
          color="black"
          size="lg"
          lineHeight={32}
          pl={10}
          pr={10}
          align="center">
          Would you like to accept the Offer?
        </Text>
      </Container>
      <Container
        pr={10}
        pl={10}
        pt={20}
        pb={20}
        dir="row"
        alignItems="center"
        justifyContent="space-between">
        <Button
          title="Decline"
          height={45}
          style={{width: 160, borderRadius: 10}}
          onPress={decline}
        />
        <GradientButton
          title="Purchase"
          onPress={purchase}
          height={45}
          style={{width: 160}}
        />
      </Container>
    </Modal>
  );
};

export default AcceptModal;

const styles = StyleSheet.create({
  borderBottom: {
    borderBottomColor: colors.borderColorFade,
    borderBottomWidth: 2,
  },
});
