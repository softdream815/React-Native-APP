import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Modal from './Modal';
import Container from './Container';
import Text from './Text';
import GradientButton from './GradientButton';
import CheckBox from './Checkbox';
import {useGetMainCategories} from '@app/hooks/useGetMainCategories';
import {useGetSubCategories} from '@app/hooks/useGetSubCategories';
import {useSelector} from 'react-redux';
import {UserType} from '@app/types';
import {MstCategoryType} from '@app/generated/graphql-types';
import colors from '@app/contants/colors';
import Icon from 'react-native-vector-icons/Ionicons';

type CategorySelectorPropsType = {
  visible: boolean;
  multiple?: boolean;
  onDone: (selectedCategories: MstCategoryType[]) => void;
  onClose: () => void;
  defaultValue?: MstCategoryType[];
};

const CategorySelector = (props: CategorySelectorPropsType) => {
  const [categoryId, setCategoryId] = useState<number>(0);
  const [selectedCategories, selectCategory] = useState<MstCategoryType[]>([]);
  const maxCount = props.multiple ? 10 : 1;
  const user: UserType = useSelector((state: any) => state.user);
  const {categories} = useGetMainCategories();
  const {
    getSubCategories,
    categories: subCategories,
    loading,
  } = useGetSubCategories(user.token, categoryId);

  const _onPressCategory = (item: MstCategoryType) => {
    setCategoryId(item.categoryId);
  };

  useEffect(() => {
    if (categories?.length) {
      setCategoryId(categories[0]?.categoryId ?? 0);
    }
  }, [categories]);

  // useEffect(() => {
  //   if (
  //     props.defaultValue &&
  //     props.defaultValue.length &&
  //     subCategories.length
  //   ) {
  //     // let _selectedCategory = props.defaultValue.map(id => {
  //     //   return subCategories.find(cat => cat?.categoryId === id);
  //     // });
  //     // _selectedCategory = _selectedCategory.filter(cat => cat !== undefined);
  //     selectCategory([...props.defaultValue]);
  //   }
  // }, [subCategories, props.defaultValue]);

  useEffect(() => {
    getSubCategories();
  }, [getSubCategories, categoryId]);

  const _renderCategories = () => {
    return categories?.map((item, index) => {
      if (item) {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => _onPressCategory(item)}
            style={{
              ...styles.category,
              ...(categoryId === item.categoryId
                ? styles.selectedCategory
                : {}),
            }}>
            <Text color="primary" lineHeight={18}>
              {item?.categoryName}
            </Text>
            <Icon
              name="chevron-forward"
              size={18}
              color={colors.text.primary}
            />
          </TouchableOpacity>
        );
      }

      return null;
    });
  };

  const _onPressDone = () => {
    if (props.onDone) {
      props.onDone(selectedCategories);
      selectCategory([]);
    }
  };
  const _onPressSubCategory = (item: any) => {
    if (
      selectedCategories.findIndex(cat => cat.categoryId === item.categoryId) >
      -1
    ) {
      selectCategory(prev =>
        prev.filter(c => c.categoryId !== item.categoryId),
      );
      return;
    }
    if (props.multiple && selectedCategories.length === maxCount) {
      Alert.alert(`You can select up to ${maxCount} categories`);
      return;
    }
    if (props.multiple) {
      selectCategory(prev => [...prev, item]);
    } else {
      selectCategory([item]);
    }
  };

  const _renderSubCategory = () => {
    const subCategoriesItems = subCategories?.map((item, i) => {
      return (
        <CheckBox
          key={i.toString()}
          checked={
            selectedCategories.findIndex(
              cat => cat.categoryId === item?.categoryId,
            ) > -1
          }
          title={item?.categoryName || ''}
          onPress={() => _onPressSubCategory(item)}
          filled
          titleMl={10}
          titleMt={-2}
        />
      );
    });

    return subCategoriesItems;
  };

  const _onPressReset = () => {
    selectCategory([]);
  };

  return (
    <Modal visible={props.visible} bottomModal>
      <SafeAreaView>
        <Container
          dir="row"
          justifyContent="space-between"
          alignItems="center"
          pr={10}
          pl={10}
          pt={20}
          pb={10}
          style={styles.header}>
          <Text size="lg" weight="medium" lineHeight={24} color="primary">
            Filter
          </Text>
          <TouchableOpacity onPress={props.onClose}>
            <Icon name="close" size={28} color={colors.text.primary} />
          </TouchableOpacity>
        </Container>
        <Container dir="row" style={{height: 352}}>
          <Container
            style={{
              borderRightWidth: 2,
              borderRightColor: colors.borderColorFade,
            }}>
            {_renderCategories()}
          </Container>
          <Container
            pr={10}
            style={{borderBottomColor: '#E5D9DC', borderBottomWidth: 1}}>
            <ScrollView
              contentContainerStyle={styles.subcategoryContentContainer}>
              {loading && subCategories?.length === 0 && (
                <Container flex={1}>
                  <ActivityIndicator size="small" />
                </Container>
              )}
              {_renderSubCategory()}
            </ScrollView>
          </Container>
        </Container>
        <Container
          pt={20}
          pl={20}
          pr={20}
          style={styles.footer}
          dir="row"
          justifyContent="space-between"
          alignItems="center">
          <TouchableOpacity onPress={_onPressReset}>
            <Text color="primary" weight="medium">
              Reset
            </Text>
          </TouchableOpacity>
          <GradientButton
            title="Apply"
            style={{width: 100}}
            onPress={_onPressDone}
            disabled={selectedCategories.length === 0}
          />
        </Container>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomColor: '#E5D9DC',
    borderBottomWidth: 1,
  },
  selectedCategory: {
    backgroundColor: '#FFE1E4',
  },
  category: {
    borderBottomColor: '#E5D9DC',
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
    width: 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footer: {
    borderTopColor: '#E5D9DC',
    borderTopWidth: 1,
  },
  subcategoryContentContainer: {
    alignItems: 'flex-start',
  },
});

export default CategorySelector;
