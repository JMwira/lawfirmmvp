import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Index from './Pages/Home';
import Social from './Pages/components/Social';
import Header from './Pages/components/Header';

function App() {
  return (
    <div className='App' >
      <Router>
        <div>
          <Header/>
          <Social/>
          <Routes>
            <Route path='/' element={<Index/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
