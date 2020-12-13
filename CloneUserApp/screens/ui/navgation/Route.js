import React, {Fragment, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Welcome from '../welcome/Welcome';
import LoginPage from '../login/LoginPage';
import OtpVerification from '../otp/OtpVerification';
import HomeScreen from '../tabs/home/HomeScreen';
import OrderHistoryScreen from '../tabs/orderhistory/OrderHistoryScreen';
import MyTabs from './MyTabs';
import NotificationScreen from '../tabs/notificaton/NotificationScreen';
import ProfileScreen from '../tabs/account/ProfileScreen';
import SearchYourLocation from '../searchlocation/SearchYourLocation';
import SaveLocationScreen from '../savelocation/SaveLocationScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AddOrderScreens from '../tabs/addorder/AddOrderScreens';
import AboutusScreen from '../tabs/aboutsus/Aboutus';
import ContactUsScreen from '../tabs/contactus/Contactus';
import OrderSlipScreen from '../orderslip/OrderSlipScreen';
import UpldateProfileScreen from '../tabs/account/UpldateProfileScreen';
import {PolicyScreen} from '../tabs/addorder/PolicyScreen';

import messaging from '@react-native-firebase/messaging';
import firebase from '@react-native-firebase/app';
import configStore from '../../../redux/configstore';
import {
  getfPrefUserData,
  getfPrefFCMTOKEN,
  setPrefFCMTOKEN,
} from '../../../local/pref';
import {commonService} from '../../../services/commonService';
import auth from '@react-native-firebase/auth';

const navRef = React.createRef();

export const navigation = () => {
  return navRef.current && navRef.current;
};

function loginPage() {
  const LognStack = createStackNavigator();

  return (
    <LognStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <LognStack.Screen name="LoginPage" component={LoginPage} />
      <LognStack.Screen name="OtpVerification" component={OtpVerification} />
      <LognStack.Screen name="MyTabs" component={MyTabs} />
      <LognStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
      />
      <LognStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <LognStack.Screen
        name="UpldateProfileScreen"
        component={UpldateProfileScreen}
      />
      <LognStack.Screen
        name="SearchYourLocation"
        component={SearchYourLocation}
      />
      <LognStack.Screen
        name="SaveLocationScreen"
        component={SaveLocationScreen}
      />
      <LognStack.Screen name="OrderSlipScreen" component={OrderSlipScreen} />

      <LognStack.Screen name="PolicyScreen" component={PolicyScreen} />
    </LognStack.Navigator>
  );
}

//Welcome screen
function Route() {
  const Stack = createStackNavigator();
  // const isLogined =false;
  // getfPrefUserData().then((data) => {
  //   if(data == null || data === 'undefined' || data.userData == null || data.userData === 'undefined' || data.userData == '' || data.userData.session_id == null || data.userData.session_id  === 'undefined' || data.userData.session_id == ''){
  //     isLogined = false;
  //       }else {
  //         isLogined = true;

  //   }
  // }).catch((err) =>{
  //   isLogined = false;
  // });
  return (
    // <Provider store={configStore}>

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="LoginPage" component={loginPage} />
        <Stack.Screen
          name="SearchYourLocation"
          component={SearchYourLocation}
        />
        <Stack.Screen
          name="SaveLocationScreen"
          component={SaveLocationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
    //
  );
}

export default Route;
