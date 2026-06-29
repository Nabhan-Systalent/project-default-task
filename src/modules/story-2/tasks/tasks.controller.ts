import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, TaskResponseDto } from './dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @ApiResponse({ type: [TaskResponseDto] })
  listTasks(): TaskResponseDto[] {
    return this.tasksService.findAll();
  }

  @Post()
  @ApiResponse({ status: 201, type: TaskResponseDto })
  createTask(@Body() createTaskDto: CreateTaskDto): TaskResponseDto {
    return this.tasksService.create(createTaskDto);
  }
}
