import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DocSimp from './page/DocSimp/DocSimp';
import TG from './page/TG/TG';
import EL from './page/EL/EL';
import SC from './page/SC/SC';
import LandingPage from './page/Landing/Landing';
import './app.scss';
import Navbar from './layout/navbar/Navbar';
function App() {
    return (
        <Router>
            <div className='App'>
                <Navbar />
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/GenerateSummary' element={<DocSimp />} />
                    <Route path='/GenerateTemplate' element={<TG />} />
                    <Route path='/ExploreLaws' element={<EL />} />
                    <Route path='/ScheduleCall' element={<SC />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;





