import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {
  Container,
  Button,
  ImageWithPlaceholder,
  Text,
  Link,
  AppVersion,
} from '@app/components/templates';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {useGuestLogin} from '@app/hooks/useGuestLogin';
import {UserType} from '@app/types';
import {set_user_info} from '@app/redux/actions/actions';
import {RootStateType, AppDispatch} from '@app/redux/store';
import Divider from '@app/assets/svgs/Navigations/Divider';
import DefaultAvatar from '@app/assets/svgs/Navigations/DefaultAvatar';
import DefaultProfileText from '@app/assets/svgs/Navigations/DefaultProfileText';
import {IMAGE_PREFIX} from '@env';
import {
  Bid,
  Contact,
  Hire,
  List,
  Logout,
  Mark,
  Order,
  Profile,
  Rate,
  Reviews,
  RFQ,
  Search,
} from '@app/assets/svgs/Menu';

const MENU = [
  {
    title: 'Profile',
    name: 'Profile',
    auth: true,
    icon: Profile,
    showInUser: true,
  },
  {
    title: 'My Request',
    name: 'MyRequest',
    auth: true,
    icon: List,
    showInUser: true,
  },
  {
    title: 'My Enquiry',
    name: 'MyEnquiry',
    auth: true,
    icon: List,
    showInUser: true,
  },
  // {
  //   title: 'Incoming Requests',
  //   name: 'IncomingRequests',
  //   auth: true,
  //   icon: List,
  //   showInUser: false,
  // },
  // {
  //   title: 'Incoming Enquiry',
  //   name: 'IncomingEnquiry',
  //   auth: true,
  //   icon: List,
  //   showInUser: false,
  // },
  {
    title: 'RFQ',
    name: 'RequestItem',
    auth: false,
    icon: RFQ,
    showInUser: true,
  },
  {
    title: 'Product Map',
    name: 'ProductMap',
    auth: false,
    icon: Mark,
    showInUser: true,
  },
  {
    title: 'Find Buisness',
    name: 'FindBusiness',
    auth: false,
    icon: Search,
    showInUser: true,
  },
  {title: 'My Bids', name: 'MyBids', auth: true, icon: Bid, showInUser: true},
  {
    title: 'My Hires',
    name: 'MyHires',
    auth: true,
    icon: Hire,
    showInUser: true,
  },
  {
    title: 'My Orders',
    name: 'MyOrders',
    auth: true,
    icon: Order,
    showInUser: true,
  },
  // {
  //   title: 'Speicals',
  //   name: 'Specials',
  //   auth: false,
  //   icon: Reviews,
  //   showInUser: true,
  // },
  // {
  //   title: 'Catalogues',
  //   name: 'Catalogues',
  //   auth: false,
  //   icon: List,
  //   showInUser: true,
  // },
  {
    title: 'Rate & Review the Application',
    name: 'Rate',
    auth: false,
    icon: Rate,
    showInUser: true,
  },
  {
    title: 'Contact Us',
    name: 'ContactUs',
    auth: false,
    icon: Contact,
    showInUser: true,
  },
];

const DrawerContent = ({navigation, user, setUser}: any) => {
  const {guestLogin} = useGuestLogin();

  const handleSignOut = async () => {
    await AsyncStorage.clear();
    const {data} = await guestLogin();
    setUser({
      firstName: '',
      lastName: '',
      vGender: '',
      email: '',
      streetAddress: '',
      provinceID: '',
      provinceName: '',
      cityID: '',
      cityName: '',
      suburbID: '',
      suburbName: '',
      longitude: '',
      latitude: '',
      zipCode: '',
      userProfileImage: '',
      paymentUrl: '',
      packageID: '',
      tokenExpires: '',
      token: data?.guestLogin?.result?.value,
      isLoggedIn: true,
      isGuest: true,
      id: 0,
      role: '',
      companyId: 0,
      jti: '',
    });
  };

  const _onPressAuth = () => {
    if (user.isGuest) {
      navigation.navigate('AuthStack', {screen: 'Login'});
    }
  };

  const _renderProfileSection = () => {
    if (user.isGuest) {
      return (
        <Container dir="row" alignItems="center" ml={10} pb={10}>
          <DefaultAvatar />
          <Container ml={10} mt={5}>
            {/* <DefaultProfileText /> */}
            <Text color="primary" weight="medium" size="md">
              Welcome
            </Text>
            <Button
              title="Login/Register"
              height={30}
              onPress={() => _onPressAuth()}
            />
          </Container>
        </Container>
      );
    } else {
      return (
        <Container dir="row" alignItems="center" ml={10} pb={10}>
          {user.userProfileImage ? (
            <ImageWithPlaceholder
              source={{uri: IMAGE_PREFIX + user.userProfileImage}}
              style={styles.userAvatar}
              resizeMode="contain"
            />
          ) : (
            <DefaultAvatar />
          )}
          <Container ml={10}>
            <Text color="secondary">
              {user.firstName} {user.lastName}
            </Text>
            <Text color="label" mt={6} size="xs">
              {user.email}
            </Text>
          </Container>
        </Container>
      );
    }
  };

  const onPressMenuItem = (routeName: any) => {
    switch (routeName) {
      case 'IncomingRequests':
        navigation.navigate('MyRequest', {
          screen: 'MyRequests',
          params: {
            screen: 'IncomingRFQ',
          },
        });
        break;
      case 'MyRequest':
        navigation.navigate('MyRequest', {
          screen: 'MyRequests',
          params: {
            screen: 'MyRFQ',
          },
        });
        break;
      case 'RequestItem':
        if (user.isGuest) {
          navigation.navigate('AuthStack');
        } else {
          navigation.reset({
            index: 0,
            routes: [
              {
                name: 'RequestItemStack',
                params: {
                  screen: 'RequestItem',
                },
              },
            ],
          });
        }
        break;
      case 'Specials':
        navigation.navigate('HomeStack', {
          screen: 'SpecialProducts',
        });
        break;
      default:
        navigation.navigate(routeName);
    }
  };

  const _renderItem = (item: any) => {
    const Icon = item.icon;
    return (
      <TouchableOpacity
        key={item.name}
        style={styles.menuItem}
        onPress={() => onPressMenuItem(item.name)}>
        <Icon />
        <Text ml={10}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const renderMenuItems = () => {
    const menuItems = !user.isGuest ? MENU : MENU.filter(m => !m.auth);
    if (user.role === 'Individual(Seeker)') {
      const menuElements = menuItems
        .filter(item => item.showInUser === true)
        .map(item => _renderItem(item));
      return menuElements;
    }
    const menuElements = menuItems.map(item => _renderItem(item));
    return menuElements;
  };

  const onPressPrivacyPolicy = () => {
    navigation.navigate('PrivacyPolicy');
  };

  return (
    <Container flex={1}>
      <SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>
        <Container>
          {_renderProfileSection()}
          <Divider />
        </Container>
        <Container flex={1} pt={20} pl={18} pr={10}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {renderMenuItems()}
            {!user.isGuest && (
              <TouchableOpacity style={styles.menuItem} onPress={handleSignOut}>
                <Logout />
                <Text ml={10}>Logout</Text>
              </TouchableOpacity>
            )}
          </ScrollView>
        </Container>
        <Container>
          <Divider />
          <Container
            dir="row"
            justifyContent="space-between"
            alignItems="center"
            pr={10}
            pt={10}
            pl={10}>
            <TouchableOpacity onPress={onPressPrivacyPolicy}>
              <Text size="xs" color="active" underline>
                Privacy Policy
              </Text>
            </TouchableOpacity>
            <AppVersion />
          </Container>
        </Container>
      </SafeAreaView>
    </Container>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  authenticationButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  authenticationButtonText: {
    marginTop: 5,
    color: '#888',
    fontSize: 12,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  menuContainer: {
    paddingHorizontal: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
});

const mapStateToProps = (state: RootStateType) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  setUser: (user: Partial<UserType>) => dispatch(set_user_info(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);
