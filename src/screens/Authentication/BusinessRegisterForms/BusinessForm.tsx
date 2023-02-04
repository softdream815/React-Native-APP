import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  TextInput,
  Text,
  GradientButton,
  BottomPicker,
  CheckBox,
} from '@app/components/templates';
import Icon from 'react-native-vector-icons/Feather';
import colors from '@app/contants/colors';
import {useGetMainCategories} from '@app/hooks/useGetMainCategories';
import TOCModal from './TOC';

const BusinessForm = ({duration, plan}) => {
  const {categories} = useGetMainCategories();
  const [category, selectCategory] = useState(0);
  const [province, selectProvince] = useState(null);
  const [city, selectCity] = useState(null);
  const [sub, selectSub] = useState(null);
  const [confirmTOS, setConfirmTOS] = useState(false);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [contactNumber, setContactNumber] = useState<string>('');
  const [passwrod, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [showTOC, setShowTOC] = useState(false);

  const navigation = useNavigation();

  const submit = () => {
    // navigation.navigate('RegisterPlans');
  };

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}>
      <Container backgroundColor="transparent">
        <Text weight="semibold" size="md" lineHeight={20} ml={10} mb={20}>
          Company Info
        </Text>
        <TextInput
          key="companyName"
          placeholder="Enter your Company Name."
          label={<Text>Company Name</Text>}
          onChangeText={(value: string) => console.log(value)}
          rightIcon={
            <Icon name="briefcase" size={20} color={colors.text.label} />
          }
        />
        <Container pr={10} pl={10} backgroundColor="transparent">
          <BottomPicker
            key="category"
            placeholder="Choose an Item..."
            label="Category"
            data={categories?.map(_category => ({
              label: _category?.categoryName || '',
              value: _category?.categoryId || '',
            }))}
            onChange={(value, _) => console.log(value)}
          />
        </Container>
      </Container>
      <Container backgroundColor="transparent" mt={10}>
        <Text weight="semibold" size="md" lineHeight={20} ml={10} mb={20}>
          Basic Info
        </Text>
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
      <Container backgroundColor="transparent" mt={10} pr={10} pl={10}>
        <Text weight="semibold" size="md" lineHeight={20} mb={20}>
          Area Info
        </Text>
        <BottomPicker
          key="province"
          placeholder="Select a Province"
          label="Province"
          data={categories?.map(_category => ({
            label: _category?.categoryName || '',
            value: _category?.categoryId || '',
          }))}
          onChange={(value, _) => console.log(value)}
        />
        <BottomPicker
          key="city"
          placeholder="Select a City"
          label="City"
          data={categories?.map(_category => ({
            label: _category?.categoryName || '',
            value: _category?.categoryId || '',
          }))}
          onChange={(value, _) => console.log(value)}
        />
        <BottomPicker
          key="sub"
          placeholder="Select a Suburb"
          label="Suburb"
          data={categories?.map(_category => ({
            label: _category?.categoryName || '',
            value: _category?.categoryId || '',
          }))}
          onChange={(value, _) => console.log(value)}
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
          onPress={submit}
          disabled={loading}
          loading={loading}
        />
      </Container>
      <Container dir="row" justifyContent="center" mt={30} mb={100}>
        <Text>Do you have an account?</Text>
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

export default BusinessForm;

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
