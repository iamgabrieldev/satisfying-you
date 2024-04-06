import { forwardRef } from "react";
import {
  NativeSyntheticEvent,
  TextInput as NativeTextInput,
  TextInputChangeEventData,
  View,
} from "react-native";
import { HelperText, TextInput } from "react-native-paper";

export type TextFieldProps = {
  label?: string;
  helperText?: string;
  isError?: boolean;
  value?: string;
  onChange?: (newText: string) => void;
};

export const TextField = forwardRef<NativeTextInput, TextFieldProps>(
  function TextField(
    { label, helperText, isError, value, onChange },
    forwardedRef,
  ) {
    return (
      <View style={{ gap: 1 }}>
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
