import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  FlatList,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Icon, Avatar, Card, Overlay} from 'react-native-elements';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../../configs/color';
import CustomText from '../../../components/CustomText';
// import CustomTextInput from '../../commonview/CustomTextInput';
// import { commonService } from '../../../services/commonService';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {MAP_AND_LOCATION_API_KEY} from '../../../services';
import {
  GooglePlacesAutocompleteStyles,
  SearchYourLocationStyles,
} from './styles';

function SearchYourLocation({navigation}) {
  const [isVisible, setVisible] = useState(false);

  const [address, setAddress] = useState();
  const [latitude, setLattiude] = useState(0.0);
  const [longitude, setLongititude] = useState([0.0]);
  const [filteredData, setFilteredData] = useState([]);
  const [addressHome, setAddressHome] = useState();
  const [addressOther, setAddressOther] = useState();

  const data = [{key: 'Home', key: 'Office', key: 'Other'}];
  function setAddressssss(data) {
    setVisible(true);
    setAddress(data.formatted_address);
    setLattiude(data.geometry.location.lat);
    setLongititude(data.geometry.location.lng);
  }

  function getListViewItem(item) {
    setVisible(false);
    if (item == 'Home') {
      setAddressHome(address);
    } else if (item == 'Other') {
      setAddressOther(address);
    }
  }

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <StatusBar backgroundColor={colors.FONT_COLOR} />

      <View style={SearchYourLocationStyles.container}>
        <View style={SearchYourLocationStyles.headerView}>
          <TouchableOpacity onPress={() => navigation.goBack(null)}>
            <Image
              source={require('../../../assets/Image/ic_left_arrow.png')}
              resizeMode="contain"
              style={{
                width: wp('4.5%'),
                height: hp('5%'),
                marginLeft: wp('5%'),
              }}
            />
          </TouchableOpacity>
          <View style={SearchYourLocationStyles.searchMainDiv}>
            <CustomText style={SearchYourLocationStyles.headerText}>
              Search for your location
            </CustomText>
          </View>
        </View>

        <ScrollView
          keyboardShouldPersistTaps="handled"
          style={{flex: 1, flexDirection: 'column', ma: hp('25%')}}>
          {/* Content View Section */}

          <View style={{flexDirection: 'column'}}>
            <GooglePlacesAutocomplete
              placeholder="Search Location"
              onPress={(data, details = null) => setAddressssss(details)}
              query={{
                // available options: https://developers.google.com/places/web-service/autocomplete
                key: MAP_AND_LOCATION_API_KEY,
                // default: 'geocode'
              }}
              placeholder="Enter Location"
              minLength={2}
              autoFocus={false}
              returnKeyType={'default'}
              fetchDetails={true}
              styles={GooglePlacesAutocompleteStyles}
            />
            <View style={{flexDirection: 'column', marginTop: wp('5%')}}>
              <Overlay
                isVisible={isVisible}
                onBackdropPress={() => this.setState({isCity: false})}
                windowBackgroundColor="rgba(255, 255, 255, .5)"
                overlayBackgroundColor="red"
                width="auto"
                overlayStyle={{width: wp('70'), right: wp('6%')}}>
                <View>
                  <FlatList
                    data={[{key: 'Home'}, {key: 'Other'}]}
                    renderItem={({item}) => (
                      <Text
                        onPress={() => getListViewItem(item.key)}
                        style={SearchYourLocationStyles.item}>
                        {item.key}
                      </Text>
                    )}
                  />
                </View>
              </Overlay>
            </View>

            <View style={{flexDirection: 'column'}}>
              <View style={{flexDirection: 'row'}}>
                <View style={SearchYourLocationStyles.orDivStyle} />
                <CustomText style={SearchYourLocationStyles.orTextStyle}>
                  OR
                </CustomText>
                <View style={SearchYourLocationStyles.secondOrDivStyle} />
              </View>
            </View>

            <View
              style={{
                marginLeft: wp('5%'),
                flexDirection: 'row',
                marginTop: wp('3%'),
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SaveLocationScreen')}>
                <Image
                  source={require('../../../assets/Image/ic_map.png')}
                  resizeMode="contain"
                  style={{width: wp('8%'), height: hp('8%')}}
                />
              </TouchableOpacity>

              <View style={{flexDirection: 'column', marginTop: wp('3%')}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('SaveLocationScreen')}>
                  <CustomText style={SearchYourLocationStyles.vieMapTextStyle}>
                    Select location via map
                  </CustomText>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{flexDirection: 'column'}}>
              <View style={{flexDirection: 'row', marginTop: wp('1%')}}>
                <View style={SearchYourLocationStyles.extraStyle} />
              </View>
            </View>

            {/* Recent Searches */}
            <View style={{flexDirection: 'row', marginTop: wp('5%')}}>
              <CustomText style={SearchYourLocationStyles.addressHeader}>
                Recent Searches
              </CustomText>
            </View>
            <View
              style={{
                marginLeft: wp('10%'),
                flexDirection: 'row',
                marginTop: wp('5%'),
              }}>
              <Image
                source={require('../../../assets/Image/ic_time.png')}
                resizeMode="contain"
                style={{width: wp('8%'), height: hp('8%')}}
              />
              <View style={{flexDirection: 'column', marginTop: wp('3%')}}>
                <CustomText style={SearchYourLocationStyles.homeTextStyle}>
                  HOME
                </CustomText>
                <CustomText
                  style={SearchYourLocationStyles.homeAddressTextStyle}>
                  {addressHome}
                </CustomText>
              </View>
            </View>

            {/* Save Adddress */}
            <View style={{flexDirection: 'row', marginTop: wp('5%')}}>
              <CustomText style={SearchYourLocationStyles.addressHeader}>
                Saved Addresses
              </CustomText>
            </View>
            <View style={SearchYourLocationStyles.otherMainDivStyle}>
              <Image
                source={require('../../../assets/Image/ic_homee.png')}
                resizeMode="contain"
                style={{width: wp('8%'), height: hp('8%')}}
              />
              <View style={{flexDirection: 'column', marginTop: wp('3%')}}>
                <CustomText style={SearchYourLocationStyles.otherTextStyle}>
                  OTHER
                </CustomText>
                <CustomText
                  style={SearchYourLocationStyles.otherAddressTextStyle}>
                  {addressOther}
                </CustomText>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}
export default SearchYourLocation;
