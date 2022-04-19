import { action, makeObservable, observable } from 'mobx';
import { TaskType } from '../types/Task';

export class TasksStore {
  tasks: TaskType[] = [];

  constructor() {
    makeObservable(this, {
      tasks: observable,
      addTask: action,
      deleteTask: action,
      updateTask: action,
    });
  }

  addTask(newTask: TaskType) {
    this.tasks = [ ...this.tasks, newTask ];
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => taskId !== task._id);
  }

  updateTask(task: TaskType) {
    this.tasks = this.tasks.map(task =>
    {
      if (task._id === task._id) {
        return {
          ...task, isChecked: task.isChecked, text: task.text
        };
      }
      return task;
    });
  }
}
export const tasksStore = new TasksStore();
