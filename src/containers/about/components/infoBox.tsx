import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface InfoBoxProps {
  title: string;
  description: string;
}

export const InfoBox = ({title, description}: InfoBoxProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
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
  title: {
    color: 'gray',
    fontSize: 12,
  },
  description: {
    color: 'black',
  },
});
