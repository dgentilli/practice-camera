import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  TextInput,
} from 'react-native';

const DisplayPost = ({route}) => {
  const {image, caption} = route.params;
  return (
    <View>
      <View style={styles.imagePreviewWrapper}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
      </View>
      <Text style={styles.text}>{caption}</Text>
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

export default DisplayPost;
