import {StyleSheet} from 'react-native';
import React from 'react';
import {CheckBox as RNCheckBox} from '@rneui/themed';
import Text from './Text';
import colors from '@app/contants/colors';
import {
  UnCheckedBox,
  CheckedBox,
  CheckedBoxFilled,
} from '@app/assets/svgs/Authentication';

export type CheckBoxPropTypes = {
  key?: string;
  checked: boolean;
  title: string | JSX.Element;
  titleMl?: number;
  titleMt?: number;
  filled?: boolean;
  onPress: () => void;
};

const Checkbox = ({
  key,
  checked,
  title,
  onPress,
  titleMl,
  titleMt,
  filled,
}: CheckBoxPropTypes) => {
  return (
    <RNCheckBox
      key={key}
      checked={checked}
      onPress={onPress}
      checkedColor={colors.text.active}
      title={
        <Text
          ml={titleMl || 20}
          size="xs"
          lineHeight={18}
          color="secondary"
          mt={titleMt || 0}>
          {title}
        </Text>
      }
      checkedIcon={filled ? <CheckedBoxFilled /> : <CheckedBox />}
      uncheckedIcon={<UnCheckedBox />}
      wrapperStyle={{
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}
    />
  );
};

export default Checkbox;

const styles = StyleSheet.create({});
