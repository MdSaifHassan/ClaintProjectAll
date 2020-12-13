import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import colors from '../../../../configs/color';
import Swiper from 'react-native-swiper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Orderhistoryitem from '../../../../components/ListItemHistory';
import ListOrderH from '../../../../components/ListOrderH';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {HomeScreenStyle} from './styles';
import auth from '@react-native-firebase/auth';

const DATA = [
  'Indore To Mumbai',
  'Indore To Mumbai',
  'Indore To Mumbai',
  'Indore To Bhopal',
  'Indore To Bhopal',
  'Indore To Bhopal',
  'Indore To Bhopal',
  'Indore To Bhopal',
  'Indore To Bhopal',
  'Indore To Bhopal',
  'Indore To Bhopal',
  'Indore To Bhopal',
  'Indore To Bhopal',
  'Indore To Bhopal',
  'Indore To Bhopal',
  'Indore To Bhopal',
  'Indore To Bhopal',
  'Indore To Bhopal',
  'Indore To Bhopal',
  'Indore To Bhopal',
];

function HomeScreen({navigation}) {
  useEffect(() => {
    navigation.addListener('beforeRemove', e => {
      if (auth().currentUser) {
        e.preventDefault();
      } else {
        navigation.dispatch(e.data.action);
      }
    });
  });

  var navigation = navigation;
  return (
    <>
      {/* Main Container */}
      <View style={HomeScreenStyle.container}>
        {/* Header View */}
        <View style={{flexDirection: 'column'}}>
          <View style={HomeScreenStyle.box1}>
            <View style={{flex: 1, flexDirection: 'row', marginTop: wp('2%')}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SearchYourLocation')}>
                <Image
                  source={require('../../../../assets/Image/pin.png')}
                  resizeMode="contain"
                  style={HomeScreenStyle.imageStyle}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{width: '55%'}}
                onPress={() => navigation.navigate('SearchYourLocation')}>
                <View style={HomeScreenStyle.YourLocationDivStyle}>
                  <Text
                    style={{
                      fontFamily: 'NunitoSans-Regular',
                      color: colors.WHITE,
                      fontSize: hp('1.7%'),
                    }}>
                    YourLocation....
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',

                      justifyContent: 'space-between',
                      width: '100%',
                    }}>
                    <Text style={HomeScreenStyle.textStyle1}>Bangalore</Text>
                    <Image
                      source={require('../../../../assets/Image/ic_down.png')}
                      resizeMode="contain"
                      style={{bottom: hp('0.5%'), width: 35, height: 35}}
                    />
                  </View>
                </View>
              </TouchableOpacity>

              <View style={HomeScreenStyle.mainTouchDivStyle}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ProfileScreen')}>
                  <Image
                    source={require('../../../../assets/Image/ic_user.png')}
                    resizeMode="contain"
                    style={{width: wp('5.5%'), height: hp('5.5%')}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('NotificationScreen')}>
                  <Image
                    source={require('../../../../assets/Image/bell.png')}
                    resizeMode="contain"
                    style={{
                      width: wp('5.5%'),
                      height: hp('5.5%'),
                      marginLeft: 15,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        {/* Header End */}

        {/* Banner View */}
        <View style={HomeScreenStyle.box2}>
          <Swiper
            containerStyle={{
              aspectRatio: 2.2,
              marginTop: hp('3%'),
              flex: 1,
              flexDirection: 'row',
              marginLeft: 10,
              marginRight: 10,
            }}
            style={HomeScreenStyle.wrapper}
            dotStyle={{top: hp('1.2%')}}
            activeDotStyle={{
              top: hp('1.2%'),
              backgroundColor: colors.WHITE_GREY,
            }}
            showsButtons={false}
            autoplay={false}
            activeDotColor={colors.FONT_COLOR}>
            <View style={HomeScreenStyle.slide1}>
              <Image
                resizeMode={'cover'}
                source={require('../../../../assets/Image/home_header.jpg')}
                style={HomeScreenStyle.imageStyle2}
              />
            </View>
            <View style={HomeScreenStyle.slide2}>
              <Image
                source={require('../../../../assets/Image/home_header.jpg')}
                style={HomeScreenStyle.imageStyle3}
              />
            </View>
            <View style={HomeScreenStyle.slide3}>
              <Image
                source={require('../../../../assets/Image/home_header.jpg')}
                style={HomeScreenStyle.imageStyle4}
              />
            </View>
            <View style={HomeScreenStyle.slide4}>
              <Image
                source={require('../../../../assets/Image/home_header.jpg')}
                style={HomeScreenStyle.imageStyle5}
              />
            </View>
          </Swiper>
        </View>
        {/* Banner View End*/}

        {/* Content View */}
        <View style={{flexDirection: 'row', marginTop: hp('2%')}}>
          <FlatList
            nestedScrollEnabled={true}
            contentContainerStyle={{paddingBottom: hp('65`%')}}
            style={{backgroundColor: 'transparent'}}
            data={DATA}
            keyExtractor={(item, index) => index.toString()}
            getItemLayout={(data, index) => ({
              length: moderateScale(200),
              offset: moderateScale(200) * index,
              index,
            })}
            renderItem={({item}) => (
              <View>
                <ListOrderH navigation={navigation} data={item} />
              </View>
            )}
          />
        </View>
        {/* Content View End */}
      </View>
    </>
  );
}

export default HomeScreen;
