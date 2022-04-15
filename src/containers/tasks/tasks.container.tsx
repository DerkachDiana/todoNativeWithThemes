import React, {useState} from 'react';
import {TasksComponent} from './tasks.component';
import {TaskType} from '../../types/Task';

export const TasksContainer = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [task, setTask] = useState<TaskType>();
  const onClickAddButton = () => {
    const newTask: TaskType = {
      _id: Date.now().toString(),
      text: task?.text as string,
      isChecked: false,
    };
    setTasks([...tasks, newTask]);
  };
  const inputTextHandler = (text: string) => {
    setTask({
      _id: task?._id as string,
      text: text,
      isChecked: task?.isChecked as boolean,
    });
  };
  const checkboxHandler = (isChecked: boolean) => {
    setTask({
      _id: task?._id as string,
      text: task?.text as string,
      isChecked: isChecked,
    });
  };
  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter(item => item._id !== taskId));
  };

  return (
    <TasksComponent
      onClickAddButton={onClickAddButton}
      inputTextHandler={inputTextHandler}
      tasks={tasks}
      checkboxHandler={checkboxHandler}
      deleteTask={deleteTask}
    />
  );
};
