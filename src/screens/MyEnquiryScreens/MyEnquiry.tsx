import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {Container, Header, Location} from '@app/components/templates';
import colors from '@app/contants/colors';
import Icon from 'react-native-vector-icons/Feather';
import Mix from '@app/assets/svgs/Mix';
import {useGetEnquiryItems} from '@app/hooks/useGetEnquiryItems';
import {MstCustomerEnquiryType} from '@app/generated/graphql-types';
import EnquiryItem from './EnquiryItem';

const MyEnquiry = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [size, setSize] = useState(10);
  const [enquries, setEnquries] = useState<MstCustomerEnquiryType[]>([]);

  const {enquiryItems, total, loading, refetch} = useGetEnquiryItems({size});

  useEffect(() => {
    refetch();
  }, [refetch, size]);

  const onChangeSearchKey = (_keyword: string) => {
    setKeyword(_keyword);
  };

  const _renderItem = ({item}) => {
    return <EnquiryItem item={item} />;
  };

  const loadMore = () => {
    if (loading || enquiryItems.length === total) {
      return false;
    }
    setSize(size + 10);
  };

  useEffect(() => {
    if (enquiryItems && enquiryItems.length) {
      setEnquries(enquiryItems);
    }
  }, [enquiryItems]);

  return (
    <Container flex={1} backgroundColor={colors.appBackgroundColor}>
      <Header title="My Enquiry" />
      <Container pl={20} pr={20} style={styles.container}>
        {/* Enquiry Flat List */}
        <FlatList
          ListHeaderComponent={
            <Container mt={25}>
              <Location />
              <View style={styles.searchContainer}>
                <Icon name="search" color={colors.text.label} size={20} />
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search Business..."
                  underlineColorAndroid="transparent"
                  onChangeText={onChangeSearchKey}
                />
                <TouchableOpacity>
                  <Mix />
                </TouchableOpacity>
              </View>
            </Container>
          }
          data={enquries.filter(enquriy =>
            enquriy.mstCompanyLimited?.companyName?.toLowerCase()
              .includes(keyword.toLowerCase()),
          )}
          renderItem={_renderItem}
          ListEmptyComponent={null}
          ListFooterComponent={loading ? <ActivityIndicator /> : null}
          onEndReached={loadMore}
          onEndReachedThreshold={0.1}
          showsVerticalScrollIndicator={false}
        />
      </Container>
    </Container>
  );
};

export default MyEnquiry;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#ffffff',
    flex: 1,
  },
  searchContainer: {
    marginTop: 10,
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
});
