import{Routes,Route} from 'react-router-dom'

import NavbarComponent from './components/NavbarComponent';
import FooterComponents from './components/FooterComponents';

import HomePage from './pages/HomePage';
import KelasPage from './pages/KelasPage';
import TestimonialPage from './pages/TestimonialPage';
import FaqPage from './pages/FaqPage';
import SyaratKeten from './pages/SyaratKeten';


function App() {
 return <div> 
    <NavbarComponent />

  <Routes>

    <Route path="/" Component={HomePage} />
    <Route path="/kelas" Component={KelasPage} />
    <Route path="/testimonial" Component={TestimonialPage} />
    <Route path="/faq" Component={FaqPage} />
    <Route path="/syarat" Component={SyaratKeten} />
    
  </Routes>
   
    {/* <FooterComponents/> */}
</div>
}

export default App;
