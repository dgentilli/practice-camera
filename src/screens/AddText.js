import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const AddText = ({route}) => {
  const [caption, setCaption] = React.useState('');
  const imageUri = route.params.image;
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.text}>Add Your Text</Text>
      <View style={styles.imagePreviewWrapper}>
        <Image
          style={styles.image}
          source={{
            uri: imageUri,
          }}
        />
      </View>
      <TextInput
        style={styles.text}
        placeholder="Type Here"
        value={caption}
        onChangeText={(input) => setCaption(input)}
      />
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Display Post', {image: imageUri, caption})
        }>
        <Text style={styles.text}>Post</Text>
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

export default AddText;
