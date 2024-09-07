import React from 'react';

import { RouteObject } from 'react-router-dom';

import { Home } from '../components/Home/Home';
import { Register } from '../components/Auth/Register/Register';
import { Login } from '../components/Auth/Login/Login';
import { ResetPassword } from '../components/Auth/ResetPassword/ResetPassword';
import { NotFound } from '../components/NotFound/NotFound';
import { GamingLaptops } from '../components/Products/GamingLaptops/GamingLaptops';
import { GamingPCs } from '../components/Products/GamingPCs/GamingPCs';
import { GamingPCDetails } from '../components/Products/GamingPCDetails/GamingPCDetails';
import { GamingLaptopDetail } from '../components/Products/GamingLaptopDetails/GamingLaptopDetails';
import { AboutUs } from '../components/AboutUs/AboutUs';
import { Cart } from '../components/Cart/Cart';
import { Support } from '../components/Support/Support';

export const routes: RouteObject[] = [
    { path: '/', element: React.createElement<typeof Home>(Home) },
    { path: '/products/gaming-pcs', element: React.createElement<typeof Home>(GamingPCs) },
    { path: '/products/gaming-pcs/:id', element: React.createElement<typeof Home>(GamingPCDetails) },
    { path: '/products/gaming-laptops', element: React.createElement<typeof Home>(GamingLaptops) },
    { path: '/products/gaming-laptops/:id', element: React.createElement<typeof Home>(GamingLaptopDetail) },
    { path: '/support', element: React.createElement<typeof Home>(Support) },
    { path: '/about-us', element: React.createElement<typeof Home>(AboutUs) },
    { path: '/login', element: React.createElement<typeof Home>(Login) },
    { path: '/register', element: React.createElement<typeof Home>(Register) },
    { path: '/login/reset-password', element: React.createElement<typeof Home>(ResetPassword) },
    { path: '/cart', element: React.createElement<typeof Home>(Cart) },
    { path: '*', element: React.createElement<typeof Home>(NotFound) },
];
