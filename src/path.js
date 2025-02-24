import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import AnimeSelection from './AnimeSelection'; // Make sure you have this page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/anime" element={<AnimeSelection />} />
      </Routes>
    </Router>
  );
}

export default App;
