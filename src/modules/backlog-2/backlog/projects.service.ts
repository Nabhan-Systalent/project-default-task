import { Injectable } from '@nestjs/common';
import { ProjectDto } from './dto';

@Injectable()
export class ProjectsService {
  private projects: ProjectDto[] = [{ id: 'proj-1', name: 'S3 Integration' }];

  findAll(): ProjectDto[] {
    return this.projects;
  }

  delete(id: string): void {
    this.projects = this.projects.filter((p) => p.id !== id);
  }
}
