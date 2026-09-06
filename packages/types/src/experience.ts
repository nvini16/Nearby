import type { Media } from './post';


export type ExperienceVisibility = 'public' | 'private';

export type Experience = {
  id: string;
  userId: string;
  placeId: string;
  description?: string;
  media: Media[];
  occurredAt: string;
  createdAt: string;
  visibility: ExperienceVisibility;
};
