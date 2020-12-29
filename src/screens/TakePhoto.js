import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import has from 'lodash/has';
import set from 'lodash/set';
import {useNavigation} from '@react-navigation/native';

const TakePhoto = () => {
  const navigation = useNavigation();
  const cameraRef = React.useRef(null);
  const [cameraType, setCameraType] = React.useState(
    RNCamera.Constants.Type.back,
  );
  const takePicture = async () => {
    if (cameraRef.current) {
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);

      navigation.navigate('Preview', {
        photo: data,
        testData: 'this is a test',
      });
      console.log({'TakePhoto data.uri': data.uri});
    }
  };

  React.useEffect(() => {
    const checkAndroidPermission = async () => {
      try {
        const permission =
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
        await PermissionsAndroid.request(permission);
        Promise.resolve();
      } catch (error) {
        Promise.reject(error);
      }
    };

    if (Platform.OS === 'android') {
      checkAndroidPermission();
    }
  }, []);

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{
          height: 50,
          width: 50,
          alignSelf: 'center',
          backgroundColor: 'blue',
          borderRadius: 25,
        }}
        onPress={() => {
          if (cameraType === RNCamera.Constants.Type.back) {
            setCameraType(RNCamera.Constants.Type.front);
          } else {
            setCameraType(RNCamera.Constants.Type.back);
          }
        }}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            marginTop: 12,
          }}>
          Flip
        </Text>
      </TouchableOpacity>

      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={cameraType}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        zoom={0}
        ratio={'1:1'}
        rectOfInterest={{x: 0, y: 0, width: 1, height: 1}}
        // cameraViewDimensions={{ width: 1, height: 1 }}
      />
      <View>
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            height: 75,
            width: 75,
            backgroundColor: 'green',
            borderRadius: 37,
          }}
          onPress={takePicture}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              marginTop: 30,
            }}>
            Click
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default TakePhoto;
