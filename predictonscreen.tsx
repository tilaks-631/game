import { useState } from "react"
import { ScrollView } from "react-native"
import { Box, Text } from "../components/themed"
import { LineChart } from "react-native-chart-kit"

const PredictionScreen = () => {
  const [selectedStock, setSelectedStock] = useState("NIFTY")

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(57, 255, 20, ${opacity})`, // neon green
        strokeWidth: 2,
      },
    ],
  }

  return (
    <Box flex={1} backgroundColor="mainBackground">
      <ScrollView>
        <Box padding="m">
          <Text variant="header">Market Prediction</Text>
          <Box marginVertical="m">
            <Text variant="subheader">{selectedStock}</Text>
            <LineChart
              data={data}
              width={300}
              height={200}
              chartConfig={{
                backgroundColor: "#121212",
                backgroundGradientFrom: "#121212",
                backgroundGradientTo: "#121212",
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </Box>
          {/* Add prediction buttons and other UI elements here */}
        </Box>
      </ScrollView>
    </Box>
  )
}

export default PredictionScreen

