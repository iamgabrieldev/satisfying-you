import { forwardRef } from "react";
import { TextInput as NativeTextInput, View } from "react-native";
import { HelperText, TextInput } from "react-native-paper";

export type TextFieldProps = {
  label?: string;
  helperText?: string;
  isError?: boolean;
  value?: string;
  onChange?: (newText: string) => void;
  /** @default true */
  fullWidth?: boolean;
};

export const TextField = forwardRef<NativeTextInput, TextFieldProps>(
  function TextField(
    { label, helperText, isError, value, onChange, fullWidth = true },
    forwardedRef,
  ) {
    return (
      <View style={{ gap: 1, width: fullWidth ? "100%" : undefined }}>
        <TextInput
          label={label}
          mode="flat"
          error={isError}
          ref={forwardedRef}
          value={value}
          onChangeText={onChange}
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
