import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { FormContext } from '../contexts/FormContext';

export const Form1Screen = ({ navigation }) => {
  const { formData, updateFormData } = useContext(FormContext);
  const [name, setName] = useState(formData.name);
  const [email, setEmail] = useState(formData.email);
  const [phone, setPhone] = useState(formData.phone);

  const handleNext = () => {
    updateFormData({ name, email, phone });
    navigation.navigate('Form2Screen');
  };

  return (
    <View>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Phone" value={phone} onChangeText={setPhone} />
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};
