import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import CategoriesScreen from './screens/CategoriesScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// install extra dependencies when using React Navigation
// install @react-navigation/navigate-stack

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        {/* Creates a very good looking header and a safe area*/}
        <Stack.Navigator>
          <Stack.Screen
            name='MealsCategories'
            component={CategoriesScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#24180f',
  },
})
