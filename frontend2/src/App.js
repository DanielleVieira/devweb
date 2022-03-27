
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Create from './pages/fanfic/create';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Header /> }/>
        <Route path='/fanfic/create' element={<Create /> }/>
      </Routes>
    </Router>
  );
}

export default App;
