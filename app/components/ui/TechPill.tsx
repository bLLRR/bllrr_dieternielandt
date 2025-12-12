import { Technology } from '@/types/Technology';

import TechIcon from './TechIcon';
import Pill from './Pill';

interface TechPillProps {
  technology: Technology;
  width?: number;
  height?: number;
}

export default function TechPill({
  technology,
  height = 15,
  width = 15,
}: TechPillProps) {
  return (
    <Pill className="flex items-center">
      <TechIcon icon={technology.icon} height={height} width={width} />
      {technology.name}
    </Pill>
  );
}
