import StackIcon from 'tech-stack-icons';

interface StackIconProps {
  icon: string;
  width?: number;
  height?: number;
}

export default function TechIcon({
  icon,
  width = 40,
  height = 40,
}: StackIconProps) {
  const unsupportedIcons = [
    'livewire',
    'ploiio',
    'stripe',
    'sendgrid',
    'apexcharts',
    'deployer',
    'blade',
  ];

  if (unsupportedIcons.includes(icon)) {
    return null;
  }

  return (
    <div style={{ width: width, height: height }}>
      <StackIcon name={icon} />
    </div>
  );
}
