import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/HomeScreen';
import QuestionsScreen from './pages/QuestionsScreen';
import PersonalizeScreen from './pages/PersonalizeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.body}>
      <Header />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Questões" component={QuestionsScreen} />
          <Stack.Screen name="Personalizar" component={PersonalizeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});
