'use client';

import React from 'react';
import { MemberListProps } from './MemberList.types';

export const MemberList: React.FC<MemberListProps> = ({
  members,
  onRoleChange,
  onRemoveMember,
  isLoading,
  error,
}) => {
  if (isLoading) {
    return <div className="p-4 text-center">Loading members...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-500">Error: {error}</div>;
  }

  if (members.length === 0) {
    return <div className="p-4 text-center text-gray-500">No members found.</div>;
  }

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Role</th>
            <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {members.map((member) => (
            <tr key={member.id}>
              <td className="px-6 py-4">
                <div className="text-sm font-medium text-gray-900">{member.name}</div>
                <div className="text-sm text-gray-500">{member.email}</div>
              </td>
              <td className="px-6 py-4">
                <select
                  value={member.role}
                  onChange={(e) => onRoleChange(member.id, e.target.value as any)}
                  className="rounded border border-gray-300 px-2 py-1 text-sm focus:border-blue-500 focus:outline-none"
                >
                  <option value="admin">Admin</option>
                  <option value="editor">Editor</option>
                  <option value="viewer">Viewer</option>
                </select>
              </td>
              <td className="px-6 py-4 text-right">
                <button
                  onClick={() => onRemoveMember(member.id)}
                  className="text-red-600 hover:text-red-900 text-sm font-medium"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
