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
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RNCamera} from 'react-native-camera';
import has from 'lodash/has';
import set from 'lodash/set';

import TakePhoto from './src/screens/TakePhoto';
import MainStack from './src/navigation/MainStack';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Photo App" component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
