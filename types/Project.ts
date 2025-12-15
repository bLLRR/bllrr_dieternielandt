import { Technology } from './Technology';

export interface Project {
  id: number;
  name: string;
  type: 'private' | 'work';
  tagline: string;
  description: string;
  projectIcon?: {
    name: string;
    color?: string;
  };
  technologies?: Technology[];
  link?: string;
  repository?: string;
}
