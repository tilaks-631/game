import { ScrollView } from "react-native"
import { Box, Text } from "../components/themed"
import LiveMarketStatus from "../components/LiveMarketStatus"
import DailyPredictionChallenge from "../components/DailyPredictionChallenge"
import LeaderboardPreview from "../components/LeaderboardPreview"
import PortfolioSummary from "../components/PortfolioSummary"

const HomeScreen = () => {
  return (
    <Box flex={1} backgroundColor="mainBackground">
      <ScrollView>
        <Box padding="m">
          <Text variant="header">Bull vs Bear Arena</Text>
          <LiveMarketStatus />
          <DailyPredictionChallenge />
          <LeaderboardPreview />
          <PortfolioSummary />
        </Box>
      </ScrollView>
    </Box>
  )
}

export default HomeScreen

