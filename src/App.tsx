import { BrowserRouter, Routes, Route } from 'react-router';

import { HomePage } from '@pages';

function App() {
  return (
    <div className="h-full p-4">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
