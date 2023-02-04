import React, {useState, useCallback} from 'react';
import {View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {MstCategoryType} from '@app/generated/graphql-types';
import {Chip} from '@rneui/themed';
import CategorySelector from './CategorySelector';
import Icon from 'react-native-vector-icons/Feather';
import colors from '@app/contants/colors';
import Mix from '@app/assets/svgs/Mix';

const SearchInput = ({
  placeholder,
  onChangeText,
  onChangeCategories,
  defaultValue,
  defaultCategories = [],
  style,
}: any) => {
  const [isVisibleCategorySelector, setVisibleCategorySelector] =
    useState(false);
  const [categories, setCategories] = useState<MstCategoryType[]>([]);
  const [value, setValue] = useState(defaultValue ?? '');

  const onChangeSearchKey = () => {
    onChangeText(value);
  };

  const onPressFilterIcon = () => {
    setVisibleCategorySelector(true);
  };

  const onDoneSelectCategory = (selectedCategories: MstCategoryType[]) => {
    setVisibleCategorySelector(false);
    setCategories(selectedCategories);
    if (onChangeCategories) {
      onChangeCategories(selectedCategories);
    }
  };

  const _onPressSelectedCategory = useCallback(
    (item: MstCategoryType) => {
      setCategories(prev => {
        const _categories = [...defaultCategories, ...prev].filter(
          cat => cat.categoryId !== item.categoryId,
        );
        if (onChangeCategories) {
          onChangeCategories(_categories);
        }

        return _categories;
      });
    },
    [defaultCategories, onChangeCategories],
  );

  return (
    <View style={{marginVertical: 15}}>
      <View style={[styles.container, style]}>
        <Icon name="search" color={colors.text.label} size={20} />
        <TextInput
          style={styles.searchInput}
          placeholder={placeholder ?? 'Search Products...'}
          underlineColorAndroid="transparent"
          onChangeText={setValue}
          onSubmitEditing={onChangeSearchKey}
          value={value}
        />
        <TouchableOpacity onPress={onPressFilterIcon}>
          <Mix />
        </TouchableOpacity>

        <CategorySelector
          visible={isVisibleCategorySelector}
          onDone={onDoneSelectCategory}
          onClose={() => setVisibleCategorySelector(false)}
          multiple
          defaultValue={defaultCategories ?? []}
        />
      </View>

      <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 5}}>
        {[...defaultCategories, ...categories].map(item => (
          <Chip
            title={item.categoryName ?? ''}
            icon={{
              name: 'close',
              type: 'ion-icon',
              size: 16,
              color: colors.tintColor,
            }}
            onPress={() => _onPressSelectedCategory(item)}
            iconRight
            titleStyle={{
              fontSize: 12,
              color: colors.text.primary,
              fontFamily: 'Poppins-Regular',
            }}
            buttonStyle={{
              backgroundColor: colors.activeBackgroundColor,
              marginBottom: 5,
              marginLeft: 2,
            }}
          />
        ))}
      </View>
    </View>
  );
};

SearchInput.defaultProps = {
  onChangeText: () => {},
  onPressFilterIcon: () => {},
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.borderColorFade,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.appBackgroundColor,
  },
  searchInput: {
    flex: 1,
    marginLeft: 5,
    fontFamily: 'Poppins-Regular',
    color: colors.text.primary,
  },
  filterIcon: {
    padding: 10,
    margin: 15,
    height: 20,
    width: 20,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});

export default SearchInput;
