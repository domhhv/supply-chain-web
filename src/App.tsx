import { BrowserRouter, Routes, Route } from 'react-router';

import { HomePage, ItemDetailPage } from '@pages';

function App() {
  return (
    <div className="h-full p-4">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/item/:id" element={<ItemDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
