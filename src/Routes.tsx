import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Home from './pages/Home/indext';

const Routes = () => (
    <BrowserRouter>
    <Navbar />
        <Route path="/">
            <Home />
        </Route>
    </BrowserRouter>
);

export default Routes;