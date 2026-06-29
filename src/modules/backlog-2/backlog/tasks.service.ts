import { Injectable } from '@nestjs/common';
import { TaskDto, CreateTaskDto } from '../dto';

@Injectable()
export class TasksService {
  private tasks: TaskDto[] = [{ id: '1', title: 'Setup S3 bucket' }];

  findAll(): TaskDto[] {
    return this.tasks;
  }

  create(dto: CreateTaskDto): TaskDto {
    const newTask = { id: Date.now().toString(), ...dto };
    this.tasks.push(newTask);
    return newTask;
  }
}
