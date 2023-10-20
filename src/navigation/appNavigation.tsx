import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import MovieDetails from "../screens/MovieDetails";

const Stack = createNativeStackNavigator();

export type StackNavigatorParamList = {
  Home: undefined;
  Details: { id: number }; 
};

export type ScreenNavigationProp = NativeStackNavigationProp<
  StackNavigatorParamList,
  'Details'
>;


export default function AppNavigation() {

  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={MovieDetails} options={{animation: 'slide_from_right'}} />
    </Stack.Navigator>
  );
}
