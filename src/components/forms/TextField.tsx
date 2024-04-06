import { forwardRef } from "react";
import { TextInput as NativeTextInput, View } from "react-native";
import { HelperText, TextInput } from "react-native-paper";

export type TextFieldProps = {
  label?: string;
  helperText?: string;
  isError?: boolean;
};

export const TextField = forwardRef<NativeTextInput, TextFieldProps>(
  function TextField({ label, helperText, isError }, forwardedRef) {
    return (
      <View style={{ gap: 1 }}>
        <TextInput
          label={label}
          mode="flat"
          error={isError}
          ref={forwardedRef}
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
