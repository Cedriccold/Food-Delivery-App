import React, { useContext } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { CartContext } from '../contexts/CartContext';

export const CartScreen = () => {
  const { cart, updateCartItem, removeFromCart, clearCart } = useContext(CartContext);

  const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const renderItem = ({ item }) => (
    <View style={{ margin: 10 }}>
      <Text>{item.name}</Text>
      <Text>Quantity: {item.quantity}</Text>
      <Text>${item.price * item.quantity}</Text>
      <Button title="Remove" onPress={() => removeFromCart(item.id)} />
    </View>
  );

  return (
    <View>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Text>Total: ${totalCost}</Text>
      <Button title="Proceed to Checkout" onPress={clearCart} />
    </View>
  );
};
