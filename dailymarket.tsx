import { Box, Text } from "./themed"

const LiveMarketStatus = () => {
  return (
    <Box marginVertical="m">
      <Text variant="subheader">Live Market Status</Text>
      <Box flexDirection="row" justifyContent="space-between" marginTop="s">
        <MarketItem name="Nifty" value="18,245" change="+0.8%" />
        <MarketItem name="Bank Nifty" value="42,650" change="-0.3%" />
        <MarketItem name="Sensex" value="61,320" change="+0.5%" />
      </Box>
    </Box>
  )
}

const MarketItem = ({ name, value, change }) => (
  <Box alignItems="center">
    <Text variant="body">{name}</Text>
    <Text variant="body" color={change.startsWith("+") ? "bullColor" : "bearColor"}>
      {value}
    </Text>
    <Text variant="body" color={change.startsWith("+") ? "bullColor" : "bearColor"}>
      {change}
    </Text>
  </Box>
)

export default LiveMarketStatus

