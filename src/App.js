import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './component/home/Main';



function App() {

  return (
    <div className="App">
      <Main />
      {/* <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/carrer' element={<Carrer />} />
        <Route path='/contact' element={<Contact />} />
      </Routes> */}
    </div>
  );
}

export default App;
