import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { TaskType } from '../../../types/Task';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { CustomizedButton } from '../../../components/customizedButton';

interface TaskProps {
  task: TaskType;
  checkboxHandler: (isChecked: boolean) => void;
  deleteTask: (taskId: string) => void;
  updateTextOfTask: (text: string, taskId: string) => void;
}

export const Task = ({ task, checkboxHandler, deleteTask, updateTextOfTask }: TaskProps) => {
  return (
    <View style={ styles.input }>
      <BouncyCheckbox
        iconStyle={{ borderColor: '#40e6cf' }}
        fillColor={'#40e6cf'}
        onPress={ (isChecked: boolean) => checkboxHandler(isChecked) }
      />
      <TextInput style={ styles.taskText } value={task.text} onChangeText={(text) => updateTextOfTask(text, task._id)} />
      <CustomizedButton
        onPressFunction={ () => deleteTask(task._id) }
        text={ 'Delete' }
        stylesProps={ styles.button }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    flex: 1,
  },
  taskText: {
    flex: 4,
    flexWrap: 'nowrap',
  },
});
