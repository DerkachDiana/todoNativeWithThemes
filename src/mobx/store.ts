import { action, makeObservable, observable } from 'mobx';
import { TaskType } from '../types/Task';
import { ThemeType } from '../types/Theme';
import THEMES from '../themes/themes.json';

export class TasksStore {
  tasks: TaskType[] = [];
  theme: ThemeType | undefined = THEMES[0];
  themeKey: string = 'LIGHT';

  constructor() {
    makeObservable(this, {
      tasks: observable,
      theme: observable,
      themeKey: observable,
      addTask: action,
      deleteTask: action,
      updateTask: action,
      changeTheme: action,
      changeThemeKey: action,

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
    this.theme = THEMES.find(theme => theme.key === this.themeKey);
  }
  changeThemeKey(key: string) {
    this.themeKey = key;
  }
}
export const tasksStore = new TasksStore();
