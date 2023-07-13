import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './pages/signup'
import Categories from './pages/categories'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/categories' element={<Categories/>}/>
      </Routes>
    </Router> 
  );
}

export default App;
