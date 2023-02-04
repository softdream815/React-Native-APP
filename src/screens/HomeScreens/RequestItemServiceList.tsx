import React from 'react';
import {useGetRequestItemServiceList} from '@app/hooks/useGetRequestItemServiceList';
import {
  StyleSheet,
  FlatList,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {
  Container,
  Text,
  Card,
  ImageWithPlaceholder,
} from '@app/components/templates';
import {IMAGE_PREFIX} from '@env';
import {useGetCategories} from '@app/hooks/useGetAllCategories';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '@app/contants/colors';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootStateType} from '@app/types';

type RequestItemServiceListPropsType = {
  domainCategoryIds?: string;
  category?: number;
  subCategoryId?: number;
};

const RequestItemServiceList = (props: RequestItemServiceListPropsType) => {
  const {loading, requestServiceItems} = useGetRequestItemServiceList(props);
  const navigation = useNavigation();
  const user = useSelector((state: RootStateType) => state.user);
  const {categories} = useGetCategories(user.token, true);

  const onPressItem = (item) => {
    // console.log(item);
    const category = categories?.find(
      cat => cat?.categoryId === item.subCategoryID,
    );
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'RequestItemStack',
          params: {
            screen: 'RequestItem',
            params: {
              defaultCategory: category,
            },
          },
        },
      ],
    });
  };
  const renderItem = ({item}: any) => {
    const imageUri = `${IMAGE_PREFIX}${item.thumbNailPath}`;
    return (
      <Card pl={5} pr={5} pb={5} pt={5}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => onPressItem(item)}>
          <Container style={{borderRadius: 10, overflow: 'hidden'}}>
            <ImageWithPlaceholder
              style={styles.image}
              source={{uri: imageUri}}
              resizeMode="contain"
            />
            <View style={styles.overload}>
              {/* <Image
                source={require('../../assets/images/request_overlay.png')}
                style={{width: 200}}
                resizeMode="contain"
              /> */}
              <Text
                style={styles.serviceTitle}
                color="white"
                weight="semibold"
                size="md"
                lineHeight={24}>
                {item.itemRequestServiceTitle}
              </Text>
            </View>
          </Container>
          <Container
            mt={15}
            pl={10}
            pr={10}
            pb={5}
            dir="row"
            alignItems="center"
            justifyContent="space-between">
            <Text color="active" weight="semibold">
              Request for Quotes
            </Text>
            <Icon name="chevron-forward" size={18} color={colors.text.active} />
          </Container>
        </TouchableOpacity>
      </Card>
    );
  };

  return (
    <Container ml={-10}>
      <FlatList
        data={requestServiceItems}
        horizontal
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        extraData={loading}
        showsHorizontalScrollIndicator={false}
        // ListHeaderComponent={loading && <ActivityIndicator />}
      />
    </Container>
  );
};

export default RequestItemServiceList;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
  overload: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#3C031EBB',
    width: '100%',
    height: 70,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  serviceTitle: {
    // width: 190,
    // position: 'absolute',
    // top: 150,
    // left: 10,
  },
});
