import { Link, router } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Login = () => {
    const LoginHandler = () =>{
        router.replace('/profile');
    }

    return (
        <View style={styles.container}>
        <Text>Login page</Text>
        <Button title='Login' onPress={LoginHandler} />
        <Link href={'./register'}>Register</Link>
        </View>
    )
}

export default Login;
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }
});