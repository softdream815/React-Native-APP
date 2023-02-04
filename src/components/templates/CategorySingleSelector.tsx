import React, {useState, useEffect} from 'react';
import {StyleSheet, Pressable} from 'react-native';
import Container from './Container';
import Text from './Text';
import Modal from './Modal';
import colors from '@app/contants/colors';
import Icon from 'react-native-vector-icons/Feather';
import Mix from '@app/assets/svgs/Mix';
import CategorySelector from './CategorySelector';
import {MstCategoryType} from '@app/generated/graphql-types';

type CategorySingleSelectorPropsType = {
  onSelect?: (category: MstCategoryType) => void;
  defaultValue?: MstCategoryType;
};

const CategorySingleSelector = ({
  onSelect,
  defaultValue,
}: CategorySingleSelectorPropsType) => {
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState<
    MstCategoryType | null | undefined
  >();

  useEffect(() => {
    setCategory(defaultValue);
  }, [defaultValue]);

  return (
    <Container>
      <Pressable
        style={styles.inputContainer}
        onPress={() => defaultValue === undefined && setShow(true)}>
        <Text>{category ? category.categoryName : 'Select a Category'}</Text>
        {defaultValue === undefined && <Mix />}
      </Pressable>
      <CategorySelector
        visible={show}
        onDone={(selectedCategories: MstCategoryType[]) => {
          setShow(false);
          setCategory(selectedCategories[0]);
          if (onSelect) {
            onSelect(selectedCategories[0]);
          }
        }}
        onClose={() => setShow(false)}
        defaultValue={category ? [category] : []}
      />
    </Container>
  );
};

export default CategorySingleSelector;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    height: 45,
    borderRadius: 10,
    borderColor: colors.borderColorFade,
    borderWidth: 1,
    backgroundColor: colors.appBackgroundColor,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});
