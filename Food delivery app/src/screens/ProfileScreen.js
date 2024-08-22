import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { FormContext } from '../contexts/FormContext';
import { ThemeContext } from '../contexts/ThemeContext';

export const ProfileScreen = () => {
  const { formData } = useContext(FormContext);
  const { theme, updateTheme } = useContext(ThemeContext);

  return (
    <View style={{ backgroundColor: theme.backgroundColor, flex: 1, padding: 20 }}>
      <Text style={{ color: theme.textColor }}>Name: {formData.name}</Text>
      <Text style={{ color: theme.textColor }}>Address: {formData.address}</Text>
      <Text style={{ color: theme.textColor }}>Card Number: **** **** **** {formData.cardNumber.slice(-4)}</Text>

      <Button
        title="Change Theme"
        onPress={() => updateTheme({ backgroundColor: '#000000', textColor: '#ffffff' })}
      />
    </View>
  );
};
