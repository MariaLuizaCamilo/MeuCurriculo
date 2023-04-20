import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importa as página da aplicação
import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Habilidade from './src/pages/Sobre';
import Formacao from './src/pages/Formacao';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="Habilidade" component={Habilidade} />
        <Stack.Screen name="Formação" component={Formacao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
