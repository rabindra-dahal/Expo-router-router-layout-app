import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CatchAllProductDetails = () => {
  const {rest} = useLocalSearchParams<{rest:string[]}>();
  return (
    <View>
      <Text>Catch All Product Details</Text>
      <Text>Product Details with product url = {rest.join('/')}</Text>
    </View>
  )
}

export default CatchAllProductDetails

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})