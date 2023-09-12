import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Forms from './src/page/Forms';
import ListPage from './src/page/ListPage';
import UniveryList from './src/page/UniveryList';
import Form from './src/page/Form';
import Home from './src/page/Home';
import Informs from './src/page/Informs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ItemDetails from './src/page/ItemDetail';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ItemDetails" component={ItemDetails} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}


