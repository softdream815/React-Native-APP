import {StyleSheet, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import {usePostRatingMutation} from '@app/hooks/usePostRatingMutation';
import {Rating} from 'react-native-ratings';
import colors from '@app/contants/colors';
import Container from './Container';
import Text from './Text';
import GradientButton from './GradientButton';
import {useSelector} from 'react-redux';
import {RootStateType, UserType} from '@app/types';

type RatingFormPropsType = {
  type: number;
  data: any;
};

const RatingForm = (props: RatingFormPropsType) => {
  const {type, data} = props;
  const [ratingValue, setRating] = useState(0);
  const [reviewValue, setReview] = useState('');
  const [loading, setLoading] = useState(false);
  const mutation = usePostRatingMutation();
  const user: UserType = useSelector((state: RootStateType) => state.user);

  const submitReview = async () => {
    if (ratingValue === 0 || reviewValue === '') {
      return false;
    }
    setLoading(true);
    let companyIdGo = '0';
    let specialIdGo = 0;
    let eflyerIdGo = 0;
    if (type === 1) {
      companyIdGo = data?.companyIds ?? '0';
      specialIdGo = data?.specialID ?? 0;
      eflyerIdGo = 0;
    }
    if (type === 2) {
      companyIdGo = data?.companyId ?? '0';
      specialIdGo = 0;
      eflyerIdGo = 0;
    }
    if (type === 3) {
      companyIdGo = data?.companyId ?? '0';
      specialIdGo = 0;
      eflyerIdGo = data?.eflyerId ?? 0;
    }
    try {
      await mutation.mutateAsync({
        companyId: parseInt(companyIdGo, 10),
        specialId: specialIdGo,
        eflyerId: eflyerIdGo,
        ratingScore: ratingValue * 10,
        reviewData: reviewValue,
        userId: user.id,
      });
      setLoading(false);
      Alert.alert('Review has been posted sucessfully!');
    } catch (error) {
      console.log(error);
      setLoading(false);
      Alert.alert('Somthing went wrong!');
    }
  };
  return (
    <Container>
      <Text mt={5}>Review</Text>
      <TextInput
        multiline
        style={{
          height: 120,
          borderBottomColor: colors.borderColor,
          borderBottomWidth: 1.5,
        }}
        onChangeText={setReview}
      />
      <Container mt={15} mb={15}>
        <Rating imageSize={28} startingValue={0} onFinishRating={setRating} />
      </Container>
      <GradientButton
        title="Give Rating Now"
        onPress={submitReview}
        loading={loading}
      />
    </Container>
  );
};

export default RatingForm;
