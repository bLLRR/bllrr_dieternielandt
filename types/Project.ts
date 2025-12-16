import { Technology } from './Technology';

export interface ProjectIcon {
  name: string;
  color?: string;
}
export interface Project {
  id: number;
  name: string;
  type: 'private' | 'work';
  tagline: string;
  description: string;
  projectIcon?: ProjectIcon;
  technologies?: Technology[];
  link?: string;
  repository?: string;
  jobId?: number;
}
