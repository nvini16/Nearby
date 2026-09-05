export type ProfileVisibility = 'public' | 'private' | 'limited';

export type UserRole = 'visitor' | 'host';

export type ExternalLink = {
  id: string;
  label?: string;
  url: string;
};

export type User = {
  id: string;
  username: string;
  displayName: string;
  avatarUrl?: string;
  bio?: string;
  links: ExternalLink[];
  visibility: ProfileVisibility;
  roles: UserRole[];
  createdAt: string;
  updatedAt: string;
};
