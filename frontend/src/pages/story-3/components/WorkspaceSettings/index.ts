import { Member } from './MemberList.types';

export interface MemberListProps {
  members: Member[];
  onRoleChange: (memberId: string, newRole: Member['role']) => void;
  onRemoveMember: (memberId: string) => void;
  isLoading?: boolean;
  error?: string | null;
}
