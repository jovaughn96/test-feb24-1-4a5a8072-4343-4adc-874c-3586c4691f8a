import React, { useEffect, useRef, useState } from 'react';

const BouncingBalls = () => {
  const [balls, setBalls] = useState([
    { id: 1, x: 50, y: 50, dx: 2, dy: 2 },
    { id: 2, x: 100, y: 100, dx: -2, dy: 2 }
  ]);
  const ContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const Interval = setInterval(() => {
      setBalls((prevBalls) =>
        prevBalls.map((ball) => {
          let newX = ball.x + ball.dx;
          let newY = ball.y + ball.dy;

          // Bounce off the walls
          if (newX < 0 || newX > (ContainerRef.current?.clientWidth || 0)) {
            ball.dx *= -1;
          }
          if (newY < 0 || newY > (ContainerRef.current?.clientHeight || 0)) {
            ball.dy *= -1;
          }

          return { ...ball, x: newX, y: newY };
        })
      );
    }, 16);

    return () => clearInterval(Interval);
  }, []);

  const HandleClick = (id: number) => {
    setBalls((prevBalls) =>
      prevBalls.filter((ball) => ball.id !== id)
    );
  };

  return (
    <div ref={ContainerRef} className="relative w-full h-full">
      {balls.map((ball) => (
        <div
          key={ball.id}
          onClick={() => HandleClick(ball.id)}
          style={{
            position: 'absolute',
            left: ball.x,
            top: ball.y,
            width: 30,
            height: 30,
            borderRadius: '50%',
            backgroundColor: 'red',
            cursor: 'pointer'
          }}
        />
      ))}
    </div>
  );
};

export default BouncingBalls;
