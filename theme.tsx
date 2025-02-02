import { createTheme } from "@shopify/restyle"

const palette = {
  black: "#000000",
  white: "#FFFFFF",
  darkGray: "#121212",
  neonGreen: "#39FF14",
  neonRed: "#FF3131",
  neonBlue: "#00FFFF",
}

const theme = createTheme({
  colors: {
    mainBackground: palette.darkGray,
    cardPrimaryBackground: palette.black,
    textPrimary: palette.white,
    textSecondary: palette.neonBlue,
    bullColor: palette.neonGreen,
    bearColor: palette.neonRed,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontWeight: "bold",
      fontSize: 34,
      color: "textPrimary",
    },
    subheader: {
      fontWeight: "600",
      fontSize: 28,
      color: "textSecondary",
    },
    body: {
      fontSize: 16,
      color: "textPrimary",
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
})

export type Theme = typeof theme
export default theme

