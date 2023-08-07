import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Todo from './components/Todo/Index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
