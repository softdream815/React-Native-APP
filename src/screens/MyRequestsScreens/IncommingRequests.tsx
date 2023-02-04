import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {useGetIncomingRequests} from '@app/screens/MyRequestsScreens/hooks/useGetIncomingRequests';
import {Container, Text, ImageWithPlaceholder} from '@app/components/templates';
import {IMAGE_PREFIX} from '@env';
import fileExtention from 'file-extension';

import colors from '@app/contants/colors';
import moment from 'moment';

const IncomingRequests = ({navigation}) => {
  const [size, setSize] = useState(20);
  const [items, setItems] = useState([]);
  const {loading, incomingRequestItems} = useGetIncomingRequests({size: size});

  useEffect(() => {
    if (incomingRequestItems && incomingRequestItems?.result) {
      setItems(incomingRequestItems?.result || []);
    }
  }, [incomingRequestItems]);

  const renderItem = ({item, index}: any) => {
    const uploadedFiles = item.mapItemRequestUploadDto;
    let imagePath = item.itemImagePath;
    if (item.itemImagePath == null && uploadedFiles) {
      let images = uploadedFiles.map(file => {
        const extOfFile = fileExtention(file.filePath);
        if (
          extOfFile === 'jpg' ||
          extOfFile === 'jpeg' ||
          extOfFile === 'png' ||
          extOfFile === 'gif'
        ) {
          return file.uploadPath;
        }
      });
      images = images.filter(url => url !== null);
      imagePath = images[0];
    }
    return (
      <TouchableOpacity
        onPress={() => {
          return navigation.navigate('IncomingRequestDetail', { data: item });
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
    if (incomingRequestItems && size < incomingRequestItems?.count) {
      setSize(size + 20);
    }
  };

  return (
    <Container flex={1} backgroundColor={colors.appBackgroundColor}>
      <Container pl={20} pr={20} pt={16} style={styles.container}>
        <FlatList
          data={items}
          keyExtractor={(item, i) => item?.itemRequestID}
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

export default IncomingRequests;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    paddingBottom: 100,
  },
});
