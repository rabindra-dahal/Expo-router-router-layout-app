import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Catch All Segments Example</Text>
      <Link href={'/products'}>Products</Link>
      <Link href={'/missing-route'}>Missing Route</Link>
    </View>
  );
}
