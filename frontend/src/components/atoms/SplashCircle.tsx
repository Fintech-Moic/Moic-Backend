interface SplashCircleProps {
  color: string;
  zindex: string;
}

export default function SplashCircle({ color, zindex }: SplashCircleProps) {
  return <div className={`w-700 h-700 rounded-full ${color} ${zindex}`} />;
}
