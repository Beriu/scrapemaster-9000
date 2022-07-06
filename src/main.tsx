import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import ScrapperResults from './views/ScrapperResults';
import Scrappers from './views/Scrappers';
import ScrapperTargets from './views/ScrapperTargets';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<AdminLayout />}>
                    <Route path="/" element={<Scrappers />} />
                    <Route
                        path="/scrapper-targets"
                        element={<ScrapperTargets />}
                    />
                    <Route
                        path="/scrapper-results"
                        element={<ScrapperResults />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
