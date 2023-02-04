import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import {
  Container,
  Text,
  GradientButton,
  TextInput,
} from '@app/components/templates';
import Icon from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {LoginManager, Profile, AccessToken} from 'react-native-fbsdk-next';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {useTwitter} from 'react-native-simple-twitter';
import {appleAuth} from '@invertase/react-native-apple-authentication';
import {useSSOLogin} from '@app/hooks/useSSOLogin';
import {useSocialAuthentication} from '@app/hooks/useSocialAuth';
import {set_user_info} from '@app/redux/actions/actions';
import {UserType} from '@app/types';
import {RootStateType} from '@app/redux/store';
import {TWITTER_COMSUMER_KEY, TWITTER_CONSUMER_SECRET} from '@env';
import {
  BackgroundCircle,
  Google,
  Facebook,
  Twitter,
  Apple,
} from '@app/assets/svgs/Authentication';
import Header from './Header';
import colors from '@app/contants/colors';
import RegisterModal from './RegisterModal';
import {decode} from 'base-64';

const LoginScreen = ({navigation, setUser, user}: any) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string | undefined>();
  const [passwordError, setPasswordError] = useState<string | undefined>();
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
  const [icon, setIcon] = useState<string>('eye');
  const [fname, setFname] = useState<string | undefined>();
  const [lanme, setLname] = useState<string | undefined>();
  const [fbUserID, setFbUserID] = useState<string | undefined>();
  const [fbAccessToken, setFbAccessToken] = useState<string | undefined>();
  const [socialType, setSocialType] = useState<string>('');
  const [socialId, setSocialId] = useState<string>('');
  const [track, setTrack] = useState<number>(0);
  const [twitterUserId, setTwitterUserId] = useState<string>('');
  const [showRegisterModal, setShowRegisterModal] = useState<boolean>(false);
  let currentJTI = '';
  if (user && user.token) {
    const decodedString = decode(user.token.split('.')[1]);
    const decodedObject = JSON.parse(decodedString);
    currentJTI = decodedObject.jti;
  }

  const {login, loading} = useSSOLogin({
    username: email,
    password,
    jti: currentJTI,
  });
  const {sociallogin, loading: socialLoading} = useSocialAuthentication({
    username: socialId!,
    password: track.toString(),
    jti: currentJTI,
  });

  const emailVlidator = () => {
    if (email === '') {
      setEmailError('Email is required');
    } else {
      setEmailError('');
    }
  };

  const passVlidator = () => {
    if (password === '') {
      setPasswordError('Password is required');
    } else {
      setPasswordError('');
    }
  };

  const changeIcon = () => {
    setVisiblePassword(!visiblePassword);
    setIcon(icon === 'eye' ? 'eye-off' : 'eye');
  };

  const _onPressForgetPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const submit = async () => {
    const {data} = await login();
    if (data?.sSOLogin) {
      const {result, message, success} = data?.sSOLogin;
      if (success) {
        if (result) {
          const token = result.token ?? '';
          const decodedString = decode(token.split('.')[1]);
          const decodedObject = JSON.parse(decodedString);
          const role =
            decodedObject[
              'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
            ];
          const companyId = decodedObject.companyId;
          const jti = decodedObject.jti;
          const id = decodedObject.Id;
          setUser({
            ...result,
            isLoggedIn: true,
            isGuest: false,
            role,
            companyId,
            jti,
            id: parseInt(id, 10),
          });
          AsyncStorage.setItem('token', token ?? '');
          AsyncStorage.setItem('userInfo', JSON.stringify(result));
          navigation.navigate('Main');
        } else {
          Alert.alert('User does not exist, Please contact the support team!');
        }
      } else {
        Alert.alert(message);
      }
    } else {
      Alert.alert('Sorry, Something went wrong!');
    }
  };

  // For Social Login
  const socialLogin = () => {};

  const onAppleButtonPress = async () => {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });

      // get current authentication state for user
      // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
      const credentialState = await appleAuth.getCredentialStateForUser(
        appleAuthRequestResponse.user,
      );

      console.log('Credential State:', credentialState);

      // use credentialState response to ensure the user is authenticated
      if (credentialState === appleAuth.State.AUTHORIZED) {
        // user is authenticated
        console.log(
          'Apple Auth Request ResponseTEST:',
          appleAuthRequestResponse,
        );
        // setSocialType("apple");
        // setEmail(appleAuthRequestResponse.email);
        // setFname(appleAuthRequestResponse.fullName.givenName);
        // setLname(appleAuthRequestResponse.fullName.familyName);
        // setPassword('2');
        // setPasswordcon('2');
        // setSocialId(() => appleAuthRequestResponse.user);
        // setTrack(() => 8);
        // sociallogin(appleAuthRequestResponse.user, 8)
      }
    } catch (e) {
      console.log('Apple Login Error:', e);
    }
  };

  const facebookSignIn = async () => {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      console.log('Login cancelled');
    } else {
      const fbProfile = await Profile.getCurrentProfile();
      const token = await AccessToken.getCurrentAccessToken();

      setEmail(fbProfile?.email ?? '');
      setFname(fbProfile?.firstName ?? undefined);
      setLname(fbProfile?.lastName ?? undefined);
      setFbUserID(fbProfile?.userID ?? undefined);
      setFbAccessToken(fbAccessToken);
      setSocialType('facebook');
      setSocialId(fbProfile?.userID ?? '');
      setTrack(3);

      // sociallogin();
    }
  };

  const googleSignIn = async () => {
    try {
      GoogleSignin.configure();
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const getToken = await GoogleSignin.getTokens();
      setSocialType('google');
      setSocialId(userInfo.user.id);
      setTrack(4);
      console.log(userInfo);
      // sociallogin();
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('Sign in cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Sigin in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Google playservice is not available in this device');
      } else {
        console.log(error.message);
      }
    }
  };

  const {twitter, TWModal} = useTwitter({
    onSuccess: (user, accessToken) => {
      setSocialType('twitter');
      // setEmail(user.email ?? "");
      setFname(user.name.split(' ')[0]);
      setLname(user.name.split(' ')[1]);
      setTwitterUserId(user?.id_str);
      setSocialId(user?.id_str);
      setTrack(6);
      // sociallogin(user?.id_str, 6);
    },
    onError: err => {
      console.log(err);
    },
  });

  useEffect(() => {
    if (twitter) {
      twitter.setConsumerKey(TWITTER_COMSUMER_KEY, TWITTER_CONSUMER_SECRET);
    }
  }, [twitter]);

  const onPressTwitterButton = () => {
    if (twitter) {
      twitter.login();
    } else {
      console.log('Twitter error');
    }
  };

  const moveToRegister = (accountType: string) => {
    if (accountType === 'business') {
      navigation.navigate('RegisterPlans');
    } else {
      navigation.navigate('Register', {isBusiness: false});
    }
    setShowRegisterModal(false);
  };

  return (
    <Container flex={1} backgroundColor="#ffffff">
      <View style={{position: 'absolute', top: 0, right: 0}}>
        <BackgroundCircle />
      </View>
      <SafeAreaView style={{flex: 1}}>
        <Header title="Login" />
        <Container
          pl={20}
          pr={20}
          backgroundColor="transparent"
          flex={1}
          justifyContent="center">
          <View style={styles.form}>
            <Container
              justifyContent="center"
              alignItems="center"
              backgroundColor="transparent">
              <TextInput
                key="email"
                label="Email Address"
                onChangeText={setEmail}
                onBlur={() => emailVlidator()}
                placeholder="Enter your email address."
                placeholderTextColor="#ccc"
                autoCapitalize="none"
                rightIcon={
                  <Icon name="mail" size={18} color={colors.text.label} />
                }
                errorMessage={emailError}
              />
            </Container>
            <Container
              justifyContent="center"
              alignItems="center"
              backgroundColor="transparent">
              <TextInput
                key="password"
                onChangeText={setPassword}
                onBlur={() => passVlidator()}
                label="Password"
                placeholderTextColor="#ccc"
                autoCapitalize="none"
                secureTextEntry={!visiblePassword}
                placeholder="Enter your password"
                errorMessage={passwordError}
                rightIcon={
                  <Icon
                    style={styles.eyeIcon}
                    name={icon}
                    size={20}
                    color="#333"
                    onPress={() => changeIcon()}
                  />
                }
              />
            </Container>

            <TouchableOpacity
              onPress={() => _onPressForgetPassword()}
              style={{justifyContent: 'center', alignItems: 'flex-end'}}>
              <Text color={colors.text.primary}>Forgot Password?</Text>
            </TouchableOpacity>

            <GradientButton
              title={'Continue'}
              mt={20}
              onPress={submit}
              disabled={loading}
              loading={loading}
            />
          </View>

          {/* Social Login Part */}
          <Container
            mt={20}
            mb={20}
            justifyContent="center"
            alignItems="center">
            <Text>Or Sign In with</Text>
          </Container>

          <Container dir="row" justifyContent="space-around" mt={10} mb={10}>
            {/* Google button part */}
            <TouchableOpacity
              onPress={googleSignIn}
              style={styles.socialAuthButton}>
              <Google />
            </TouchableOpacity>
            {/* End of Google button */}
            <TouchableOpacity
              onPress={facebookSignIn}
              style={styles.socialAuthButton}>
              <Facebook />
            </TouchableOpacity>
            {/* End of FaceBook Button */}
            {/* Twitter button part  */}
            <TouchableOpacity
              onPress={onPressTwitterButton}
              style={styles.socialAuthButton}>
              <Twitter />
            </TouchableOpacity>
            {/* End of Twitter button */}
            {Platform.OS === 'ios' && (
              <TouchableOpacity
                onPress={onAppleButtonPress}
                style={styles.socialAuthButton}>
                <Apple />
              </TouchableOpacity>
            )}
          </Container>
          <Container dir="row" justifyContent="center" mt={30}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={() => setShowRegisterModal(true)}>
              <Text color="active" weight="bold" uppercase ml={5}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </Container>
          <TWModal />
        </Container>
      </SafeAreaView>
      <RegisterModal
        show={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        onDone={accountType => moveToRegister(accountType)}
      />
    </Container>
  );
};

const mapStateToProps = (state: RootStateType) => ({
  user: state.user,
});

const mapDispatchToProps = {
  setUser: (user: Partial<UserType>) => set_user_info(user),
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 180,
    marginBottom: 10,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#888',
    color: '#000',
    height: 50,
  },
  eyeIcon: {
    padding: 9,
    borderBottomWidth: 1,
    borderBottomColor: '#888',
    marginTop: 10,
  },
  form: {
    width: '100%',
  },
  forgotPasswordText: {
    color: '#aaa',
    fontSize: 14,
    marginVertical: 20,
  },
  continueButton: {
    marginTop: 16,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'red',
    borderRadius: 25,
    width: '70%',
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  continueButtonText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
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
