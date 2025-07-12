import { Slot } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const AuthLayout = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/react-logo.png')} 
        style={styles.logo}
      />
      <Slot />
    </View>
  )
}

export default AuthLayout;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        height: 100,
        width: 100,
    },

});