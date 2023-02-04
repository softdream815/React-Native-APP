import React, {useState} from 'react';
import {StyleSheet, Platform, TouchableOpacity, ScrollView} from 'react-native';
import {
  Container,
  TextInput,
  Text,
  GradientButton,
  CheckBox,
} from '@app/components/templates';
import Icon from 'react-native-vector-icons/Feather';
import colors from '@app/contants/colors';
import {
  Google,
  Facebook,
  Twitter,
  Apple,
} from '@app/assets/svgs/Authentication';
import TOCModal from '../BusinessRegisterForms/TOC';

const IndividualForm = () => {
  const [showTOC, setShowTOC] = useState(false);
  const [confirmTOS, setConfirmTOS] = useState(false);

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}>
      <Container backgroundColor="transparent">
        <TextInput
          key="firstName"
          placeholder="Enter your First Name."
          label={<Text>First Name</Text>}
          onChangeText={(value: string) => console.log(value)}
          rightIcon={<Icon name="user" size={20} color={colors.text.label} />}
        />
        <TextInput
          key="lastName"
          placeholder="Enter your Last Name."
          label={<Text>Last Name</Text>}
          onChangeText={(value: string) => console.log(value)}
          rightIcon={<Icon name="user" size={20} color={colors.text.label} />}
        />
        <TextInput
          key="email"
          placeholder="Enter your Email Address."
          label={<Text>Email</Text>}
          onChangeText={(value: string) => console.log(value)}
          rightIcon={<Icon name="mail" size={20} color={colors.text.label} />}
        />
        <TextInput
          key="phone"
          placeholder="Enter your Contact Number."
          label={<Text>Contact Number</Text>}
          onChangeText={(value: string) => console.log(value)}
          rightIcon={
            <Icon name="smartphone" size={20} color={colors.text.label} />
          }
        />
        <TextInput
          key="password"
          placeholder="Create your Password."
          label={<Text>Create Password</Text>}
          onChangeText={(value: string) => console.log(value)}
          rightIcon={<Icon name="eye" size={20} color={colors.text.label} />}
        />
        <TextInput
          key="confirm-password"
          placeholder="Retype Password to confirm."
          label={<Text>Create Password</Text>}
          onChangeText={(value: string) => console.log(value)}
          rightIcon={<Icon name="eye" size={20} color={colors.text.label} />}
        />
      </Container>
      <Container>
        <CheckBox
          key="tos_checkbox"
          checked={confirmTOS}
          title={
            <>
              <Text>
                I agree that the information provided above is true to my
                knowledge and accept the
              </Text>
              <TouchableOpacity
                style={{marginTop: -2}}
                onPress={() => setShowTOC(true)}>
                <Text weight="semibold"> Terms & Conditions</Text>
              </TouchableOpacity>
            </>
          }
          onPress={() => setConfirmTOS(!confirmTOS)}
        />
      </Container>
      <Container>
        <GradientButton
          title={'Continue'}
          // onPress={submit}
          // disabled={loading}
          // loading={loading}
        />
      </Container>
      <Container mt={20} justifyContent="center" alignItems="center">
        <Text>Or Sign In with</Text>
      </Container>
      <Container dir="row" justifyContent="space-around" mt={20} mb={10}>
        {/* Google button part */}
        <TouchableOpacity
          // onPress={googleSignIn}
          style={styles.socialAuthButton}>
          <Google />
        </TouchableOpacity>
        {/* End of Google button */}
        <TouchableOpacity
          // onPress={facebookSignIn}
          style={styles.socialAuthButton}>
          <Facebook />
        </TouchableOpacity>
        {/* End of FaceBook Button */}
        {/* Twitter button part  */}
        <TouchableOpacity
          // onPress={onPressTwitterButton}
          style={styles.socialAuthButton}>
          <Twitter />
        </TouchableOpacity>
        {/* End of Twitter button */}
        {Platform.OS === 'ios' && (
          <TouchableOpacity
            // onPress={onAppleButtonPress}
            style={styles.socialAuthButton}>
            <Apple />
          </TouchableOpacity>
        )}
      </Container>
      <Container dir="row" justifyContent="center" mt={30} mb={100}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity>
          <Text color="active" weight="bold" uppercase ml={5}>
            Login
          </Text>
        </TouchableOpacity>
      </Container>
      <TOCModal show={showTOC} onClose={() => setShowTOC(false)} />
    </ScrollView>
  );
};

export default IndividualForm;

const styles = StyleSheet.create({
  contentContainerStyle: {
    marginVertical: 20,
    paddingBottom: 100,
    paddingHorizontal: 25,
  },
  inputContainerStyle: {
    borderColor: colors.borderColor,
  },
  socialAuthButton: {
    width: 45,
    height: 45,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
