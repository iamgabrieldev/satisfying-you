import {
  configureFonts,
  DefaultTheme,
  MD3Theme,
  useTheme,
} from "react-native-paper";

type CustomThemeProps = {
  colors: {
    success: string;
    onSuccess: string;
    info: string;
    onInfo: string;
  };
  /**
   * This is used to define margin and padding consistently for all components.
   */
  spacing: (factor: number) => number;
  shape: {
    borderRadius: number;
  };
};

const baseFont = {
  fontFamily: "AveriaLibre-Regular",
} as const;

const baseVariants = configureFonts({
  config: baseFont,
});

const customVariants = {
  // Custom font variants can be declared here
  bold: {
    ...baseVariants.bodyMedium,
    fontFamily: "AveriaLibre-Bold",
  },
} as const;

const fonts = configureFonts({
  config: { ...baseVariants, ...customVariants },
});

/**
 * Default app theme, custom props and be defined here.
 */
export const defaultTheme: MD3Theme & CustomThemeProps = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#419ED7",
    onPrimary: "#fff",
    secondary: "#B0CCDE",
    onSecondary: "#111",
    background: "#372775",
    onBackground: "#fff",
    primaryContainer: "#2B1D62",
    onPrimaryContainer: "#fff",
    success: "#37BD6D",
    onSuccess: "#fff",
    info: "#419ED7",
    onInfo: "#fff",
  },
  fonts: fonts,
  roundness: 0,
  spacing: (factor) => factor * 8,
  shape: {
    borderRadius: 8,
  },
};

export type AppTheme = typeof defaultTheme;

/**
 * ```useTheme()``` hook wrapper.
 *
 * Because of the custom theme type, this should be used intead of ```useTheme()```.
 */
export const useAppTheme = () => useTheme<AppTheme>();
