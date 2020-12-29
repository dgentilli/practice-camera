import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import PreviewPhoto from '../screens/PreviewPhoto';
import TakePhoto from '../screens/TakePhoto';
import AddText from '../screens/AddText';
import DisplayPost from '../screens/DisplayPost';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Take Photo" component={TakePhoto} />
      <Stack.Screen name="Preview" component={PreviewPhoto} />
      <Stack.Screen name="Add Text" component={AddText} />
      <Stack.Screen name="Display Post" component={DisplayPost} />
    </Stack.Navigator>
  );
};

export default MainStack;
