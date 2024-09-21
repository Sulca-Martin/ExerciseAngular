import { ITask } from './ITask';

export class Task implements ITask {
  constructor(
    public id: number,
    public title: string,
    public completed: boolean = false
  ) {}
}
