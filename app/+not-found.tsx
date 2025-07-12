import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CustomNotFound = () => {
  return (
    <View style={styles.container}>
      <Text>Custom Not Found </Text>
      <Link href={'/'}>Go to Home</Link>
    </View>
  )
};

export default CustomNotFound;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    }
});