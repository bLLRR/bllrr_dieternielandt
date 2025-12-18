import { Technology } from './Technology';

export interface ProjectIcon {
  name: string;
  color?: string;
}
export interface Project {
  id: number;
  name: string;
  type: 'private' | 'work';
  visible: boolean;
  tagline: string;
  description: string;
  descriptionComponent?: string;
  projectIcon?: ProjectIcon;
  technologies?: Technology[];
  link?: string;
  repository?: string;
  jobId?: number;
}
