import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {
  Container,
  Text,
  Header,
  GradientButton,
} from '@app/components/templates';
import colors from '@app/contants/colors';
import {useSelector} from 'react-redux';
import {RootStateType, UserType} from '@app/types';
import {Avatar} from '@rneui/base';
import {IMAGE_PREFIX} from '@env';

const Profile = () => {
  const user = useSelector((state: RootStateType) => state.user);

  return (
    <Container flex={1} backgroundColor={colors.appBackgroundColor}>
      <Header title="My Profile" />
      <Container pl={20} pr={20} pt={25} style={styles.container}>
        <Container style={{borderRadius: 20}} alignItems="center">
          <Image
            source={require('@app/assets/images/profile.png')}
            style={{
              width: 343,
              height: 200,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
            resizeMode="contain"
          />
          <Text
            style={styles.welcomeText}
            color="white"
            size="xl"
            weight="bold"
            lineHeight={32}>
            {'Welcome to \nmy Profile'}
          </Text>
          <Avatar
            containerStyle={{position: 'absolute', bottom: -64, left: 24}}
            size={128}
            rounded
            source={{uri: `${IMAGE_PREFIX}${user.userProfileImage}`}}>
            <Avatar.Accessory
              size={32}
              style={{backgroundColor: colors.text.white}}
              type="material-community"
              name="camera-enhance"
              color={colors.text.active}
            />
          </Avatar>
        </Container>

        <Container mt={75} pl={20}>
          <Text size="lg" lineHeight={32} weight="semibold" color="primary">
            {`${user.firstName} ${user.lastName}`}
          </Text>
          <Container mt={20}>
            <Text>Gender: </Text>
            <Text
              mt={5}
              color="primary"
              weight="medium"
              size="md"
              lineHeight={24}>
              {user.vGender}
            </Text>
          </Container>
          <Container mt={20}>
            <Text>Account Info: </Text>
            <Text
              mt={5}
              color="primary"
              weight="medium"
              size="md"
              lineHeight={24}>
              {user.email}
            </Text>
          </Container>
          <Container mt={20}>
            <Text>Address Info: </Text>
            <Text
              mt={5}
              color="primary"
              weight="medium"
              size="md"
              lineHeight={24}>
              {`${user.streetAddress}, ${user.suburbName}, ${user.cityName}, ${user.provinceName}`}
            </Text>
          </Container>
        </Container>

        <Container mt={25}>
          <GradientButton title="Edit Profile" />
        </Container>
      </Container>
    </Container>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#ffffff',
    flex: 1,
  },
  welcomeText: {
    position: 'absolute',
    top: 30,
    left: 30,
  },
});
