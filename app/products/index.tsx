import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ProductList = () => {
  return (
    <View>
      <Text>Product List</Text>
      <Link href={'/products/1'}>Product 1</Link>
      <Link href={'/products/2'}>Product 2</Link>
      <Link href={'/products/3'}>Product 3</Link>
      <Link href={'/products/best-sellers/playstation-5'}>Playstation 5 (Best Sellers)</Link>
      <Link href={'/products/deals/black-friday/playstation-5'}>Playstation 5 (Deals)</Link>
      <Link href={'/products/search/playstation-5'}>Playstation 5 (Search)</Link>
      <Link href={'/missing-product-route'}>Missing Products</Link>

    </View>
  )
}

export default ProductList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})