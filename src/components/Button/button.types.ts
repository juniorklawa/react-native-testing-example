import {
  ButtonProps,
  TextProps,
  TextStyle,
  TouchableHighlightProps,
  StyleProp,
  ViewStyle,
} from 'react-native';

export interface ButtonPropsProtocol {
  title: string;
  onPress: () => void;
  buttonProps?: ButtonProps | TouchableHighlightProps;
  buttonStyles?: StyleProp<ViewStyle>;
  titleStyles?: StyleProp<ViewStyle> | TextStyle;
  titleProps?: TextProps;
}
