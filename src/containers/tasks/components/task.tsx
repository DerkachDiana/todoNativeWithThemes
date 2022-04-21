import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { TaskType } from '../../../types/Task';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { CustomizedButton } from '../../../components/customizedButton';
import { useTranslation } from 'react-i18next';
import { tasksStore } from '../../../mobx/store';

interface TaskProps {
  task: TaskType;
  checkboxHandler: (isChecked: boolean) => void;
  deleteTask: (taskId: string) => void;
  updateTextOfTask: (text: string, taskId: string) => void;
}

export const Task = ({ task, checkboxHandler, deleteTask, updateTextOfTask }: TaskProps) => {
  const { t } = useTranslation();
  return (
    <View style={ tasksStore.theme.light
      ? [ styles.input, LIGHT_THEME.input ]
      : [ styles.input, DARK_THEME.input ]}>
      <BouncyCheckbox
        iconStyle={{ borderColor: '#40e6cf' }}
        fillColor={'#40e6cf'}
        onPress={ (isChecked: boolean) => checkboxHandler(isChecked) }
      />
      <TextInput style={ tasksStore.theme.light
        ?
        [ styles.taskText, LIGHT_THEME.taskText ]
        :
        [ styles.taskText, DARK_THEME.taskText ]
      } value={task.text} onChangeText={(text) => updateTextOfTask(text, task._id)} />
      <CustomizedButton
        onPressFunction={ () => deleteTask(task._id) }
        text={ t('translation.tasksScreen.deleteButton') }
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
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    flex: 2,
    padding: 3,
  },
  taskText: {
    flex: 5,
    flexWrap: 'nowrap',
  },
});

const LIGHT_THEME = StyleSheet.create({
  input: {
    backgroundColor: 'white',
  },
  taskText: {
    color: 'black'
  }
});

const DARK_THEME = StyleSheet.create({
  input: {
    backgroundColor: '#2E2E2E',
  },
  taskText: {
    color: 'white'
  }
});
