import TechIcon from './TechIcon';
import Pill from './Pill';

interface TechPillProps {
  icon?: string;
  text: string | undefined;
  width?: number;
  height?: number;
}

export default function TechPill({
  icon = '',
  text,
  height = 15,
  width = 15,
}: TechPillProps) {
  return (
    <Pill className="flex items-center">
      <TechIcon icon={icon} height={height} width={width} />
      {text}
    </Pill>
  );
}
