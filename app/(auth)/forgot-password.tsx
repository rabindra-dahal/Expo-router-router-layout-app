import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <Text>Forgot Password</Text>
    </View>
  )
}

export default ForgotPassword;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }
});