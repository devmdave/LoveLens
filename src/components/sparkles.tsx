'use client';
import { Sparkle } from 'lucide-react';
import { useEffect, useState } from 'react';

const SPARKLE_COUNT = 15;

const randomFrom = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

interface SparkleData {
  id: string;
  size: number;
  style: React.CSSProperties;
}

const generateSparkle = (): SparkleData => {
  const size = randomFrom(10, 25);
  const style = {
    top: `${randomFrom(0, 100)}%`,
    left: `${randomFrom(0, 100)}%`,
    animationDelay: `${randomFrom(0, 1000)}ms`,
    animationDuration: `${randomFrom(800, 1800)}ms`,
  };
  return {
    id: crypto.randomUUID(),
    size,
    style,
  };
};

export function Sparkles() {
  const [sparkles, setSparkles] = useState<SparkleData[]>([]);

  useEffect(() => {
    const generate = () => {
      const newSparkles = Array.from({ length: SPARKLE_COUNT }).map(generateSparkle);
      setSparkles(newSparkles);
    };

    // Generate sparkles on mount.
    // This will re-trigger if the component is re-rendered by a parent, creating a new effect each time.
    generate();
  }, []);
  

  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      {sparkles.map(({ id, size, style }) => (
        <div key={id} className="absolute animate-sparkle" style={style}>
          <Sparkle
            width={size}
            height={size}
            className="text-primary/70"
            strokeWidth={1.5}
          />
        </div>
      ))}
    </div>
  );
}
