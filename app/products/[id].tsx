import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProductDetails = () => {
  const {id} = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text>ProductDetails</Text>
      <Text>Product Details with id = {id}</Text>
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})