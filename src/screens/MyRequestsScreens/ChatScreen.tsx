import React, {useRef, useState, useEffect } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {
  Container,
  Header,
  Text,
  TextInput,
  ImagePicker,
  ImageWithPlaceholder,
} from '@app/components/templates';
import colors from '@app/contants/colors';
import fileExtention from 'file-extension';
import Icon from 'react-native-vector-icons/Ionicons';
import {IMAGE_PREFIX} from '@env';
import moment from 'moment';
import DocumentPicker from 'react-native-document-picker';
import BookPin from '@app/assets/svgs/BookPin';
import PaperPlane from '@app/assets/svgs/PaperPlane';
import AcceptOffer from '@app/assets/svgs/AcceptOffer';
import {isIphoneX} from 'rn-iphone-helper';
import {usePostRequestResponse} from './hooks/usePostRequestResponse';
import {PostRequestItemResponseVariables} from '@app/generated/graphql-types';
import {useSelector} from 'react-redux';
import {RootStateType, UserType} from '@app/types';
import {useGetHierarchyResponses} from './hooks/useGetHierachyResponseItems';
import AcceptModal from './AcceptModal';

const ChatScreen = (props: any) => {
  const {request, msg, newMessage, isUser} = props.route.params;
  const flatlistRef = useRef(null);
  const [message, setMessage] = useState<string>('');
  const [document, setDocument] = useState(null);
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [showAcceptModal, setShowAcceptModal] = useState(false);

  const sendMutation = usePostRequestResponse();
  const user: UserType = useSelector((state: RootStateType) => state.user);
  const {getResponses, responses} = useGetHierarchyResponses(
    request.itemRequestID?.toString() ?? '',
  );
  useEffect(() => {
    if (newMessage) {
      sendMessage(newMessage);
    }
  }, [newMessage]);

  useEffect(() => {
    const intervalHandler = setInterval(() => {
      getResponses();
    }, 1000);

    return () => clearInterval(intervalHandler);
  }, [getResponses]);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardWillShow', (event) => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardWillHide', () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const onSendMessage = async () => {
    if (message === '' && !document) {
      return false;
    }
    sendMessage(message, document);
  };

  const sendMessage = async (_msg, _file = null) => {
    const data: PostRequestItemResponseVariables = {
      userId: user.id,
      itemRequestId: request.itemRequestID,
      title: _msg,
      filePath: _file?.uri,
      fileName: _file?.fileName,
      companyId: isUser
        ? Number(msg.msgs[0].companyId)
        : Number(user.companyId),
      replyToId: msg ? msg.msgs[0].itemResponseId : null,
    };
    try {
      await sendMutation.mutateAsync(data);
      setMessage('');
      setDocument(null);
    } catch (error) {
      console.log(error);
    }
  }
  const getDocumentIcon = (fileName: string) => {
    const docType = fileExtention(fileName);
    if (docType === 'pdf') {
      return 'file-pdf-o';
    }

    if (docType === 'doc' || docType === 'docx') {
      return 'file-word-o';
    }

    if (docType === 'xls' || docType === 'xlsx') {
      return 'file-excel-o';
    }

    return '';
  };

  const renderMessages = ({item}: any) => {
    const {comment, companyId, userId} = item;
    const itemStyle = userId !== user.id ? styles.itemIn : styles.itemOut;
    const documentName = item?.mapItemResponseUpload[0]?.documentName ?? '';
    return (
      <View key={comment.index}>
        {comment !== '' && (
          <View style={itemStyle}>
            <Text color={userId === user.id ? 'white' : 'primary'}>
              {comment}
            </Text>
            <View style={styles.time}>
              {/* <Text>{moment(item?.createdDate).format('HH:mm')}</Text> */}
              {item?.statusId === 1 && userId === user.id && (
                <Icon name="checkmark" color="#0AA1DD" />
              )}
              {item?.statusId === 2 && userId === user.id && (
                <Icon name="checkmark-done" color="#0AA1DD" />
              )}
            </View>
          </View>
        )}
        {documentName !== '' && (
          <View style={{alignSelf: 'flex-end'}}>
            <TouchableOpacity
              onPress={() =>
                showPDFOnClick(item?.mapItemResponseUpload[0]?.uploadPath)
              }>
              <Container
                style={styles.itemAttachment}
                mt={10}
                alignItems="center">
                {/* <FontAwesome
                  name={getDocumentIcon(documentName)}
                  size={48}
                  color={colors.text.active}
                />
                <Text mt={5}>
                  {item?.mapItemResponseUpload[0]?.documentName}
                </Text> */}
                <ImageWithPlaceholder
                  source={{uri: `${IMAGE_PREFIX}${documentName}`}}
                  style={{width: 200, height: 200}}
                  resizeMode="contain"
                />
              </Container>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };
  const showPDFOnClick = (param: string) => {};
  const selectFileDoc = async () => {
    try {
      const results = await DocumentPicker.pickSingle({
        type: [
          DocumentPicker.types.pdf,
          DocumentPicker.types.doc,
          DocumentPicker.types.xls,
          DocumentPicker.types.docx,
        ],
      });
      setDocument(results);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        console.log(err);
        throw err;
      }
    }
  };

  const onSendImageMessage = (assets) => {
    const image = assets[0];
    setDocument(image);
  };

  return (
    <Container flex={1} backgroundColor={colors.appBackgroundColor}>
      <Header title={msg?.target?.targetName} />
      <Container
        pl={20}
        pr={20}
        pt={16}
        style={{
          ...styles.container,
          paddingBottom: keyboardStatus ? 450 : 100,
        }}>
        <FlatList
          data={responses}
          ref={flatlistRef}
          keyExtractor={(item, index) => {
            return index;
          }}
          showsVerticalScrollIndicator={false}
          renderItem={renderMessages}
          onContentSizeChange={() =>
            flatlistRef.current?.scrollToEnd({animated: true})
          }
          onLayout={() => {
            return flatlistRef.current?.scrollToEnd({animated: true});
          }}
        />
        <Container
          pt={10}
          ml={-1}
          mr={-1}
          mb={keyboardStatus ? 350 : -1}
          pr={10}
          backgroundColor={keyboardStatus ? 'white' : colors.appBackgroundColor}
          style={styles.inputFooter}>
          <Container dir="row" backgroundColor="transparent">
            <Container flex={1} backgroundColor="transparent">
              <TextInput
                inputContainerStyle={styles.textInput}
                placeholder="Type message or notification..."
                rightIcon={
                  <Container dir="row">
                    <ImagePicker
                      ButtonComponent={onOpen => (
                        <TouchableOpacity onPress={onOpen}>
                          <BookPin />
                        </TouchableOpacity>
                      )}
                      onPickImage={result => {
                        onSendImageMessage(result);
                      }}
                    />
                    {isUser && (
                      <TouchableOpacity
                        style={{marginLeft: 10}}
                        onPress={() => setShowAcceptModal(true)}>
                        <AcceptOffer />
                      </TouchableOpacity>
                    )}
                  </Container>
                }
                onChangeText={setMessage}
                value={message}
              />
            </Container>
            <TouchableOpacity style={styles.sendButton} onPress={onSendMessage}>
              <PaperPlane />
            </TouchableOpacity>
          </Container>
          {document && (
            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: 20,
                left: 20,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'transparent',
              }}
              onPress={() => setDocument(null)}>
              <Text>1 image attached</Text>
              <Icon name="close" color={colors.text.active} size={18} />
            </TouchableOpacity>
          )}
        </Container>
      </Container>
      {isUser && (
        <AcceptModal
          show={showAcceptModal}
          onClose={() => setShowAcceptModal(false)}
          companyId={isUser ? msg.target?.targetId : 0}
        />
      )}
    </Container>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    paddingBottom: 100,
  },
  itemIn: {
    alignSelf: 'flex-start',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.68,
    elevation: 20,
    paddingVertical: 10,
    minWidth: 200,
    maxWidth: 300,
    paddingRight: 50,
    paddingLeft: 20,
    backgroundColor: '#EFEEEE',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 20,
    // flexDirection: 'row',
    marginTop: 10,
  },
  itemOut: {
    alignSelf: 'flex-end',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.68,
    elevation: 20,
    minWidth: 200,
    maxWidth: 300,
    paddingVertical: 10,
    paddingRight: 20,
    paddingLeft: 10,
    backgroundColor: '#756569',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 20,
    // flexDirection: 'row',
    marginTop: 5,
  },
  itemAttachment: {
    elevation: 5,
    borderRadius: 15,
  },
  time: {
    paddingRight: 10,
    alignSelf: 'flex-end',
  },
  inputFooter: {
    borderColor: colors.borderColorFade,
    borderWidth: 1,
    borderRadius: 15,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: isIphoneX() ? 20 : 10,
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
});
