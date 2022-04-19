import AsyncStorage from '@react-native-async-storage/async-storage';
import { StateType } from '../types/State';

export const setState = async (value: StateType) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@storage_Key', jsonValue);
  } catch (e) {
    console.log('setState ' + e);
  }
};

export const getState = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    console.log('getState' + e);
  }
};
