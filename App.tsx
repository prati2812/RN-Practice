import React from 'react';
import { Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import DetailScreen from './src/screens/DetailScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import TabNavigator from './src/navigator/TabNavigator';


const Stack = createNativeStackNavigator();
const App = () => {
   return(
      <NavigationContainer>
             <Stack.Navigator screenOptions={{headerShown:false}}>
                   <Stack.Screen name='TabNavigator' component={TabNavigator} />
                   <Stack.Screen name="Details" component={DetailScreen} />
                   <Stack.Screen name="Payment" component={PaymentScreen} />
             </Stack.Navigator>
      </NavigationContainer>
   )
}

export default App;
