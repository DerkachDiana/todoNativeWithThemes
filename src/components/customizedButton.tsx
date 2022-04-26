import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { tasksStore } from '../mobx/store';

interface CustomizedButtonProps {
  onPressFunction: () => void;
  text: string;
  stylesProps: StyleProp<ViewStyle>;
}

export const CustomizedButton = ({
  onPressFunction,
  text,
  stylesProps,
}: CustomizedButtonProps) => {
  return (
    <TouchableOpacity style={[ stylesProps, styles.button, { backgroundColor: tasksStore.theme?.buttonColor } ]} onPress={() => onPressFunction()}>
      <Text style={[ styles.buttonText, { color: tasksStore.theme?.buttonTextColor } ]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
  },
});
