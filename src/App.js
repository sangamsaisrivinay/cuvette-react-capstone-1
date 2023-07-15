import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './pages/signup'
import Categories from './pages/categories'
import Home from './pages/Home'
// import Test from './test'
// import ModalTest from './pages/Home/widgets/notes/ModalTest';
import TimerCard from './pages/Home/widgets/test/TimerCard';


function App() {



  return (
    <Router>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </Router> 
      // <Test/>
    // <div>
    //   <TimerCard/>
    // </div>
  );
}

export default App;
