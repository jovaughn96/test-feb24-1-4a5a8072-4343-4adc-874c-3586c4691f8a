import React, { useEffect, useRef } from 'react';

const BouncingBalls: React.FC = () => {
  const BallsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const HandleMouseMove = (event: MouseEvent) => {
      BallsRef.current.forEach(ball => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        ball.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener('mousemove', HandleMouseMove);

    return () => {
      window.removeEventListener('mousemove', HandleMouseMove);
    };
  }, []);

  return (
    <div className="absolute">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          ref={el => BallsRef.current[index] = el!}
          className="w-10 h-10 rounded-full bg-blue-500 absolute"
          style={{
            transition: 'transform 0.2s',
            left: `${Math.random() * window.innerWidth}px`,
            top: `${Math.random() * window.innerHeight}px`
          }}
        />
      ))}
    </div>
  );
};

export default BouncingBalls;
