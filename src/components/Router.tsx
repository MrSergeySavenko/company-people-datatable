import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { RouterDetails } from '../pages/RouterDetails/RouterDetails';
import { Main } from '../pages';

export const Router = () => {
    return (
        <div>
            <Routes>
                <Route path='/main' element={<Main />} />
                <Route path='/details' element={<RouterDetails />} />
                <Route path='*' element={<Navigate to={'/main'} replace />} />
            </Routes>
        </div>
    );
};
