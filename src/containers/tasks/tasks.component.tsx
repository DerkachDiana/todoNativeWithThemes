import React from 'react';
import { FlatList, KeyboardAvoidingView, StyleSheet, TextInput, View } from 'react-native';
import { Task } from './components/task';
import { CustomizedButton } from '../../components/customizedButton';
import { useTranslation } from 'react-i18next';
import { tasksStore } from '../../mobx/store';
import { observer } from 'mobx-react';

interface TasksComponentProps {
  onClickAddButton: () => void;
  inputTextHandler: (text: string) => void;
  checkboxHandler: (isChecked: boolean) => void;
  deleteTask: (taskId: string) => void;
  text: string;
  updateTextOfTask: (text: string, taskId: string) => void;
  signOut: () => void;
}

export const TasksComponent = observer(({
  onClickAddButton,
  inputTextHandler,
  checkboxHandler,
  deleteTask,
  text,
  updateTextOfTask,
  signOut,
}: TasksComponentProps) => {
  const { t } = useTranslation();
  return (
    <View style={ tasksStore.theme.light
      ?
      [ styles.container, LIGHT_THEME.container ]
      :
      [ styles.container, DARK_THEME.container ]
    }>
      <View style={ styles.addTaskBox }>
        <TextInput
          style={ tasksStore.theme.light
            ? [ styles.textInput, LIGHT_THEME.textInput ]
            : [ styles.textInput, DARK_THEME.textInput ]}
          placeholder={t('translation.tasksScreen.writeYourTaskHere')}
          placeholderTextColor={ tasksStore.theme.light ? 'gray' : 'white'}
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
        style={ styles.list }
        data={ tasksStore.tasks }
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
});
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

const LIGHT_THEME = StyleSheet.create({
  container: {
    backgroundColor: '#F1F1F1',
  },
  textInput: {
    backgroundColor: 'white',
    color: 'black'
  }
});
const DARK_THEME = StyleSheet.create({
  container: {
    backgroundColor: '#1C1C1C',
  },
  textInput: {
    backgroundColor: '#2E2E2E',
    color: '#FFF'
  },
  test: {
    color: 'white'
  }
});
