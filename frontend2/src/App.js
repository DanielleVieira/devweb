
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './pages/fanfic/create';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home /> }/>
        <Route path='/fanfic/create' element={<Create /> }/>
      </Routes>
    </Router>
  );
}

export default App;
