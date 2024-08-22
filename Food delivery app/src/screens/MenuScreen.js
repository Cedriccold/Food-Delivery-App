import React, { useContext } from 'react';
import { View, Text, FlatList, Button, Image } from 'react-native';
import { CartContext } from '../contexts/CartContext';

const foodItems = [
  { id: '1', name: 'Pizza', description: 'Cheese Pizza', price: 9.99, image: require('../../assets/images/pizza.png') },
  // Add more food items here
];

export const MenuScreen = () => {
  const { addToCart } = useContext(CartContext);

  const renderItem = ({ item }) => (
    <View style={{ margin: 10 }}>
      <Image source={item.image} style={{ width: 100, height: 100 }} />
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
      <Text>${item.price}</Text>
      <Button title="Add to Cart" onPress={() => addToCart(item)} />
    </View>
  );

  return (
    <FlatList
      data={foodItems}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};
