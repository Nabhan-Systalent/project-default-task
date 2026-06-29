'use client';

import React from 'react';
import { ProjectListProps } from './ProjectList.types';

export const ProjectList: React.FC<ProjectListProps> = ({
  projects,
  isLoading = false,
  error = null,
  onProjectClick,
  onCreateProject,
}) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-red-500 bg-red-50 rounded-md border border-red-200">
        Error loading projects: {error}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Workspace Projects</h2>
        <button
          onClick={onCreateProject}
          className="px-4 py-2 bg-primary text-white rounded hover:opacity-90 transition-opacity"
        >
          Create Project
        </button>
      </div>

      {projects.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          No projects found. Create your first one to get started.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => onProjectClick?.(project.id)}
              className="p-5 border rounded-lg hover:shadow-md cursor-pointer transition-shadow bg-white"
            >
              <h3 className="text-lg font-medium">{project.name}</h3>
              <p className="text-sm text-gray-600 mt-1 mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex justify-between text-xs text-gray-400">
                <span>{project.memberCount} members</span>
                <span>Updated: {project.lastUpdated}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
