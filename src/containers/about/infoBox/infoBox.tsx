import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { tasksStore } from '../../../mobx/store';

interface InfoBoxProps {
  title: string;
  description: string;
}

export const InfoBox = ({ title, description }: InfoBoxProps) => {
  return (
    <View style={styles.container}>
      <Text style={ [ styles.text, { color: tasksStore.theme?.color } ] }>{title}</Text>
      <Text style={{ color: tasksStore.theme?.color }}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 10,
    width: 300,
  },
  text: {
    fontSize: 12,
  },
});
