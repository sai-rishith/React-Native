import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const StudentList = ({ formData }) => {
  const renderItem = ({ item }) => (
    <View style={{ marginVertical: hp('1%') }}>
      <Text>Name: {item.name}</Text>
      <Text>Email: {item.email}</Text>
      <Text>Phone Number: {item.phoneNumber}</Text>
      <Text>Age: {item.age}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: wp('4%'),marginTop:100 }}>
      <FlatList
        data={formData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={{ marginTop: hp('2%') }}
      />
    </View>
  );
};

export default StudentList;
