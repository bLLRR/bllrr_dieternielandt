import StackIcon from 'tech-stack-icons'

interface StackIconProps {
  icon: string
  width?: number
  height?: number
}

export default function TechIcon({
  icon,
  width = 40,
  height = 40,
}: StackIconProps) {
  return (
    <div style={{ width: width, height: height }}>
      <StackIcon name={icon} />
    </div>
  )
}
