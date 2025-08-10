import { rpRfv, rpS, rpVS } from '@/utils/responsive';
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native';

interface CustomButtonProps {
  // Basic props
  text: string;
  onPress: () => void;

  // Styling props
  backgroundColor?: string;
  textColor?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;

  // State props
  disabled?: boolean;
  loading?: boolean;

  // Optional icon props
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const AppButton: React.FC<CustomButtonProps> = ({
  text,
  onPress,
  backgroundColor = '#8E97FD',
  textColor = '#FFFFFF',
  style,
  textStyle,
  disabled = false,
  loading = false,
  // leftIcon,
  // rightIcon,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.button,
        { backgroundColor: disabled ? '#A0A0A0' : backgroundColor },
        style,
      ]}
      activeOpacity={0.7}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={text}
      accessibilityState={{ disabled: disabled || loading }}
    >
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <Text
          style={[
            styles.buttonText,
            disabled && styles.disabledText,
            textStyle,
          ]}
        >
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#8E97FD',
    width: rpS(300),
    height: rpVS(50),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: rpS(38),
  },
  buttonText: {
    fontFamily: 'Sora-Regular',
    color: '#FFFFFF',
    fontSize: rpRfv(12),
    textTransform: 'uppercase',
  },
  disabledText: {
    opacity: 0.7,
  },
});

export default AppButton;
