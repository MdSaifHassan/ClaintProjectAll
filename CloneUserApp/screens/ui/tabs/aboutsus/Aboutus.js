import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  FlatList,
} from 'react-native';
import CustomText from '../../../../components/CustomText';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../../../configs/color';
import {AboutStyle} from './styles';

function AboutusScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={colors.FONT_COLOR} />
      <ScrollView>
        <View style={AboutStyle.container}>
          <View style={AboutStyle.headerView}>
            <CustomText style={AboutStyle.headerText}>About Us</CustomText>
          </View>

          <View style={{flexDirection: 'column'}}>
            <View style={AboutStyle.contentView}>
              <CustomText style={AboutStyle.contentText}>
                Details About us
              </CustomText>
            </View>

            <View style={AboutStyle.contentView}>
              <CustomText style={AboutStyle.contentText}>
                Contact Information
              </CustomText>
            </View>

            <View style={AboutStyle.contentView}>
              <CustomText style={AboutStyle.contentText}>
                Feedback & Rating
              </CustomText>
            </View>

            <View style={AboutStyle.contentView}>
              <CustomText style={AboutStyle.contentText}>
                App Services
              </CustomText>
            </View>

            <View style={AboutStyle.contentView}>
              <CustomText style={AboutStyle.contentText}>
                Terms & Conditions
              </CustomText>
            </View>

            <View style={AboutStyle.contentView}>
              <CustomText style={AboutStyle.contentText}>
                Privacy Policy
              </CustomText>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default AboutusScreen;
