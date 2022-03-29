import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ThemaContext from './components/ThemaButtom/ThemaContext';
import { useState } from 'react';
import './App.css';
import Create from './pages/fanfic/create';
import Home from './pages/home';

function App() {
  const [thema, setThema] = useState('whitesmoke');

  return (
    <ThemaContext.Provider value={{thema: thema, setThema: setThema}}>
      <Router>
        <Routes>
          <Route path='/' element={<Home /> }/>
          <Route path='/fanfic/create' element={<Create /> }/>
        </Routes>
      </Router>
      {console.log(thema)}
    </ThemaContext.Provider>
  );
}

export default App;
