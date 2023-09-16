import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Forms from './src/page/Forms';
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
        <Stack.Screen name="Formulario" component={Forms} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ItemDetails" component={ItemDetails} />
        <Stack.Screen name="Informs" component={Informs}/>
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}


