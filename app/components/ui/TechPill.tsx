import TechIcon from './TechIcon';
import Pill from './Pill';
import { clsx } from 'clsx';

interface TechPillProps {
  className?: string;
  icon?: string;
  text: string | undefined;
  width?: number;
  height?: number;
}

export default function TechPill({
  className = '',
  icon = '',
  text,
  height = 20,
  width = 20,
}: TechPillProps) {
  return (
    <Pill className={clsx(className, `flex items-center align-baseline`)}>
      <TechIcon icon={icon} height={height} width={width} />
      <span className="text-sm">{text}</span>
    </Pill>
  );
}
