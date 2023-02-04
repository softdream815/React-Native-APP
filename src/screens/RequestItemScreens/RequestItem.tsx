import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, Alert, PermissionsAndroid, Platform} from 'react-native';
import {
  Container,
  Switch,
  BottomPicker,
  Button,
  Location,
  CategorySingleSelector,
} from '@app/components/templates';
import colors from '@app/contants/colors';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import MapView, {Marker} from 'react-native-maps';
import {useGetAllProvinces} from '@app/hooks/useGetAllProvinces';
import {useGetAllCities} from '@app/hooks/useGetAllCities';
import {useGetAllSuburbs} from '@app/hooks/useGetAllSuburbs';
import {useSelector} from 'react-redux';
import {RootStateType} from '@app/redux/store';
import {useFocusEffect} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {MstCategoryType} from '@app/generated/graphql-types';
import {RequestItemScreen} from '@app/navigation/RequestItemStack';

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

const initialRegion = {
  latitude: -28.4793,
  longitude: 24.6727,
  latitudeDelta: 0.1015,
  longitudeDelta: 0.10121,
};

const RequestItem = ({navigation, route}: RequestItemScreen) => {
  const user = useSelector((state: RootStateType) => state.user);
  const defaultCategory = route.params?.defaultCategory;
  const [useLocation, setUseLocation] = useState(false);
  const [mapRegion, setMapRegion] = useState(initialRegion);
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<number | null>(null);
  const [cityPickerItems, setCityPickerItems] = useState([]);
  const [selectedSub, setSelectedSub] = useState<number | null>(null);
  const [subPickerItems, setSubPickerItems] = useState([]);
  const [isEnableLocation, setEnableLocation] = useState(false);
  const [category, setCategory] = useState<MstCategoryType | null>();

  const {provinces} = useGetAllProvinces(user.token, true);
  const provincePickerItems = (provinces ?? []).map(p => ({
    label: p?.provinceName ?? '',
    value: p?.provinceId,
  }));
  const {cities} = useGetAllCities(user.token, true);
  const {suburbs} = useGetAllSuburbs(user.token, true);
  const everyCities = cities?.map(city => ({
    label: city?.cityName ?? '',
    value: city?.cityId,
  }));
  const everySuburbs = suburbs?.map(suburb => ({
    label: suburb?.suburbName ?? '',
    value: suburb?.suburbId,
  }));

  const onChangeProvince = useCallback(
    value => {
      setSelectedProvince(value);
      setSelectedCity(null);
      const _cityPickerItems = (cities ?? [])
        .filter(c => c?.provinceId == value)
        .map(c => ({
          label: c?.cityName ?? '',
          value: c?.cityId,
        }));
      setCityPickerItems(_cityPickerItems);
    },
    [cities],
  );

  const onChangeCity = useCallback(
    value => {
      setSelectedCity(value);
      setSelectedSub(null);
      const _subPickerItems = (suburbs ?? [])
        .filter(s => s?.cityId == selectedCity)
        .map(suburb => ({
          label: suburb?.suburbName ?? '',
          value: suburb?.suburbId,
        }));
      setSubPickerItems(_subPickerItems);
    },
    [selectedCity, suburbs],
  );

  const requestLocationPermission = async () => {
    Geolocation.setRNConfiguration({
      authorizationLevel: 'always',
      skipPermissionRequests: false,
    });
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization(
        () => {
          setEnableLocation(true);
        },
        (error: {
          code: number;
          message: string;
          PERMISSION_DENIED: number;
          POSITION_UNAVAILABLE: number;
          TIMEOUT: number;
        }) => {
          setEnableLocation(false);
          console.log(error);
        },
      );
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            buttonPositive: '',
            title: 'Location Access Required',
            message: 'This App needs to Access your location',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setEnableLocation(true);
        } else {
          setEnableLocation(false);
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };
  useFocusEffect(
    useCallback(() => {
      requestLocationPermission();
    }, []),
  );

  const onSwitchLocation = (value: boolean) => {
    setUseLocation(value);
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const vcurrentLongitude = position.coords.longitude;
        const vcurrentLatitude = position.coords.latitude;
        const region = {
          latitude: vcurrentLatitude,
          longitude: vcurrentLongitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        };
        setMapRegion(region);
        Geocoder.from(vcurrentLatitude, vcurrentLongitude)
          .then(json => {
            const addressComponent = json.results[0].address_components;
            // setMapState(addressComponent[3].long_name);
            const searchProvince = provinces?.find(
              p =>
                p?.provinceName ===
                addressComponent[addressComponent.length - 3].long_name,
            );
            // setSelectProvince(searchProvince ? searchProvince.provinceId : null);
            const searchCity = cities?.find(
              c =>
                c?.cityName ===
                addressComponent[addressComponent.length - 4].long_name,
            );
            // setSelectCity(searchCity ? searchCity.cityId : null);
            const searchSub = suburbs?.find(
              s =>
                s?.suburbName ===
                addressComponent[addressComponent.length - 5].long_name,
            );
            setSelectedProvince(searchProvince?.provinceId ?? null);
            setSelectedCity(searchCity?.cityId ?? null);
            setSelectedSub(searchSub?.suburbId ?? null);
          })
          .catch(error => console.warn(error));
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

  useEffect(() => {
    if (useLocation) {
      const _unsubscribe = getLocation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useLocation]);

  const onSubmit = () => {
    const _category = defaultCategory ? defaultCategory : category;
    const isValid =
      _category && selectedProvince && selectedCity && selectedSub;
    if (!isValid) {
      Alert.alert('Please set all fields!');
      return;
    }

    navigation.navigate('Detail', {
      category: _category,
      provinceId: parseInt(selectedProvince, 10),
      cityId: selectedCity,
      suburbId: selectedSub,
    });
  };

  return (
    <Container flex={1} backgroundColor={colors.appBackgroundColor}>
      <Container pl={20} pr={20} pt={16} style={styles.container} flex={1}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          {/* {isEnableLocation && ( */}
          <Switch
            title="Set Location"
            onChange={onSwitchLocation}
            value={useLocation}
          />
          {/* )} */}
          <Container mt={20}>
            <Location />
          </Container>
          <Container style={styles.mapContainer} mt={20}>
            <MapView
              style={styles.mapStyle}
              initialRegion={initialRegion}
              region={mapRegion}
              followsUserLocation={true}
              // ref={this.mapRef}
              zoomEnabled={true}
              showsUserLocation={true}
              customMapStyle={mapStyle}>
              <Marker
                draggable
                coordinate={mapRegion}
                title={'Current location'}
              />
            </MapView>
          </Container>
          <Container mt={20}>
            <CategorySingleSelector
              onSelect={setCategory}
              defaultValue={category ?? defaultCategory}
            />
            <BottomPicker
              key="province"
              placeholder="Select a Province"
              data={provincePickerItems}
              onChange={onChangeProvince}
              style={styles.picker}
              value={selectedProvince}
              // disabled={useLocation}
            />
            <BottomPicker
              key="city"
              placeholder="Select a City"
              data={useLocation ? everyCities ?? [] : cityPickerItems}
              onChange={onChangeCity}
              style={styles.picker}
              value={selectedCity}
              // disabled={useLocation}
            />
            <BottomPicker
              key="sub"
              placeholder="Select a Sub"
              data={useLocation ? everySuburbs ?? [] : subPickerItems}
              onChange={setSelectedSub}
              style={styles.picker}
              value={selectedSub}
              // disabled={useLocation}
            />
          </Container>

          <Container alignItems="center" mb={100}>
            <Button title="Next" width={340} height={40} onPress={onSubmit} />
          </Container>
        </KeyboardAwareScrollView>
      </Container>
    </Container>
  );
};

export default RequestItem;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
  },
  mapContainer: {
    width: 350,
    height: 200,
    borderRadius: 20,
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  picker: {
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 2,
    paddingHorizontal: 5,
    fontSize: 14,
  },
});
