/* eslint-disable react/function-component-definition */
import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { NotFound } from '../pages/NotFound';
import { Vehicle } from '../pages/Vehicles';

// Codigo que scrola para o topo quando entra em uma rota
function ScrollToTop(): null {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const Router: React.FC = () => (
  <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Vehicle />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);
