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
import {Card, ListItem} from 'react-native-elements';
import Orderhistoryitem from '../../../../components/ListItemHistory';
import {OrderHistoryScreenStyle} from './styles';

function OrderHistoryScreen({navigation}) {
  const array = ['', '', '', '', '', '', '', ''];
  const DATA = array.fill('Indore To Mumbai');
  function renderSeparator() {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#000',
        }}
      />
    );
  }
  return (
    <View style={OrderHistoryScreenStyle.container}>
      {/* Header View */}
      <StatusBar backgroundColor={colors.FONT_COLOR} />
      {/* <ScrollView> */}
      <View style={OrderHistoryScreenStyle.headerView}>
        <CustomText style={OrderHistoryScreenStyle.headerText}>
          Order History
        </CustomText>
      </View>
      <View style={OrderHistoryScreenStyle.contentView}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{paddingBottom: wp('30%')}}
          style={{backgroundColor: 'transparent'}}
          data={DATA}
          renderItem={({item}) => (
            <View style={OrderHistoryScreenStyle.contentViews}>
              <Orderhistoryitem data={item} />
            </View>
          )}
        />
      </View>
      {/* </ScrollView> */}
    </View>
  );
}
export default OrderHistoryScreen;
