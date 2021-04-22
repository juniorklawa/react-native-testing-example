import {
  ButtonProps,
  TextProps,
  TextStyle,
  TouchableHighlightProps,
  StyleProp,
  ViewStyle,
  AccessibilityProps,
} from 'react-native';

export interface ButtonPropsProtocol {
  title: string;
  onPress: () => void;
  buttonProps?:
    | ButtonProps
    | TouchableHighlightProps
    | AccessibilityProps;
  buttonStyles?: StyleProp<ViewStyle>;
  titleStyles?: StyleProp<ViewStyle> | TextStyle;
  titleProps?: TextProps;
}
