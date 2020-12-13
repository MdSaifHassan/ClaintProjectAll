import React, {useEffect} from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import colors from '../../../configs/color';
import {WelcomeScreenStyle} from './styles';
import auth from '@react-native-firebase/auth';

function Welcome({navigation}) {
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // Handle user state changes
  function onAuthStateChanged(user) {
    // setUser(user);
    if (user) {
      navigation.navigate('LoginPage', {screen: 'MyTabs'});
    }
  }

  function _lastIndex(index) {
    if (index === 3) {
      setTimeout(() => {
        navigation.navigate('LoginPage');
      }, 1000);
    }
  }

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={colors.FONT_COLOR} />

      <Swiper
        style={WelcomeScreenStyle.wrapper}
        showsButtons={false}
        autoplay={true}
        activeDotColor={colors.FONT_COLOR}
        onIndexChanged={index => {
          _lastIndex(index);
        }}>
        {/*First Slider  */}
        <View style={WelcomeScreenStyle.slide1}>
          <View style={WelcomeScreenStyle.slide1_view}>
            <Text style={WelcomeScreenStyle.text}>Lorem ipsum</Text>
            <Image
              source={require('../../../assets/Image/third_screen.png')}
              resizeMode="contain"
              style={WelcomeScreenStyle.imgStyles1}
            />
            <View style={{alignContent: 'center'}}>
              <Text style={WelcomeScreenStyle.loremTextStyle}>
                Lorem Ipsum is simply dummy {'\n'} text of the printing
              </Text>
            </View>
          </View>
        </View>
        {/*Second Slider  */}
        <View style={WelcomeScreenStyle.slide2}>
          <View style={WelcomeScreenStyle.slide1_view}>
            <Text style={WelcomeScreenStyle.text}>Lorem ipsum</Text>
            <Image
              source={require('../../../assets/Image/second_screen.png')}
              resizeMode="contain"
              style={WelcomeScreenStyle.imgStyles2}
            />
            <Text style={WelcomeScreenStyle.loremTextStyle2}>
              Lorem Ipsum is simply dummy {'\n'} text of the printing
            </Text>
          </View>
        </View>
        {/*Third Slider  */}
        <View style={WelcomeScreenStyle.slide3}>
          <View style={WelcomeScreenStyle.slide1_view}>
            <Text style={WelcomeScreenStyle.text}>Lorem ipsum</Text>
            <Image
              source={require('../../../assets/Image/fourth_screen.png')}
              resizeMode="contain"
              style={WelcomeScreenStyle.imgStyles3}
            />
            <Text style={WelcomeScreenStyle.loremTextStyle3}>
              Lorem Ipsum is simply dummy {'\n'} text of the printing
            </Text>
          </View>
        </View>
        {/*Fourth Slider  */}
        <View style={WelcomeScreenStyle.slide4}>
          <View style={WelcomeScreenStyle.slide1_view}>
            <Text style={WelcomeScreenStyle.text}>Lorem ipsum</Text>
            <Image
              source={require('../../../assets/Image/first_screen.png')}
              resizeMode="contain"
              style={WelcomeScreenStyle.imgStyles4}
            />
            <Text style={WelcomeScreenStyle.loremTextStyle4}>
              Lorem Ipsum is simply dummy {'\n'} text of the printing
            </Text>
          </View>
        </View>
      </Swiper>
    </View>
  );
}

export default Welcome;
