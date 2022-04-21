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
      <Text style={tasksStore.theme.light ? [ styles.color, LIGHT_MODE.color ] : [ styles.color, DARK_MODE.color ]}>{title}</Text>
      <Text style={tasksStore.theme.light ? [ styles.description, LIGHT_MODE.color ] : [ styles.description, DARK_MODE.color ]}>{description}</Text>
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
    color: 'gray',
    fontSize: 12,
  },
  description: {
    color: 'black',
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
