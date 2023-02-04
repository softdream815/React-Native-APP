import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text, Container} from '@app/components/templates';
import {ChevronBack} from '@app/assets/svgs/Menu';
import {useNavigation} from '@react-navigation/native';

export type AuthenticationHeaderPropsType = {
  title: string;
};

const Header = ({title}: AuthenticationHeaderPropsType) => {
  const navigation = useNavigation();
  return (
    <Container
      pt={10}
      pb={10}
      dir="row"
      alignItems="center"
      backgroundColor="transparent"
      style={{width: '100%'}}>
      <TouchableOpacity onPress={navigation.goBack}>
        <ChevronBack />
      </TouchableOpacity>
      <Text size="lg" weight="semibold" ml={20} uppercase lineHeight={30}>
        {title}
      </Text>
    </Container>
  );
};

export default Header;
