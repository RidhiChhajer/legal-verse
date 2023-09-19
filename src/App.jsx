import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DocSimp from './page/DocSimp/DocSimp';
import TG from './page/TG/TG';
import EL from './page/EL/EL';
import './app.scss';

function App() {
    return (
        <Router>
            <div className='App'>
                <Routes>
                    <Route exact path='/' element={<DocSimp />} />
                    <Route path='/tg' element={<TG />} />
                    <Route path='/el' element={<EL />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
