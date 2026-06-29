import { Controller, Get, Delete, Param, HttpCode } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { ProjectsService } from './projects.service';
import { ProjectDto } from './dto';

@ApiTags('Projects')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  @ApiResponse({ type: [ProjectDto] })
  listProjects(): ProjectDto[] {
    return this.projectsService.findAll();
  }

  @Delete(':id')
  @HttpCode(204)
  deleteProject(@Param('id') id: string): void {
    this.projectsService.delete(id);
  }
}
