import React from 'react';
import { FlatList, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Task } from './components/task';
import { TaskType } from '../../types/Task';
import { CustomizedButton } from '../../components/customizedButton';
import { useTranslation } from 'react-i18next';

interface TasksComponentProps {
  onClickAddButton: () => void;
  inputTextHandler: (text: string) => void;
  tasks: TaskType[];
  checkboxHandler: (isChecked: boolean) => void;
  deleteTask: (taskId: string) => void;
  text: string;
  updateTextOfTask: (text: string, taskId: string) => void;
  signOut: () => void;
}

export function TasksComponent({
  onClickAddButton,
  inputTextHandler,
  tasks,
  checkboxHandler,
  deleteTask,
  text,
  updateTextOfTask,
  signOut,
}: TasksComponentProps) {
  const { t } = useTranslation();
  return (
    <View style={ styles.container }>
      <View style={ styles.addTaskBox }>
        <TextInput
          style={ styles.textInput }
          placeholder={t('translation.tasksScreen.writeYourTaskHere')}
          onChangeText={ inputTextHandler }
          value={text}
        />
        <CustomizedButton
          onPressFunction={ () => onClickAddButton() }
          stylesProps={ styles.addTaskButton }
          text={ '+' }
        />
      </View>
      <FlatList
        style={styles.list}
        data={tasks}
        renderItem={({ item }) => (
          <Task
            task={item}
            checkboxHandler={checkboxHandler}
            deleteTask={deleteTask}
            updateTextOfTask={updateTextOfTask}
          />
        )}
      />
      <CustomizedButton onPressFunction={signOut} text={t('translation.tasksScreen.signOutButton')} stylesProps={ styles.signOutButton }/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  list: {
    height: '85%',
    width: '100%',
  },
  textInput: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginBottom: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 5,
    width: '80%',
    height: '100%',
  },
  signOutButton: {
    width: '100%',
    height: '15%',
  },
  addTaskButton: {
    width: '20%',
    height: '100%',
  },
  addTaskBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 40,
    marginBottom: 10,
  },
});
