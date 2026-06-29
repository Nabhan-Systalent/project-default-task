import { Injectable } from '@nestjs/common';
import { ProjectResponseDto } from './dto';

@Injectable()
export class ProjectsService {
  private projects = [{ id: 'p1', name: 'Project A' }];

  findAll(): ProjectResponseDto[] {
    return this.projects;
  }

  delete(id: string): void {
    this.projects = this.projects.filter(p => p.id !== id);
  }
}
