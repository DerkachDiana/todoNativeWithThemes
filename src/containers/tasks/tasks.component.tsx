import React from 'react';
import { FlatList, StyleSheet, TextInput, View } from 'react-native';
import { Task } from './components/task';
import { TaskType } from '../../types/Task';
import { CustomizedButton } from '../../components/customizedButton';

interface TasksComponentProps {
  onClickAddButton: () => void;
  inputTextHandler: (text: string) => void;
  tasks: TaskType[];
  checkboxHandler: (isChecked: boolean) => void;
  deleteTask: (taskId: string) => void;
  text: string;
  updateTextOfTask: (text: string, taskId: string) => void;
}

export function TasksComponent({
  onClickAddButton,
  inputTextHandler,
  tasks,
  checkboxHandler,
  deleteTask,
  text,
  updateTextOfTask,
}: TasksComponentProps) {
  return (
    <View style={ styles.container }>
      <View style={ styles.addTaskBox }>
        <TextInput
          style={ styles.textInput }
          placeholder={'Write your task here' }
          onChangeText={ inputTextHandler }
          value={text}
        />
        <CustomizedButton
          onPressFunction={ () => onClickAddButton() }
          stylesProps={ styles.button }
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
  button: {
    display: 'flex',
    justifyContent: 'center',
    width: '20%',
    height: '100%',
    backgroundColor: '#40e6cf',
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
  },
  addTaskBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 40,
    marginBottom: 10,
  },
});
