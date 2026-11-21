import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import CropFarmers from './pages/CropFarmers';
import PoultryFarmers from './pages/PoultryFarmers';
import Quality from './pages/Quality';
import Impact from './pages/Impact';
import Traceability from './pages/Traceability';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/crop-farmers" element={<CropFarmers />} />
          <Route path="/poultry-farmers" element={<PoultryFarmers />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/traceability" element={<Traceability />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}