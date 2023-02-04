import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Text, Button} from '@app/components/templates';
import colors from '@app/contants/colors';
import {useNavigation} from '@react-navigation/native';
const NotAuthorized = () => {
  const navigation = useNavigation();
  const onPressLogin = () => {
    navigation.navigate('AuthStack', {
      screen: 'Login',
    });
  };
  return (
    <Container
      alignItems="center"
      justifyContent="center"
      flex={1}
      backgroundColor={colors.appBackgroundColor}>
      <Text color="primary">You must login to your account.</Text>
      <Button title="Login" mt={20} onPress={onPressLogin} />
    </Container>
  );
};

export default NotAuthorized;

const styles = StyleSheet.create({});
