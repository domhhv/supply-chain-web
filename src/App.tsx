import { Button } from '@heroui/button';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4">
      <h1 className="mb-2">Vite + React</h1>
      <Button onPress={() => setCount((count) => count + 1)} color="primary">
        count is {count}
      </Button>
    </div>
  );
}

export default App;
