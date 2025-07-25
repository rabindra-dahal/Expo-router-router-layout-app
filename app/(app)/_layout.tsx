import { Slot } from "expo-router";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Expo App</Text>
      </View>
      <Slot />
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          @Expo App
        </Text>
      </View>
    </SafeAreaView>

);
};

const styles= StyleSheet.create({
  container:{
    flex: 1
  },
  header:{
    backgroundColor: 'red',
    padding: 20,
    alignItems: 'center'
  },
  headerText:{
    color: 'white',
  },
  footer:{
    backgroundColor: 'blue',
    padding: 20,
    alignItems: 'center'
  },
  footerText:{
    color: 'white',
    
  }
});
