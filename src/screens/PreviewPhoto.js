import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useNavigation} from '@react-navigation/native';

const PreviewPhoto = ({route}) => {
  const navigation = useNavigation();
  console.log('PreviewPhoto route', route.params.photo.uri);
  const imageUri = route.params.photo.uri;

  return (
    <View>
      <Text style={styles.text}>Preview Your Photo</Text>
      <View style={styles.imagePreviewWrapper}>
        <Image
          style={styles.image}
          source={{
            uri: imageUri,
          }}
        />
      </View>
      <TouchableOpacity>
        <Text
          style={styles.text}
          onPress={() => navigation.navigate('Add Text', {image: imageUri})}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imagePreviewWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 350,
    width: 350,
    marginTop: 50,
  },
  text: {
    fontSize: 20,
    color: '#a9a9a9',
    textAlign: 'center',
    marginTop: 15,
  },
});

export default PreviewPhoto;
