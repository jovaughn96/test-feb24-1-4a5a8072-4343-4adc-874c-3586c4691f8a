// Assume this is the complete code for BouncingBalls component
import React, { useRef, useEffect } from 'react';

const BouncingBalls = () => {
  const BallsRef = useRef<HTMLDivElement>(null);

  const HandleMouseMove = (event: MouseEvent) => {
    const Balls = BallsRef.current?.children;
    if (Balls) {
      Array.from(Balls).forEach((ball: HTMLElement) => {
        const DeltaX = event.clientX - ball.getBoundingClientRect().left;
        const DeltaY = event.clientY - ball.getBoundingClientRect().top;
        const Distance = Math.sqrt(DeltaX * DeltaX + DeltaY * DeltaY);
        const Offset = Math.min(50, 50 - Distance);
        ball.style.transform = `translate(${Offset}px, ${Offset}px)`;
      });
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', HandleMouseMove);
    return () => {
      window.removeEventListener('mousemove', HandleMouseMove);
    };
  }, []);

  return (
    <div ref={BallsRef} className="flex space-x-4">
      <div className="w-16 h-16 bg-red-500 rounded-full"></div>
      <div className="w-16 h-16 bg-blue-500 rounded-full"></div>
      <div className="w-16 h-16 bg-green-500 rounded-full"></div>
    </div>
  );
};

export default BouncingBalls;
