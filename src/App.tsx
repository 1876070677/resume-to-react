import { Routes, Route } from 'react-router-dom';

import { Resume } from '@/pages/Resume';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Resume />} />
    </Routes>
  );
}

export default App;
