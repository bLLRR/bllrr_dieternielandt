import { Technology } from './Technology';

export interface Project {
  name: string;
  description: string;
  projectIcon?: {
    name: string;
    color?: string;
  };
  technologies?: Technology[];
}
