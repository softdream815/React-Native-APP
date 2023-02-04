import React, {useState} from 'react';
import {View, ActivityIndicator, ImageSourcePropType} from 'react-native';
import FastImage, {ImageStyle, ResizeMode} from 'react-native-fast-image';

type ImageWithPlaceholderPropType = {
  source: ImageSourcePropType;
  style: ImageStyle;
  resizeMode: ResizeMode;
};

const ImageWithPlaceholder = ({
  source,
  style,
  resizeMode,
}: ImageWithPlaceholderPropType) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isFail, setFail] = useState<boolean>(false);

  const onLoad = () => {
    setLoading(false);
  };
  const onError = () => {
    setLoading(false);
    setFail(true);
  };

  return (
    <View style={{backgroundColor: '#FFF9FA', borderRadius: 10}}>
      <FastImage
        source={
          isFail ? require('@app/assets/images/default_image.png') : source
        }
        style={style}
        resizeMode={resizeMode}
        onLoadStart={() => setLoading(true)}
        onLoad={onLoad}
        onError={onError}
      />

      {loading && (
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator color="#666" />
        </View>
      )}
    </View>
  );
};

export default ImageWithPlaceholder;
