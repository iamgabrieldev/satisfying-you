import { ReactNode } from "react";
import { Appbar, Menu } from "react-native-paper";

export type SyMenuProps<Option> = {
  /** Menu open state. */
  open: boolean;
  /** Callback called when the menu requests to be closed. */
  onClose?: () => void;
  /** React component to attach the menu to. Usually a Button. */
  anchor: ReactNode;
  /** Array of options to render. */
  options: Option[];
  /** Returns a label to be displayed for the given option. */
  getOptionLabel: (option: Option) => string;
  /** Handles option's ```onPress``` action. */
  onOptionSelected: (option: Option) => void;
};

export const SyMenu = <Option,>({
  open,
  onClose,
  anchor,
  options,
  getOptionLabel,
  onOptionSelected,
}: SyMenuProps<Option>) => {
  return (
    <Menu
      visible={open}
      onDismiss={() => onClose?.()}
      anchor={anchor}
      anchorPosition="bottom"
    >
      {options.map((option) => (
        <Menu.Item
          title={getOptionLabel(option)}
          onPress={() => onOptionSelected(option)}
        />
      ))}
    </Menu>
  );
};
