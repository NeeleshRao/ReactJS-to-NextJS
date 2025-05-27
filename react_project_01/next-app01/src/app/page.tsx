"use client"
import { useState } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Example Project</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
};

export default Home;