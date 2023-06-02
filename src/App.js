import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Recipes from './pages/Recipes';
import Media from './pages/Media';
import Carrer from './pages/Carrer';
import Contect from './pages/Contect';
import Footer from './component/Footer';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/media" element={<Media />} />
        <Route path="/carrer" element={<Carrer />} />
        <Route path="/contact" element={<Contect />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
