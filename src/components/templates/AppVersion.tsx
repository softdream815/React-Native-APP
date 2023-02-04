import React from 'react';
import Text from './Text';
import VersionInfo from 'react-native-version-info';

const AppVersion = () => {
  return (
    <Text underline size="xxs">
      App Version {VersionInfo.appVersion}
    </Text>
  );
};

export default AppVersion;
