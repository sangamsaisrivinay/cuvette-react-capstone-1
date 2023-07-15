import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './pages/signup'
import Categories from './pages/categories'
import Home from './pages/Home'
import Browse from './pages/Browse'

function App() {


  return (

    <Router >
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/browse' element={<Browse/>}/>
      </Routes>
    </Router> 
     
  );
}

export default App;
