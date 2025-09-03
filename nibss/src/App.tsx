import { Routes, Route } from "react-router-dom";
import Index from './pages/index';

function App() {
  return (
    <div>
      {/* Navigation */}
      {/* <nav className="p-4 bg-gray-200">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/about" className="mr-4">About</Link>
        <Link to="/contact">Contact</Link>
      </nav> */}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Index/>} />
      </Routes>
    </div>
  );
}

export default App;
