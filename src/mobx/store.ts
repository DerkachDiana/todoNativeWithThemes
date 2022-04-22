import { action, makeObservable, observable } from 'mobx';
import { TaskType } from '../types/Task';
import { ThemeType } from '../types/Theme';

export class TasksStore {
  tasks: TaskType[] = [];
  theme: ThemeType = { light: true };

  constructor() {
    makeObservable(this, {
      tasks: observable,
      theme: observable,
      addTask: action,
      deleteTask: action,
      updateTask: action,
      changeTheme: action,

    });
  }

  addTask(newTask: TaskType) {
    this.tasks = [ ...this.tasks, newTask ];
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => taskId !== task._id);
  }

  updateTask(task: TaskType) {
    this.tasks = this.tasks.map(thisTask =>
    {
      if (thisTask._id === task._id) {
        return {
          ...thisTask, isChecked: task.isChecked, text: task.text
        };
      }
      return thisTask;
    });
  }
  changeTheme() {
    this.theme.light = !this.theme.light;
  }
}
export const tasksStore = new TasksStore();
