import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import {Container, Text, Location} from '@app/components/templates';
import {ListScreenProps} from '@app/navigation/FindBuisnessStack';
import colors from '@app/contants/colors';
import {useGetBusiness} from './hooks/useGetBusiness';
import SearchInput from '@app/components/templates/SearchInput';
import BusinessItem from './BusinessItem';
import {MstCompanyDtoType} from '@app/generated/graphql-types';

const ListBusiness = ({navigation}: ListScreenProps) => {
  const [size, setSize] = useState(10);
  const [categories, setCategories] = useState(null);
  const [title, setTitle] = useState('');
  const [data, setData] = useState<MstCompanyDtoType[]>([]);
  const {loading, refetch, businesses} = useGetBusiness({size, title});

  useEffect(() => {
    if (businesses) {
      setData(businesses.result ?? []);
    }
  }, [businesses]);

  const renderItem = ({item, index}: any) => {
    return (
      <BusinessItem
        item={item}
        onPressItem={() => navigation.navigate('Business', {business: item})}
      />
    );
  };

  const getMore = () => {
    if (loading || size > (businesses?.count ?? 0)) {
      return;
    }
    setSize(size + 10);
  };
  const _onChangeSearchText = (value: string) => {
    setTitle(value);
  };
  const _onChangeSearchCategories = () => {}

  return (
    <Container flex={1} backgroundColor={colors.appBackgroundColor}>
      <Container pl={20} pr={20} pt={16} style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          ListHeaderComponent={() => {
            return (
              <Container>
                <Location />
                <SearchInput
                  placeholder="Search Business..."
                  onChangeText={_onChangeSearchText}
                  onChangeCategories={_onChangeSearchCategories}
                  defaultValue={title}
                />
              </Container>
            );
          }}
          ListFooterComponent={() => {
            return loading ? (
              <ActivityIndicator size="large" color="#000" />
            ) : null;
          }}
          onEndReached={getMore}
          onEndReachedThreshold={0.5}
          showsVerticalScrollIndicator={false}
        />
      </Container>
    </Container>
  );
};

export default ListBusiness;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
  },
});
