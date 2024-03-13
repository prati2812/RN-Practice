
import React from 'react';
import {StyleSheet } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import CartScreen from '../screens/CartScreen';
import CustomIcon from '../components/CustomIcon';
import { COLORS } from '../theme/theme';
import { BlurView } from '@react-native-community/blur';


const Tab = createBottomTabNavigator();
const TabNavigator = () => {
    return (
        <Tab.Navigator>
               <Tab.Group 
                     screenOptions={{
                        headerShown:false , 
                        tabBarShowLabel:false , 
                        tabBarHideOnKeyboard:true,
                        tabBarStyle:styles.tabBarStyle,
                        tabBarBackground:() => (
                             <BlurView  overlayColor='' blurAmount={15} style={styles.blurViewStyle}/>
                         )
                        }}>
                       <Tab.Screen component={HomeScreen} name='Home' options={{
                            tabBarIcon:({focused, color , size})=> (
                               <CustomIcon 
                                  name='home'
                                  size={25}
                                  color={focused ? COLORS.primaryOrangeHex : COLORS.primaryGreyHex}
                               />   
                            ),
                       }}></Tab.Screen>
                       <Tab.Screen component={FavoritesScreen} name='Favourite' options={{
                            tabBarIcon:({focused, color , size})=> (
                               <CustomIcon 
                                  name='like'
                                  size={25}
                                  color={focused ? COLORS.primaryOrangeHex : COLORS.primaryGreyHex}
                               />   
                            ),
                       }}
                       />
                       <Tab.Screen component={CartScreen} name='Cart' options={{
                            tabBarIcon:({focused, color , size})=> (
                               <CustomIcon 
                                  name='cart'
                                  size={25}
                                  color={focused ? COLORS.primaryOrangeHex : COLORS.primaryGreyHex}
                               />   
                            ),
                       }}
                       />
                       <Tab.Screen component={OrderHistoryScreen} name='OrderHistory' options={{
                            tabBarIcon:({focused, color , size})=> (
                               <CustomIcon 
                                  name='bell'
                                  size={25}
                                  color={focused ? COLORS.primaryOrangeHex : COLORS.primaryGreyHex}
                               />   
                            ),
                       }}
                       />
               </Tab.Group>
        </Tab.Navigator>
    );
};


const styles = StyleSheet.create({
      tabBarStyle:{
         height:80,
         position:'absolute',
         backgroundColor:COLORS.primaryBlackRGBA,
         borderTopWidth:0,
         elevation:0,
         borderTopColor: 'transparent'
      },
      blurViewStyle:{
        top:0,
        bottom:0,
        left:0,
        right:0
      }
});


export default TabNavigator;
