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
      <Text style={styles.color}>{title}</Text>
      <Text>{description}</Text>
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
  color: {
    fontSize: 12,
  },
});

const DARK_MODE = StyleSheet.create({
  color: {
    color: '#FFF',
  }
});

const LIGHT_MODE = StyleSheet.create({
  color: {
    color: 'black',
  }
});
