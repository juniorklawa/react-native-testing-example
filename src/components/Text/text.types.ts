import { TextStyle } from 'react-native';

export interface TextProps {
  styles?: TextStyle;
  value?: string;
  accessibilityLabel: string;
}
