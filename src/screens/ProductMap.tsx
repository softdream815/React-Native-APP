import React, {useState, useEffect} from 'react';
import {StyleSheet, Alert, Dimensions, TouchableOpacity} from 'react-native';
import {
  Container,
  Text,
  Header,
  Location,
  ImageWithPlaceholder,
} from '@app/components/templates';
import SearchInput from '@app/components/templates/SearchInput';
import colors from '@app/contants/colors';
import MapView, {Marker, Callout} from 'react-native-maps';
import HMSMap, {
  HMSMarker,
  HMSInfoWindow,
  MapType,
} from '@hmscore/react-native-hms-map';
import Geolocation from '@react-native-community/geolocation';
import {getBrand} from 'react-native-device-info';
import {useGetSpeicalProducts} from '@app/hooks/useGetSpecialProducts';
import {IMAGE_PREFIX} from '@env';

const isHuawei = getBrand() === 'HUAWEI';
const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

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

const ProductMap = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [currentLatitude, setCurrentLatitude] = useState(-28.4793);
  const [currentLongitude, setCurrentLongitude] = useState(24.6727);
  const [categories, setCategories] = useState<number[]>([]);

  const {products, loading} = useGetSpeicalProducts(
    title,
    categories.join(','),
    null,
  );
  const getLocation = async () => {
    Geolocation.getCurrentPosition(
      position => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        setCurrentLatitude(latitude);
        setCurrentLongitude(longitude);
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
    if (navigation.isFocused()) {
      getLocation();
    }
  }, [navigation]);

  const _onChangeSearchCategories = (_categories: number[]) => {
    setCategories(_categories);
  };

  const onPressProduct = (product) => {
    navigation.navigate('HomeStack', {
      screen: 'Product',
      params: {product},
    });
  };

  const renderHMSMap = () => {};

  const renderGoogleMap = () => {
    return (
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: currentLatitude,
          longitude: currentLongitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        region={{
          latitude: currentLatitude,
          longitude: currentLongitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        customMapStyle={mapStyle}>
        {products.length > 0 &&
          products.map((marker, index) => {
            const markerImage = marker?.productImage ?? '';
            if (marker?.latitude && marker?.longitude) {
              return (
                <Marker
                  key={index}
                  coordinate={{
                    latitude:
                      index === 1
                        ? currentLatitude
                        : parseFloat(marker?.latitude),
                    longitude:
                      index === 1
                        ? currentLongitude
                        : parseFloat(marker?.longitude),
                  }}
                  image={{uri: 'custom_pin'}}>
                  <TouchableOpacity
                    onPress={() => onPressProduct(marker)}
                    activeOpacity={0.9}>
                    <Container
                      pl={5}
                      pr={5}
                      pt={5}
                      pb={5}
                      style={{borderRadius: 10}}>
                      <ImageWithPlaceholder
                        source={
                          markerImage
                            ? {uri: `${IMAGE_PREFIX}${markerImage}`}
                            : require('@app/assets/images/default_image.png')
                        }
                        style={{width: 80, height: 80, borderRadius: 5}}
                        resizeMode={'contain'}
                      />
                    </Container>
                  </TouchableOpacity>
                </Marker>
              );
            } else {
              return <></>;
            }
          })}
      </MapView>
    );
  };

  return (
    <Container flex={1} backgroundColor={colors.appBackgroundColor}>
      <Header title="Products On Map" />
      <Container pl={10} pr={10} backgroundColor="transparent">
        <Location />
        <SearchInput
          placeholder="Search Business..."
          onChangeText={setTitle}
          onChangeCategories={_onChangeSearchCategories}
          defaultValue={title}
          defaultCategories={[]}
          style={{backgroundColor: '#ffffff'}}
        />
      </Container>
      <Container style={styles.container}>
        {isHuawei ? renderHMSMap() : renderGoogleMap()}
      </Container>
    </Container>
  );
};

export default ProductMap;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
  },
  mapStyle: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
});
