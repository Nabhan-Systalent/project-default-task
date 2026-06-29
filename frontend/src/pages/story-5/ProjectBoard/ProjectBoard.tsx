'use client';

import { useState } from 'react';
import { ProjectBoardProps, Task } from './ProjectBoard.types';

const COLUMNS = [
  { id: 'todo', label: 'To Do' },
  { id: 'in-progress', label: 'In Progress' },
  { id: 'done', label: 'Done' },
] as const;

export const ProjectBoard = ({ initialTasks }: ProjectBoardProps) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const moveTask = (taskId: string, newStatus: Task['status']) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t))
    );
  };

  if (!tasks) return <div className="p-4 text-center">Loading board...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 h-full bg-[var(--color-background-subtle)]">
      {COLUMNS.map((col) => (
        <div key={col.id} className="flex flex-col gap-4">
          <h2 className="font-semibold text-[var(--color-text-primary)]">
            {col.label}
          </h2>
          <div className="flex flex-col gap-3 min-h-[200px] bg-[var(--color-background-surface)] p-4 rounded-lg border border-[var(--color-border-subtle)]">
            {tasks
              .filter((t) => t.status === col.id)
              .map((task) => (
                <div
                  key={task.id}
                  className="p-4 bg-[var(--color-background-default)] rounded border border-[var(--color-border-subtle)] shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                >
                  <h3 className="font-medium text-[var(--color-text-primary)]">{task.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-1 line-clamp-2">
                    {task.description}
                  </p>
                  <div className="mt-4 flex gap-2">
                    {COLUMNS.filter(c => c.id !== col.id).map(c => (
                      <button
                        key={c.id}
                        onClick={() => moveTask(task.id, c.id as Task['status'])}
                        className="text-xs px-2 py-1 bg-[var(--color-background-subtle)] rounded text-[var(--color-text-secondary)] hover:bg-[var(--color-background-active)]"
                      >
                        Move to {c.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            {tasks.filter((t) => t.status === col.id).length === 0 && (
              <div className="text-sm text-[var(--color-text-disabled)] italic py-4 text-center">
                No tasks
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
