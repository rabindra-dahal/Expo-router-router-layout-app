import { Slot } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ProductsLayout = () => {
  return (
    <View style={styles.container}>
        <Slot />
        <View style={styles.discountedProducts}>
            <Text>Discounted Products</Text>
        </View>
    </View>
  )
}

export default ProductsLayout;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    discountedProducts: {
        backgroundColor: 'orange',
        padding: 20,
        width: '100%',
    }
})