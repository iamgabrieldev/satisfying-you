import { forwardRef } from "react";
import {
  TextInput as NativeTextInput,
  StyleProp,
  TextStyle,
  View,
} from "react-native";
import { HelperText, Text, TextInput } from "react-native-paper";
import { useAppTheme } from "../../../theme/defaultTheme";

export type TextFieldProps = {
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  helperText?: string;
  dataText?: boolean;
  isError?: boolean;
  value?: string;
  onChange?: (newText: string) => void;
  /** @default true */
  fullWidth?: boolean;
};

export const TextField = forwardRef<NativeTextInput, TextFieldProps>(
  function TextField(
    {
      label,
      labelStyle,
      helperText,
      isError,
      dataText = false,
      value,
      onChange,
      fullWidth = true,
    },
    forwardedRef,
  ) {
    const theme = useAppTheme();
    return (
      <View style={{ gap: 1, width: fullWidth ? "100%" : undefined }}>
        <Text
          variant="labelLarge"
          style={{
            color: theme.colors.onBackground,
            marginBottom: theme.spacing(0.5),
            ...(labelStyle as object),
          }}
        >
          {label}
        </Text>
        <TextInput
          mode="flat"
          error={isError}
          ref={forwardedRef}
          value={value}
          onChangeText={onChange}
          right={dataText ? <TextInput.Icon icon="calendar" /> : ""}
        />
        {helperText && (
          <HelperText visible={isError} type="error">
            {helperText}
          </HelperText>
        )}
      </View>
    );
  },
);
