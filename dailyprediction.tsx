import { TouchableOpacity } from "react-native"
import { Box, Text } from "./themed"
import { useNavigation } from "@react-navigation/native"

const DailyPredictionChallenge = () => {
  const navigation = useNavigation()

  return (
    <Box marginVertical="m">
      <Text variant="subheader">Daily Prediction Challenge</Text>
      <Box flexDirection="row" justifyContent="space-between" marginTop="s">
        <PredictionButton title="Bullish" color="bullColor" onPress={() => navigation.navigate("Prediction")} />
        <PredictionButton title="Bearish" color="bearColor" onPress={() => navigation.navigate("Prediction")} />
        <PredictionButton title="Sideways" color="textSecondary" onPress={() => navigation.navigate("Prediction")} />
      </Box>
    </Box>
  )
}

const PredictionButton = ({ title, color, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Box backgroundColor={color} padding="m" borderRadius={8}>
      <Text variant="body" color="mainBackground">
        {title}
      </Text>
    </Box>
  </TouchableOpacity>
)

export default DailyPredictionChallenge

