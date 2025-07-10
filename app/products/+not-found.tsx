import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CustomProductNotFound = () => {
  return (
    <View style={styles.container} >
      <Text>Product Not Found </Text>
      <Link href={'/'}>Go to Home</Link>
    </View>
  )
}

export default CustomProductNotFound;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    }
})