import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import Index from './views/Index';
import Scrappers from './views/Scrappers';
import ScrapperTargets from './views/ScrapperTargets';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<AdminLayout />}>
                    <Route path="/" element={<Index />} />
                    <Route path="/scrappers" element={<Scrappers />} />
                    <Route
                        path="/scrapper-targets"
                        element={<ScrapperTargets />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
