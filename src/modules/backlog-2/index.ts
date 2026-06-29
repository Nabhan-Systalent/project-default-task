import { Module } from '@nestjs/common';
import { TasksController } from './backlog/tasks.controller';
import { ProjectsController } from './backlog/projects.controller';
import { TasksService } from './backlog/tasks.service';
import { ProjectsService } from './backlog/projects.service';

/**
 * Story module for backlog-2 — synthesised by the AEGIS code-gen pipeline so the
 * generated controllers/providers are mounted by the application entrypoint.
 */
@Module({
  controllers: [TasksController, ProjectsController],
  providers: [TasksService, ProjectsService],
})
export class Backlog2Module {}
