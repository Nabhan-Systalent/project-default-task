import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { TaskDto, CreateTaskDto } from './dto';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @ApiResponse({ type: [TaskDto] })
  listTasks(): TaskDto[] {
    return this.tasksService.findAll();
  }

  @Post()
  @ApiResponse({ type: TaskDto, status: 201 })
  createTask(@Body() createTaskDto: CreateTaskDto): TaskDto {
    return this.tasksService.create(createTaskDto);
  }
}
