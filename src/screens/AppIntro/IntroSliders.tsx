import React, {useState} from 'react';
import {Text, Container, GradientButton} from '@app/components/templates';
import {StatusBar, TouchableOpacity, StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import CircleBar from '@app/assets/svgs/Intro/sliders/CircleBar';
import Illustration1 from '@app/assets/svgs/Intro/sliders/Illustration1';
import Illustration2 from '@app/assets/svgs/Intro/sliders/Illustration2';
import Illustration3 from '@app/assets/svgs/Intro/sliders/Illustration3';
import Illustration4 from '@app/assets/svgs/Intro/sliders/Illustration4';
import Illustration5 from '@app/assets/svgs/Intro/sliders/Illustration5';
import Shadow from '@app/assets/svgs/Intro/sliders/Shadow';
import colors from '@app/contants/colors';
import {ifIphoneX} from 'rn-iphone-helper';

type SliderDataType = {
  title: string;
  image: JSX.Element;
  description: string;
};

const SliderData: SliderDataType[] = [
  {
    title: 'Request for quotes with reverse bidding & live chat',
    image: <Illustration1 />,
    description: 'Request for quotes & obtain multiple quotes in one request.',
  },
  {
    title: 'Purchase Items',
    image: <Illustration2 />,
    description: 'Purchase products at your leisure',
  },
  {
    title: 'Hire Items',
    image: <Illustration3 />,
    description: 'Hire products & services by adding a date & time',
  },
  {
    title: 'Bid Items',
    image: <Illustration4 />,
    description: 'Bid on products to get the best deal.',
  },
  {
    title: 'All on ONE Mobile App',
    image: <Illustration5 />,
    description: '',
  },
];

const IntroSliders = () => {
  const navigation = useNavigation();
  const _onDone = () => {
    AsyncStorage.setItem('isDoneIntro', 'true');
    navigation.replace('MainDrawer');
  };
  const [sliderIndex, setSliderIndex] = useState(0)

  const _renderItem = ({item}: any) => (
    <Container
      flex={1}
      pr={25}
      pl={25}
      justifyContent="center"
      alignItems="center">
      {item.image}
      <Shadow />
      <Text
        color="active"
        size={'xl'}
        lineHeight={35}
        align="center"
        weight="bold"
        pr={10}
        pl={10}>
        {item.title}
      </Text>
      <Text mt={20} align="center" lineHeight={20} size={'xs'}>
        {item.description}
      </Text>
    </Container>
  );

  return (
    <Container flex={1} pb={100}>
      <StatusBar hidden />
      <AppIntroSlider
        renderItem={_renderItem}
        data={SliderData}
        onSlideChange={setSliderIndex}
        onDone={_onDone}
        showNextButton={false}
        showPrevButton={false}
        showDoneButton={false}
        activeDotStyle={{backgroundColor: colors.text.active}}
      />
      {sliderIndex === 0 && (
        <Container
          pr={27}
          pl={27}
          style={styles.buttonContainer}
          backgroundColor="transparent">
          <GradientButton title="Get Started" onPress={_onDone} />
        </Container>
      )}
      <TouchableOpacity style={styles.skipButton} onPress={_onDone}>
        <CircleBar />
      </TouchableOpacity>
    </Container>
  );
};

const styles = StyleSheet.create({
  skipButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '100%',
    position: 'absolute',
    ...ifIphoneX(
      {
        bottom: 40,
      },
      {
        bottom: 10,
      },
    ),
  },
});

export default IntroSliders;
