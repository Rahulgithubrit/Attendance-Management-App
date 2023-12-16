import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Card from './Components/Card';
import Form from './Components/Form';
import Home from './Components/Home';
import About from './Components/About';
import Options from './Components/Options'


export default function App(props) {
  const Stack = createNativeStackNavigator();
  return (
    // <Home/>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
      >
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            headerRight: () => <Button style={styles.title} title='⋮' />,
            title: 'Attendance Manager',
            headerTintColor: 'red',
            headerStyle: {
              backgroundColor: '#1E1E1E',
              height: 100,
            },
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitleContainerStyle: { paddingVertical: 100 },
            headerShown: false
          }}
        />
        <Stack.Screen
          name='Form'
          component={Form}
          options={{ headerShown: false }}
        />
          <Stack.Screen
           name='Options'
           component={Options}
           options={{ headerShown: false }}
         />
        <Stack.Screen
          name='About'
          component={About}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: '#1E1E1E'
  }
});
