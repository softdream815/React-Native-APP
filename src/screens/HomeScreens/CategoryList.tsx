import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {Container, Text, ImageWithPlaceholder} from '@app/components/templates';
import {useGetMainCategories} from '@app/hooks/useGetMainCategories';
import {IMAGE_PREFIX} from "@env";
import {MstCategoryType} from '@app/generated/graphql-types';
import colors from '@app/contants/colors';

type CategoryListPropsType = {
  selectedCategory?: MstCategoryType;
  onSelectCategory?: (category: MstCategoryType) => void;
};

const CategoryList = ({
  selectedCategory,
  onSelectCategory,
}: CategoryListPropsType) => {
  const {categories, loading} = useGetMainCategories();
  const onPressCategory = (category: MstCategoryType) => {
    onSelectCategory && onSelectCategory(category);
  };
  return (
    <Container
      dir="row"
      alignItems="center"
      justifyContent="space-between"
      mt={10}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* {loading && (
          <Container
            style={{
              width: '100%',
            }}
            alignItems="center"
            justifyContent="center">
            <ActivityIndicator />
          </Container>
        )} */}
        {categories.map(category => (
          <Container
            alignItems="center"
            ml={5}
            mr={5}
            pt={5}
            pb={5}
            key={category?.categoryId}>
            <TouchableOpacity
              style={{
                ...styles.itemContainer,
                backgroundColor:
                  selectedCategory?.categoryId === category?.categoryId
                    ? colors.activeBackgroundColor
                    : 'white',
              }}
              onPress={() => onPressCategory(category)}>
              <ImageWithPlaceholder
                source={{uri: `${IMAGE_PREFIX}${category?.categoryIcon}`}}
                style={{width: 30, height: 30}}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text mt={10} color="active" size="xs">
              {category?.categoryName}
            </Text>
          </Container>
        ))}
      </ScrollView>
    </Container>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  itemContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 30,
    backgroundColor: '#ffffff',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
