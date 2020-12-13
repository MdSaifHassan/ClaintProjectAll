
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Image ,Text } from 'react-native'
import HomeScreen from '../tabs/home/HomeScreen';
import OrderHistoryScreen from '../tabs/orderhistory/OrderHistoryScreen';
import AddOrderScreens from '../tabs/addorder/AddOrderScreens';
import colors from '../../../configs/color';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AboutusScreen from '../tabs/aboutsus/Aboutus';
import ContactUsScreen from '../tabs/contactus/Contactus';
import AnimatedTabBar, { TabsConfigsType } from '../../../components/curvedbottomNav'
import Icon from 'react-native-vector-icons/AntDesign'


const tabs: TabsConfigsType = {
  Home: {
    icon: ({ progress }) =>  
    <Image source={require('../../../assets/Image/ic_home_white.png')} resizeMode='contain' style={{width:wp('6%'),height:hp('6%')}}/>
    },
    OrderHistory: {
    icon: ({ progress }) =>  <Image source={require('../../../assets/Image/ic_box_white.png')} resizeMode='contain' style={{width:wp('6%'),height:hp('6%')}}/>
    },
    AddOrder: {
      icon: ({ progress }) =>  <Image source={require('../../../assets/Image/ic_add_white.png')} resizeMode='contain' style={{width:wp('6%'),height:hp('6%')}}/>
      },
      ContactUS: {
        icon: ({ progress }) =>  <Image source={require('../../../assets/Image/ic_contact_white.png')} resizeMode='contain' style={{width:wp('6%'),height:hp('6%')}}/>
        },
        AboutUS: {
          icon: ({ progress }) =>  <Image source={require('../../../assets/Image/ic_user_whiteeee.png')} resizeMode='contain' style={{width:wp('6%'),height:hp('6%')}}/>
          },
}
const Tab = createBottomTabNavigator()

function MyTabs() {
  return (
    
    <Tab.Navigator
    tabBar={props => (
      <AnimatedTabBar barColor={colors.FONT_COLOR} tabs={tabs} dotColor={colors.FONT_COLOR} {...props}  dotSize={80}/>
    )}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
       
      />
      <Tab.Screen
        name="OrderHistory"
        component={OrderHistoryScreen}

      />
    <Tab.Screen
        name="AddOrder"
        component={AddOrderScreens}
       
      />
      
     
      <Tab.Screen
        name="ContactUS"
        component={ContactUsScreen}
       
        
      />
          <Tab.Screen
        name="AboutUS"
        component={AboutusScreen}
        
        
      /> 
    </Tab.Navigator>
  );
}

export default MyTabs;


