import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {useGetMyRequests} from '@app/screens/MyRequestsScreens/hooks/useGetMyRequests';
import {Container, Text, ImageWithPlaceholder} from '@app/components/templates';
import {IMAGE_PREFIX} from '@env';
import fileExtention from 'file-extension';
import colors from '@app/contants/colors';
import moment from 'moment';
import {MyRequestScreenProps} from '@app/navigation/MyRequestsStack';

const MyRequests = ({navigation}: MyRequestScreenProps) => {
  const [size, setSize] = useState(20);
  const [items, setItems] = useState([]);
  const {loading, myRequestItems} = useGetMyRequests({size: size});

  useEffect(() => {
    if (myRequestItems && myRequestItems?.result) {
      setItems(myRequestItems?.result || []);
    }
  }, [myRequestItems]);

  const renderItem = ({item, index}: any) => {
    const uploadedFiles = item.mapItemRequestUploadDto;
    let imagePath = item.itemImagePath;
    if (item.itemImagePath == null && uploadedFiles) {
      let images = uploadedFiles.map(file => {
        const extOfFile = fileExtention(file.uploadPath);
        if (
          extOfFile === 'jpg' ||
          extOfFile === 'jpeg' ||
          extOfFile === 'png' ||
          extOfFile === 'gif'
        ) {
          return file.uploadPath;
        }
      });
      images = images.filter(url => url !== undefined);
      imagePath = images[0];
    }
    return (
      <TouchableOpacity
        onPress={() => {
          return navigation.navigate('RequestItemDetail', { data: item });
        }}>
        <Container
          dir="row"
          alignItems="center"
          pt={5}
          pb={5}
          style={{borderBottomColor: colors.borderColor, borderBottomWidth: 1}}>
          <ImageWithPlaceholder
            source={{uri: `${IMAGE_PREFIX}${imagePath}`}}
            style={{width: 80, height: 80}}
            resizeMode="contain"
          />
          <Container ml={20}>
            <Text color="primary" weight="medium">
              {item.itemRequestTitle}
            </Text>
            <Text mt={5} mb={5}>
              {item.itemCategory}
            </Text>
            <Text>
              Request Date:{' '}
              <Text>{moment(item.itemRequestDate).format('DD MMM YYYY')}</Text>
            </Text>
          </Container>
        </Container>
      </TouchableOpacity>
    );
  };

  const getMore = () => {
    if (myRequestItems && size < myRequestItems?.count) {
      setSize(size + 20);
    }
  };

  return (
    <Container flex={1} backgroundColor={colors.appBackgroundColor}>
      <Container pl={20} pr={20} pt={16} style={styles.container}>
        <FlatList
          data={items}
          keyExtractor={item => item?.itemRequestID}
          ListFooterComponent={() => {
            return loading ? (
              <ActivityIndicator size="large" color="#000" />
            ) : null;
          }}
          renderItem={renderItem}
          onEndReached={getMore}
          onEndReachedThreshold={0.5}
          showsVerticalScrollIndicator={false}
        />
      </Container>
    </Container>
  );
};

export default MyRequests;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    paddingBottom: 100,
  },
});
