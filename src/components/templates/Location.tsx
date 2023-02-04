import React, {useState, useEffect} from 'react';
import {StyleSheet, TouchableOpacity, Alert, SafeAreaView} from 'react-native';
import Container from './Container';
import Text from './Text';
import Modal from './Modal';
import colors from '@app/contants/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector, useDispatch} from 'react-redux';
import {RootStateType} from '@app/types';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import MapView, {Marker, Callout} from 'react-native-maps';
import {useGetAllProvinces} from '@app/hooks/useGetAllProvinces';
import {useGetAllCities} from '@app/hooks/useGetAllCities';
import {useGetAllSuburbs} from '@app/hooks/useGetAllSuburbs';
import {useUpdateUserLocation} from '@app/hooks/useUpdateUserLocation';
import {set_user_info} from '@app/redux/actions/actions';
import {useNavigation} from '@react-navigation/native';
import GradientButton from './GradientButton';
import {ifIphoneX} from 'rn-iphone-helper';
import Loading from '../Loading';
import Toast from 'react-native-root-toast';

const mapStyle = [
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
];

const Location = () => {
  const [show, setShowModal] = useState(false);
  const [currentLat, setCurrentLat] = useState(0.0);
  const [currentLng, setCurrentLng] = useState(0.0);
  const [selectedLat, setSelectedLat] = useState(0.0);
  const [selectedLng, setSelectedLng] = useState(0.0);
  const [loading, setLoading] = useState(false);
  const user = useSelector((state: RootStateType) => state.user);
  const dispatch = useDispatch();
  const mutation = useUpdateUserLocation();
  const {provinces} = useGetAllProvinces(user.token, true);
  const {cities} = useGetAllCities(user.token, true);
  const {suburbs} = useGetAllSuburbs(user.token, true);
  const navigation = useNavigation();

  const getLocation = () => {
    if (user.isGuest) {
      navigation.navigate("AuthStack", {screen: 'Login'});
      return;
    }
    Geolocation.getCurrentPosition(
      position => {
        const vcurrentLongitude = position.coords.longitude;
        const vcurrentLatitude = position.coords.latitude;
        setCurrentLat(vcurrentLatitude);
        setCurrentLng(vcurrentLongitude);
        setSelectedLat(vcurrentLatitude);
        setSelectedLng(vcurrentLongitude);
        setShowModal(true);
        // updateLocation(vcurrentLatitude, vcurrentLongitude);
      },
      error => {
        console.log(error.code, error.message);
        Alert.alert('Please on location', error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 100000,
      },
    );
  };
  const addressArray = [];
  if (user.streetAddress) {
    addressArray.push(user.streetAddress);
  }
  if (user.cityName) {
    addressArray.push(user.cityName);
  }
  if (user.provinceName) {
    addressArray.push(user.provinceName);
  }

  const address = addressArray.join(', ');

  const updateLocation = (latitude: number, longitude: number) => {
    setLoading(true);
    Geocoder.from(latitude, longitude)
      .then(json => {
        const addressComponent = json.results[0].address_components;
        const streetNumberObject = addressComponent.find(ac =>
          ac.types.includes('street_number'),
        );
        const streetObject = addressComponent.find(ac =>
          ac.types.includes('route'),
        );
        const suburbObject = addressComponent.find(ac =>
          ac.types.includes('sublocality'),
        );
        const suburbId = suburbs?.find(
          suburb => suburb?.suburbName === suburbObject?.short_name,
        )?.suburbId;
        const cityObject = addressComponent.find(ac =>
          ac.types.includes('locality'),
        );
        const cityId = cities?.find(
          city => city?.cityName === cityObject?.short_name,
        )?.cityId;
        const provinceObject = addressComponent.find(ac =>
          ac.types.includes('administrative_area_level_1'),
        );
        const provinceId = provinces?.find(
          province => province?.provinceName === provinceObject?.long_name,
        )?.provinceId;
        const countryObject = addressComponent.find(ac =>
          ac.types.includes('country'),
        );
        const postalObject = addressComponent.find(ac =>
          ac.types.includes('postal_code'),
        );
        const locationDataForAPI = {
          userId: user.id,
          streetAddress: `${streetNumberObject?.short_name} ${streetObject?.short_name}`,
          latitude: latitude.toString(),
          longitude: longitude.toString(),
          suburbId: suburbId === undefined ? 0 : suburbId,
          cityId: cityId === undefined ? 0 : cityId,
          provinceId: isNaN(parseInt(provinceId ?? '', 10))
            ? 0
            : parseInt(provinceId ?? '', 10),
          zipCode: postalObject?.short_name,
        };

        const locationDataforRedux = {
          ...locationDataForAPI,
          cityName: cityObject?.short_name,
          provinceName: provinceObject?.short_name,
          country: countryObject?.short_name,
        };
        dispatch(set_user_info(locationDataforRedux));
        mutation
          .mutateAsync({
            userId: user.id,
            latitude: latitude.toString(),
            longitude: longitude.toString(),
          })
          .then(res => {
            console.log(res);
            setLoading(false);
            setShowModal(false);
            Toast.show('You location has been updated!', {
              duration: Toast.durations.LONG,
              position: Toast.positions.BOTTOM,
              shadow: true,
              animation: true,
              hideOnPress: true,
              delay: 0,
            });
          })
          .catch(e => {
            setLoading(false);
            console.log(e);
          });
      })
      .catch(error => {
        setLoading(false);
        console.warn(error);
      });
  };

  const selectLocation = ({coordinate, position}) => {
    setSelectedLat(coordinate.latitude);
    setSelectedLng(coordinate.longitude);
  };

  const onPressUseCurrentLocation = () => {
    updateLocation(currentLat, currentLng);
  };

  const onPressUseSelectedLocation = () => {
    updateLocation(selectedLat, selectedLng);
  };
  return (
    <TouchableOpacity style={styles.editButton} onPress={getLocation}>
      <Container
        pb={12}
        style={styles.container}
        backgroundColor="transparent"
        dir="row"
        alignItems="center"
        justifyContent="space-between">
        <Container dir="row" alignItems="center" backgroundColor="transparent">
          <Icon name="my-location" size={18} color={colors.text.label} />
          <Text ml={10} size="sm" lineHeight={18}>
            {address === '' ? 'Select Location' : address}
          </Text>
        </Container>
        <TouchableOpacity style={styles.editButton} onPress={getLocation}>
          <Text size="sm" lineHeight={18} color="active">
            Edit
          </Text>
        </TouchableOpacity>
        <Modal
          visible={show}
          contentStyle={{
            flex: 1,
            marginHorizontal: -20,
            marginVertical: -20,
          }}>
          <Container flex={1}>
            <MapView
              style={styles.mapStyle}
              showsUserLocation
              followsUserLocation
              showsMyLocationButton
              showsCompass
              showsScale
              showsBuildings
              zoomEnabled
              onPress={event => selectLocation(event.nativeEvent)}
              initialRegion={{
                latitude: selectedLat,
                longitude: selectedLng,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              customMapStyle={mapStyle}>
              <Marker
                coordinate={{
                  latitude: selectedLat,
                  longitude: selectedLng,
                }}
              />
            </MapView>
            <Container
              style={styles.buttons}
              pl={20}
              pr={20}
              backgroundColor="transparent">
              <GradientButton
                title="Use Current Location"
                onPress={onPressUseCurrentLocation}
              />
              <GradientButton
                title="Use Selected Location"
                mt={10}
                onPress={onPressUseSelectedLocation}
              />
            </Container>
          </Container>
          <TouchableOpacity
            style={{position: 'absolute', top: 60, left: 20}}
            onPress={() => setShowModal(false)}>
            <Icon name="arrow-back-ios" size={24} />
          </TouchableOpacity>
          {loading && <Loading />}
        </Modal>
      </Container>
    </TouchableOpacity>
  );
};

export default Location;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 2,
  },
  editButton: {
    // borderBottomColor: colors.borderColor,
    // borderBottomWidth: 2,
  },
  mapStyle: {
    width: '100%',
    height: '100%',
  },
  buttons: {
    position: 'absolute',
    ...ifIphoneX({
        bottom: 40,
      },
      {
        bottom: 20,
      },
    ),
    width: '100%',
  },
});
