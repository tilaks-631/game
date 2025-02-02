import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { ThemeProvider } from "@shopify/restyle"
import theme from "./src/theme"
import HomeScreen from "./src/screens/HomeScreen"
import PredictionScreen from "./src/screens/PredictionScreen"
import LeaderboardScreen from "./src/screens/LeaderboardScreen"
import ProfileScreen from "./src/screens/ProfileScreen"

const Stack = createStackNavigator()

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Prediction" component={PredictionScreen} />
          <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App

