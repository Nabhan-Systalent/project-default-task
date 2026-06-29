import { Injectable } from '@nestjs/common';
import { TaskResponseDto, CreateTaskDto } from './dto';

@Injectable()
export class TasksService {
  private tasks = [{ id: '1', title: 'Task 1' }];

  findAll(): TaskResponseDto[] {
    return this.tasks;
  }

  create(dto: CreateTaskDto): TaskResponseDto {
    const newTask = { id: Date.now().toString(), ...dto };
    this.tasks.push(newTask);
    return newTask;
  }
}
