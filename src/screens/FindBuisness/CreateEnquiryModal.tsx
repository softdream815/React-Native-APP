import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, TouchableOpacity, Alert} from 'react-native';
import {
  Container,
  Text,
  Modal,
  GradientButton,
  TextInput,
} from '@app/components/templates';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import colors from '@app/contants/colors';
import {usePostCustomerEnquiry} from '@app/hooks/usePostCustomerEnquiry';

type CreateEnquiryModalPropsType = {
  show: boolean;
  onClose: () => void;
  companyId: number;
};

const CreateEnquiryModal = ({
  show,
  onClose,
  companyId,
}: CreateEnquiryModalPropsType) => {
  const [title, setTitle] = useState('');
  const [descrption, setDescroption] = useState('');
  const [loading, setLoading] = useState(false);
  const mutation = usePostCustomerEnquiry();

  const submitEnquiry = async () => {
    if (title === '' || descrption === '') {
      return false;
    }
    setLoading(true);
    try {
      await mutation.mutateAsync({
        companyId: companyId,
        enquiryDescription: descrption,
        title: title,
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
    <Modal
      visible={show}
      bottomModal
      onBackButtonPress={onClose}
      onBackdropPress={onClose}>
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
          <TouchableOpacity onPress={onClose}>
            <MIcon name="close" color={colors.text.primary} size={32} />
          </TouchableOpacity>
        </Container>
        <Container pt={20} pb={10}>
          <Text ml={10}>Enquriy Title</Text>
          <TextInput onChangeText={setTitle} value={title} />
        </Container>
        <Container pt={10} pb={20}>
          <Text ml={10}>Enquiry Description</Text>
          <TextInput
            multiline
            style={{height: 100}}
            onChangeText={setDescroption}
            value={descrption}
          />
        </Container>
        <Container pr={10} pl={10} pt={20} pb={20}>
          <GradientButton
            title="Contact Now"
            onPress={submitEnquiry}
            loading={loading}
          />
        </Container>
      </SafeAreaView>
    </Modal>
  );
};

export default CreateEnquiryModal;

const styles = StyleSheet.create({
  borderBottom: {
    borderBottomColor: colors.borderColorFade,
    borderBottomWidth: 2,
  },
});