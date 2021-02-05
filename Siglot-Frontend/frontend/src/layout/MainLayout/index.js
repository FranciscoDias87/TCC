import React from 'react';

import DashboardLayout from 'src/layout/DashboardLayout';
import MainLayout from 'src/layout/MainLayout';
import UsuarioView from 'src/views/UsuarioView';


const routes = [
  {
    path: '/Caixa',
    element: <DashboardLayout />,
    children: [
      { path: 'usuario', element: <UsuarioView /> },

    ]
  },
  {
    path: '/Gerente',
    element: <MainLayout />,
    children: [
      { path: 'usuario', element: <UsuarioView /> }

    ]
  }
];

export default routes;
