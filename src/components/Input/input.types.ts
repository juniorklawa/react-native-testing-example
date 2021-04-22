import {
  TextStyle,
  ViewStyle,
  AccessibilityProps,
} from 'react-native';

export interface InputProps {
  value: string;
  styles?: TextStyle | ViewStyle;
  placeholder?: string;
  onChange?: (value: string) => void;
  editable?: boolean;
  inputProps?: AccessibilityProps;
}
