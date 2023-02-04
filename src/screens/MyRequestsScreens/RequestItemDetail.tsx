import React, {useState, useEffect, useMemo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {RequestItemDetailScreenProps} from '@app/navigation/MyRequestsStack';
import {
  Container,
  Text,
  ImageSlider,
  TextInput,
} from '@app/components/templates';
import {IMAGE_PREFIX} from '@env';
import fileExtention from 'file-extension';
import colors from '@app/contants/colors';
import moment from 'moment';
import {MstItemRequestDtoType} from '@app/generated/graphql-types';
import BookPin from '@app/assets/svgs/BookPin';
import PaperPlane from '@app/assets/svgs/PaperPlane';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FontawesomeIcon from 'react-native-vector-icons/FontAwesome';
import {useGetTopLevelResponse} from './hooks/useGetTopLevelResponseItems';
import {useGetHierarchyResponses} from './hooks/useGetHierachyResponseItems';
import {Avatar} from '@rneui/themed';

const RequestItemDetail = (props: RequestItemDetailScreenProps) => {
  const data: MstItemRequestDtoType = props.route.params.data;
  const imageFiles = data.itemImagePath
    ? [`${IMAGE_PREFIX}${data.itemImagePath}`]
    : [];
  const documents: any[] = [];

  const files = data.mapItemRequestUploadDto;
  if (files) {
    files.forEach((file: any) => {
      const extOfFile = fileExtention(file.uploadPath);
      if (
        extOfFile === 'jpg' ||
        extOfFile === 'jpeg' ||
        extOfFile === 'png' ||
        extOfFile === 'gif'
      ) {
        const fullUrl = `${IMAGE_PREFIX}${file.uploadPath}`;
        imageFiles.push(fullUrl);
      } else if (
        extOfFile === 'doc' ||
        extOfFile === 'docx' ||
        extOfFile === 'pdf' ||
        extOfFile === 'xls' ||
        extOfFile === 'xlsx'
      ) {
        documents.push({...file, ext: extOfFile});
      }
    });
  }
  const {topResponses} = useGetTopLevelResponse(
    data.itemRequestID?.toString() ?? '',
  );
  // const {responses} = useGetHierarchyResponses(
  //   data.itemRequestID?.toString() ?? '',
  // );

  const msgItems = useMemo(() => {
    let companies = topResponses.map(response => ({
      target: {
        targetName: response?.company?.companyName,
        targetId: response?.companyId,
      },
      msgs: [response],
    }));
    // const msgs = [...responses];
    // msgs.sort((a, b) => a?.itemResponseId - b?.itemResponseId);

    // msgs.forEach(msg => {
    //   const replyToId = msg?.replyToId;
    //   // if (replyToId) {
    //   companies.forEach((company, index) => {
    //     const containIndex = company.msgs.findIndex(
    //       m => m?.itemResponseId === replyToId,
    //     );
    //     if (containIndex > -1) {
    //       companies[index].msgs.push(msg);
    //     }
    //   });
    //   // }
    // });
    return companies;
  }, [topResponses]);

  const onPressDownloadFile = (file: any) => {};

  const onPressMsg = (msg: any) => {
    props.navigation.navigate('RequestChat', {request: data, msg: msg, isUser: true});
  };

  return (
    <Container flex={1} backgroundColor={colors.appBackgroundColor}>
      <Container pl={20} pr={20} pt={16} style={styles.container}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <ImageSlider images={imageFiles} />

          <Container mt={20}>
            <Text weight="semibold" size="md" color="primary" lineHeight={20}>
              {data.itemRequestTitle}
            </Text>
            <Text mt={10}>
              Category:{' '}
              <Text weight="semibold" color="primary">
                {data.itemCategory}
              </Text>
            </Text>
            <Text mt={5}>
              Request Date:{' '}
              <Text weight="semibold" color="primary">
                {moment(data.itemRequestDate).format('YYYY-MM-DD')}
              </Text>
            </Text>
            <Text mt={5}>
              Request Status:{' '}
              <Text color="green" weight="bold">
                {data.itemRequestStatus}
              </Text>
            </Text>
            <Text mt={5}>
              Suburb:{' '}
              <Text weight="semibold" color="primary">
                {data.suburb}
              </Text>
            </Text>
            <Text mt={10} color="primary">
              Description:{' '}
            </Text>
            <Text mt={5}>{data.itemRequestDescription}</Text>
          </Container>
          <Container mt={20} style={styles.card}>
            <Container
              pt={12}
              pb={12}
              pl={10}
              pr={10}
              backgroundColor={colors.borderColorFade}
              ml={-1}
              mr={-1}
              style={styles.cardHeader}>
              <Text color="primary">Documents</Text>
            </Container>
            <Container
              pt={10}
              pb={10}
              pl={10}
              pr={10}
              backgroundColor="transparent">
              {documents.length ? (
                <Container dir="row">
                  {documents.map(file => {
                    if (file.ext === 'pdf') {
                      return (
                        <TouchableOpacity
                          style={{marginLeft: 10}}
                          onPress={() => onPressDownloadFile(file)}>
                          <FontawesomeIcon
                            name="file-pdf-o"
                            color="red"
                            size={36}
                          />
                        </TouchableOpacity>
                      );
                    }
                    if (file.ext === 'doc' || file.ext === 'docx') {
                      return (
                        <TouchableOpacity
                          style={{marginLeft: 10}}
                          onPress={() => onPressDownloadFile(file)}>
                          <FontawesomeIcon
                            name="file-word-o"
                            color="blue"
                            size={36}
                          />
                        </TouchableOpacity>
                      );
                    }
                    if (file.ext === 'xls' || file.ext === 'xlsx') {
                      return (
                        <TouchableOpacity
                          style={{marginLeft: 10}}
                          onPress={() => onPressDownloadFile(file)}>
                          <FontawesomeIcon
                            name="file-excel-o"
                            color="green"
                            size={36}
                          />
                        </TouchableOpacity>
                      );
                    }
                  })}
                </Container>
              ) : (
                <Text>No Documents Uploaded</Text>
              )}
            </Container>
          </Container>
          <Container mt={20} style={styles.card}>
            <Container
              pt={12}
              pb={12}
              pl={10}
              pr={10}
              backgroundColor={colors.borderColorFade}
              ml={-1}
              mr={-1}
              style={styles.cardHeader}>
              <Text color="primary">Selected Companies</Text>
            </Container>
            <Container
              pt={10}
              pb={10}
              pl={10}
              pr={10}
              backgroundColor="transparent">
              {data.selectedCompany === null ? (
                <Text>No Companies Selected</Text>
              ) : (
                <Text>{data.selectedCompany}</Text>
              )}
            </Container>
          </Container>
          <Container mt={20} mb={120} style={styles.card}>
            <Container
              pt={12}
              pb={12}
              pl={10}
              pr={10}
              backgroundColor={colors.borderColorFade}
              ml={-1}
              mr={-1}
              style={styles.cardHeader}>
              <Text color="primary">{`Response (${msgItems.length})`}</Text>
            </Container>
            <Container pt={10} pb={10} backgroundColor="transparent">
              {msgItems.length > 0 ? (
                <Container>
                  {msgItems.map(msg => {
                    return (
                      <TouchableOpacity
                        style={styles.msgItem}
                        onPress={() => onPressMsg(msg)}>
                        <Avatar
                          size={48}
                          rounded
                          icon={{
                            name: 'apartment',
                            type: 'material',
                            color: '#009688',
                          }}
                          containerStyle={{
                            borderColor: 'grey',
                            borderStyle: 'solid',
                            borderWidth: 1,
                          }}
                        />
                        <Container ml={20}>
                          <Text color="primary" weight="medium">
                            {msg.target?.targetName}
                          </Text>
                          <Text mt={5} numberOfLines={2} style={{width: 250}}>
                            {msg.msgs[msg.msgs.length - 1]?.comment}
                          </Text>
                        </Container>
                      </TouchableOpacity>
                    );
                  })}
                </Container>
              ) : (
                <Text ml={10}>Didn't get any response.</Text>
              )}
            </Container>
            {/* <Container
              pt={10}
              ml={-1}
              mr={-1}
              mb={-1}
              dir="row"
              pr={10}
              style={styles.cardFooter}>
              <Container flex={1} backgroundColor="transparent">
                <TextInput
                  inputContainerStyle={styles.textInput}
                  placeholder="Type message or notification..."
                  rightIcon={<BookPin />}
                />
              </Container>
              <TouchableOpacity style={styles.sendButton}>
                <PaperPlane />
              </TouchableOpacity>
            </Container> */}
          </Container>
        </KeyboardAwareScrollView>
      </Container>
    </Container>
  );
};

export default RequestItemDetail;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
  },
  card: {
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 10,
    overflow: 'hidden',
    borderTopWidth: 0,
  },
  cardHeader: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  cardFooter: {
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
    borderRadius: 5,
    height: 46,
    paddingHorizontal: 10,
  },
  sendButton: {
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#ffffff',
    width: 46,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
  },
  msgItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colors.borderColorFade,
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
});
