import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import MovieDetails from "./src/screens/MovieDetails";
import CastDetails from "./src/screens/CastDetails";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./src/navigation/appNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="light" />
       <AppNavigation />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
