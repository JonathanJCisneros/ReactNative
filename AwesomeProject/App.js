import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import CatPictureNStuff from './CatPictureNStuff';
import Form from './Form';


const Stack = createNativeStackNavigator();


const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="CatPictureNStuff" component={CatPictureNStuff}/>
        <Stack.Screen name="Form" component={Form}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
