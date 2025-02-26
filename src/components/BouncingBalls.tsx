import React, { useState, useEffect } from 'react';

const BouncingBalls: React.FC = () => {
  const [balls, setBalls] = useState<{ x: number; y: number; dx: number; dy: number }[]>([]);

  useEffect(() => {
    const NewBalls = Array.from({ length: 5 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      dx: (Math.random() - 0.5) * 4,
      dy: (Math.random() - 0.5) * 4,
    }));
    setBalls(NewBalls);
  }, []);

  useEffect(() => {
    const Animate = () => {
      setBalls((prevBalls) =>
        prevBalls.map(ball => {
          const NewX = ball.x + ball.dx;
          const NewY = ball.y + ball.dy;

          if (NewX < 0 || NewX > window.innerWidth) ball.dx *= -1;
          if (NewY < 0 || NewY > window.innerHeight) ball.dy *= -1;

          return { ...ball, x: NewX, y: NewY };
        })
      );
      requestAnimationFrame(Animate);
    };
    Animate();
  }, []);

  return (
    <div>
      {balls.map((ball, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: ball.y,
            left: ball.x,
            width: '50px',
            height: '50px',
            backgroundColor: 'red',
            borderRadius: '50%',
            cursor: 'pointer',
          }}
          onClick={() => alert(`Ball ${index + 1} clicked!`)}
        />
      ))}
    </div>
  );
};

export default BouncingBalls;
