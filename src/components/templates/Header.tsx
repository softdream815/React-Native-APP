import {StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Container from './Container';
import Text from './Text';
import colors from '@app/contants/colors';
import {useNavigation} from '@react-navigation/native';

type HeaderPropTypes = {
  title?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
};

const Header = ({title, leftIcon, rightIcon}: HeaderPropTypes) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Container
        backgroundColor="transparent"
        dir="row"
        justifyContent="space-between"
        alignItems="center"
        mb={20}>
        {leftIcon ? (
          leftIcon
        ) : (
          <TouchableOpacity onPress={navigation.goBack}>
            <Icon name="chevron-back" size={32} color={colors.text.secondary} />
          </TouchableOpacity>
        )}
        <Text color="primary" weight="medium" size="md" lineHeight={24}>
          {title}
        </Text>
        {rightIcon ? rightIcon : <TouchableOpacity />}
      </Container>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({});