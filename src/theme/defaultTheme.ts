import { DefaultTheme, MD3Theme, useTheme } from "react-native-paper";

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
};

/**
 * Default app theme, custom props and be defined here.
 */
export const defaultTheme: MD3Theme & CustomThemeProps = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#2e4882",
    onPrimary: "#fff",
    background: "#372775",
    onBackground: "#fff",
    primaryContainer: "#2B1D62",
    onPrimaryContainer: "#fff",
    success: "#37BD6D",
    onSuccess: "#fff",
    info: "#419ED7",
    onInfo: "#fff",
  },
  roundness: 0,
  spacing: (factor) => factor * 8,
};

export type AppTheme = typeof defaultTheme;

/**
 * ```useTheme()``` hook wrapper.
 *
 * Because of the custom theme type, this should be used intead of ```useTheme()```.
 */
export const useAppTheme = () => useTheme<AppTheme>();
