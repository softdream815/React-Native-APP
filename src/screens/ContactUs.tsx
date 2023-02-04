import React, {useState} from 'react';
import {StyleSheet, Alert} from 'react-native';
import {
  Container,
  Text,
  Header,
  GradientButton,
  TextInput,
  BottomPicker,
  CheckBox,
} from '@app/components/templates';
import colors from '@app/contants/colors';
import {useSelector} from 'react-redux';
import {RootStateType, UserType} from '@app/types';
import {emailValidate} from '@app/utils/validations';
import {usePostContact} from '@app/hooks/usePostContact';

const ContactUs = () => {
  const user: UserType = useSelector((state: RootStateType) => state.user);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [issue, setIssue] = useState('');
  const [privacy, setPrivacy] = useState(true);
  const [loading, setLoading] = useState(false);
  const mutation = usePostContact();

  const submit = async () => {
    if (
      name === '' ||
      email === '' ||
      phone === '' ||
      issue === '' ||
      subject === ''
    ) {
      Alert.alert('Please enter all fields!');
      return false;
    }

    if (!emailValidate(email)) {
      Alert.alert('Please enter a valid eamil address!');
      return false;
    }

    if (!privacy) {
      Alert.alert('Please accept our prvacy and policy!');
      return false;
    }

    setLoading(true);

    const data = {
      fullname: name,
      email,
      phone,
      subject,
      message: issue,
      date: new Date(),
    };
    try {
      await mutation.mutateAsync(data);
      Alert.alert('Your request has been sent successfully!');
      setLoading(false);
    } catch (err) {
      console.log(err);
      Alert.alert('Something went wrong!');
      setLoading(false);
    }
  };

  return (
    <Container flex={1} backgroundColor={colors.appBackgroundColor}>
      <Header title="Contact Us" />
      <Container pl={10} pr={10} pt={25} style={styles.container}>
        <Text ml={5} mr={5}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus ac
          tellus adipiscing a. Faucibus in tellus..
        </Text>
        <Container mt={10}>
          <TextInput
            placeholder="Enter your Name"
            onChangeText={setName}
            value={name}
          />
        </Container>
        <Container mt={10}>
          <TextInput
            placeholder="Email Address"
            onChangeText={setEmail}
            value={email}
          />
        </Container>
        <Container mt={10}>
          <TextInput
            placeholder="Phone Number"
            onChangeText={setPhone}
            value={phone}
          />
        </Container>
        <Container mt={10}>
          {/* <BottomPicker
            placeholder="Select a message Subject"
            onChange={(value: any, index: number) => setSubject(value)}
            data={[]}
          /> */}
          <TextInput
            placeholder="Message Subject"
            onChangeText={setSubject}
            value={subject}
          />
        </Container>
        <Container mt={10}>
          <TextInput
            placeholder="Describe your issue here..."
            multiline
            style={{height: 150}}
            onChangeText={setIssue}
            value={issue}
          />
        </Container>
        <Container>
          <CheckBox
            checked={privacy}
            title="I accept the Privacy Police"
            onPress={() => setPrivacy(!privacy)}
            filled
          />
        </Container>
        <Container mt={10} mb={20}>
          <GradientButton title="Submit" onPress={submit} loading={loading} />
        </Container>
      </Container>
    </Container>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#ffffff',
    flex: 1,
  },
});
