import React, {useState} from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {Container} from '@app/components/templates';
import {RegisterScreenProps} from '@app/navigation/AuthStack';
import Header from './Header';
import {BackgroundCircle} from '@app/assets/svgs/Authentication';
import IndividualForm from './IndividualRegisterForms/IndividualForm';
import BusinessForm from './BusinessRegisterForms/BusinessForm';

const Register = ({navigation, route}: RegisterScreenProps) => {
  const accountIsBusiness = route.params.isBusiness;
  const duration = route.params.duration;
  const plan = route.params.plan;

  return (
    <Container flex={1} backgroundColor="#ffffff">
      <View style={{position: 'absolute', top: 0, right: 0}}>
        <BackgroundCircle />
      </View>
      <SafeAreaView>
        <Header title="Sign Up" />
      </SafeAreaView>
      <Container backgroundColor="transparent">
        {accountIsBusiness ? (
          <BusinessForm duration={duration} plan={plan} />
        ) : (
          <IndividualForm />
        )}
      </Container>
    </Container>
  );
};

export default Register;

const styles = StyleSheet.create({});
