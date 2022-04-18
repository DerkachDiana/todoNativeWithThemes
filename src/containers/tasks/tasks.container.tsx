import React, { useState } from 'react';
import { TasksComponent } from './tasks.component';
import { TaskType } from '../../types/Task';

const initialTask = {
  _id: '',
  isChecked: false,
  text: ''
};

export const TasksContainer = () => {
  const [ tasks, setTasks ] = useState<TaskType[]>([]);
  const [ task, setTask ] = useState<TaskType>(initialTask);

  const onClickAddButton = () => {
    const newTask: TaskType = {
      _id: Date.now().toString(),
      text: task.text,
      isChecked: false,
    };
    setTasks([ ...tasks, newTask ]);
    setTask( { _id: '', text: '', isChecked: false });
  };
  const updateTextOfTask = (text: string, taskId: string) => {
    const updatedTasks: TaskType[] = tasks.map((task) =>
      task._id === taskId ?
        {
          _id: task._id,
          isChecked: task.isChecked,
          text: text
        }
        : task
    );
    setTasks(updatedTasks);
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
    setTasks(tasks.filter(item => item._id !== taskId));
  };

  return (
    <TasksComponent
      onClickAddButton={ onClickAddButton }
      inputTextHandler={ inputTextHandler }
      tasks={tasks}
      checkboxHandler={ checkboxHandler }
      deleteTask={ deleteTask }
      text={task.text}
      updateTextOfTask={updateTextOfTask}
    />
  );
};
