import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import MovieDetails from './src/screens/MovieDetails';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <MovieDetails />
       {/* <HomeScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
