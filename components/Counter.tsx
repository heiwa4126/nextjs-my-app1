'use client';

import { useState } from 'react';

export function Counter({ className }: { className?: string }) {
  const [count, setCount] = useState(0);
  return (
    <button className={className ?? 'btn'} onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  );
}

export default Counter;
