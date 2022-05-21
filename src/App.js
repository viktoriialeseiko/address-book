import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Contacts from './components/Contacts';

function App() {
    return (
        // <Login />
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/contacts' element={<Contacts />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
