import type { Media } from './post';

export type ExperienceType = 'visit' | 'activity' | 'event' | 'recommendation' | 'review';

export type ExperienceVisibility = 'public' | 'private';

export type Experience = {
  id: string;
  userId: string;
  placeId: string;
  type: ExperienceType;
  title?: string;
  description?: string;
  media: Media[];
  occurredAt: string;
  createdAt: string;
  visibility: ExperienceVisibility;
  pinnedToProfile: boolean;
  postId?: string;
};
