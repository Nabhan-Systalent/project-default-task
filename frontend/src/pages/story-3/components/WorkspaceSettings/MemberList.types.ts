export interface Member {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
}

export interface MemberListProps {
  members: Member[];
  onRoleChange: (memberId: string, newRole: Member['role']) => void;
  onRemoveMember: (memberId: string) => void;
  isLoading?: boolean;
  error?: string | null;
}
