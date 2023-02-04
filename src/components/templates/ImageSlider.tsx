import React, {useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import FastImage from 'react-native-fast-image';
import ImageWithPlaceholder from './ImageWithPlaceholder';
import Container from './Container';
import colors from '@app/contants/colors';

type ImageSliderPropsType = {
  images: string[];
};

const windowWidth = Dimensions.get('window').width;
const sliderBoxWidth = windowWidth - 40;

const ImageSlider = ({images}: ImageSliderPropsType) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const onPressCurrentImage = (index: number) => {
    console.log(`image ${index} pressed`);
  };
  const onSliderImage = (index: number) => {
    setCurrentIndex(index);
  };

  const onPressThumbnail = (index: number) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) {
    return (
      <ImageWithPlaceholder
        source={{}}
        style={{width: sliderBoxWidth, height: 200}}
        resizeMode="contain"
      />
    );
  }

  return (
    <Container>
      <SliderBox
        firstItem={currentIndex}
        images={images}
        ImageComponent={ImageWithPlaceholder}
        sliderBoxHeight={200}
        parentWidth={sliderBoxWidth}
        onCurrentImagePressed={onPressCurrentImage}
        currentImageEmitter={onSliderImage}
        dotStyle={{display: 'none'}}
        paginationBoxVerticalPadding={20}
        resizeMethod={'resize'}
        resizeMode={'cover'}
        ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 5}}
        imageLoadingColor="#2196F3"
        LoaderComponent={() => null}
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 10}}
        contentContainerStyle={styles.tumbnailContainer}>
        {images.map((image: string, index: number) => (
          <TouchableOpacity
            onPress={() => onPressThumbnail(index)}
            style={{
              ...styles.thumbnail,
              ...(index === currentIndex ? styles.selected : {}),
            }}>
            <ImageWithPlaceholder
              source={{uri: image}}
              style={styles.thumbnailImage}
              resizeMode={'cover'}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Container>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({
  tumbnailContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  thumbnail: {
    marginHorizontal: 5,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: colors.appBackgroundColor,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  thumbnailImage: {
    width: 47,
    height: 47,
    borderRadius: 5,
  },
  selected: {
    borderColor: colors.activeBorderColor,
  },
});
