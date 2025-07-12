import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View
      style={styles.container}>
      <Text>Home page</Text>
      <Link href="/about">About</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/products">Products</Link>
      <Link href="/login">Login</Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  }
})