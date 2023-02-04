import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import BarTop from '@app/assets/svgs/Intro/BarTop';
import PinkTop from '@app/assets/svgs/Intro/PinkTop';
import PinkBottom from '@app/assets/svgs//Intro//PinkBottom';
import BarBottom from '@app/assets/svgs/Intro/BarBottom';
import CircleCenteredLogo from '@app/assets/svgs/Intro/CircleCenteredLogo';
import WelcomeIntro from '@app/assets/svgs/Intro/WelcomeIntro';
import {Text, Container, GradientButton} from '@app/components/templates';
import {ifIphoneX} from 'rn-iphone-helper';

type WelcomeScreenProps = {
  onContinue: () => void;
};

const Welcome = ({onContinue}: WelcomeScreenProps) => {
  return (
    <Container flex={1} justifyContent="center" alignItems="center">
      <View style={styles.topPinkBackground}>
        <PinkTop />
      </View>
      <BarTop />
      <Container justifyContent="center" pt={20} pb={20}>
        <CircleCenteredLogo />
        <Image
          source={require('@app/assets/images/logos/EzyFindLogoTrans.png')}
          style={styles.logo}
        />
      </Container>
      <Container pr={27} pl={27} alignItems="center" pb={20}>
        <WelcomeIntro />
        <Text align="center" lineHeight={20} size="xs" mt={20}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae egestas
          turpis tellus molestie quis vitae nec morbi. Nunc egestas ac ut diam.
        </Text>
      </Container>
      <BarBottom />
      <View style={styles.bottomPinkBackground}>
        <PinkBottom />
      </View>
      <Container
        pr={27}
        pl={27}
        style={styles.buttonContainer}
        backgroundColor="transparent">
        <GradientButton title="Continue" onPress={onContinue} />
      </Container>
    </Container>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  topPinkBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  bottomPinkBackground: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  logo: {
    width: 145,
    height: 92,
    position: 'absolute',
  },
  textContainer: {
    paddingHorizontal: 27,
    alignItems: 'center',
    paddingBottom: 20,
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
