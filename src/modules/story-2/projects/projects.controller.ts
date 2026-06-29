import { Controller, Get, Delete, Param, HttpCode } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectResponseDto } from '../tasks/dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('Projects')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  @ApiResponse({ type: [ProjectResponseDto] })
  listProjects(): ProjectResponseDto[] {
    return this.projectsService.findAll();
  }

  @Delete(':id')
  @HttpCode(204)
  deleteProject(@Param('id') id: string): void {
    return this.projectsService.delete(id);
  }
}
