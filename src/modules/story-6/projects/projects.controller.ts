import { Controller, Get, Delete, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiNoContentResponse } from '@nestjs/swagger';
import { ProjectsService } from './projects.service';
import { ProjectDto } from './dto/project.dto';

@ApiTags('Projects')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  @ApiOkResponse({ type: [ProjectDto] })
  async listProjects(): Promise<ProjectDto[]> {
    return this.projectsService.findAll();
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiNoContentResponse({ description: 'Deleted' })
  async deleteProject(@Param('id') id: string): Promise<void> {
    await this.projectsService.delete(id);
  }
}
