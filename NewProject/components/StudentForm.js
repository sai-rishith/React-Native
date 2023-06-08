import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const StudentForm = ({ onFormSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }

    const formData = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      age: age,
    };

    onFormSubmit(formData);
    setName('');
    setEmail('');
    setPhoneNumber('');
    setAge('');
  };

  const validateForm = () => {
    if (name === '' || email === '' || phoneNumber === '' || age === '') {
      Alert.alert('Error', 'Please fill in all fields');
      return false;
    }

    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailPattern.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return false;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneNumber)) {
      Alert.alert('Error', 'Please enter a valid 10-digit phone number');
      return false;
    }

    const agePattern = /^[0-9]{1,3}$/;
    if (!agePattern.test(age)) {
      Alert.alert('Error', 'Please enter a valid age');
      return false;
    }

    return true;
  };

  const handlePhoneNumberChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, '');
    setPhoneNumber(numericValue);
  };

  const handleAgeChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, '');
    setAge(numericValue);
  };

  return (
    <View style={{ flex: 1, padding: wp('4%') ,marginTop:100}}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        style={{ marginBottom: hp('2%'), height: hp('5%') }}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{ marginBottom: hp('2%'), height: hp('5%') }}
      />

      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={handlePhoneNumberChange}
        keyboardType="numeric"
        maxLength={10}
        style={{ marginBottom: hp('2%'), height: hp('5%') }}
      />

      <TextInput
        placeholder="Age"
        value={age}
        onChangeText={handleAgeChange}
        keyboardType="numeric"
        maxLength={3}
        style={{ marginBottom: hp('2%'), height: hp('5%') }}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default StudentForm;
