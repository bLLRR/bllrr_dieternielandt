import { Project } from './Project';

export interface Job {
  id: number;
  title: string;
  company: string;
  time: string;
  text?: string | null;
  projects?: Project[] | null;
}
