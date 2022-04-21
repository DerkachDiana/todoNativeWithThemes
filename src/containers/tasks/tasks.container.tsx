import React, { useState } from 'react';
import { TasksComponent } from './tasks.component';
import { TaskType } from '../../types/Task';
import { useDispatch } from 'react-redux';
import { SignOutAction } from '../../redux/actions/loginActions';
import { tasksStore } from '../../mobx/store';
import { setState } from '../../asyncStorage/asyncStore';

const initialTask = {
  _id: '',
  isChecked: false,
  text: ''
};

export const TasksContainer = () => {
  const [ task, setTask ] = useState<TaskType>(initialTask);
  const dispatch = useDispatch();

  const onClickAddButton = () => {
    const newTask: TaskType = {
      _id: Date.now().toString(),
      text: task.text,
      isChecked: false,
    };
    tasksStore.addTask(newTask);
    setTask({
      ...task, text: ''
    });
  };
  const updateTextOfTask = (text: string, taskId: string) => {
    tasksStore.updateTask({ _id: taskId, isChecked: task.isChecked, text: text });
  };

  const inputTextHandler = (text: string) => {
    setTask({
      _id: task._id ,
      text: text,
      isChecked: task.isChecked,
    });
  };
  const checkboxHandler = (isChecked: boolean) => {
    setTask({
      _id: task._id,
      text: task.text ,
      isChecked: isChecked,
    });
  };
  const deleteTask = (taskId: string) => {
    tasksStore.deleteTask(taskId);
  };

  const signOut = () => {
    setState({ isLoading: false, isSignOut: true, userToken: null });
    dispatch(SignOutAction());
  };

  return (
    <TasksComponent
      onClickAddButton={ onClickAddButton }
      inputTextHandler={ inputTextHandler }
      checkboxHandler={ checkboxHandler }
      deleteTask={ deleteTask }
      text={task.text}
      updateTextOfTask={updateTextOfTask}
      signOut={signOut}
    />
  );
};
