import React from 'react';

import { RouteObject } from 'react-router-dom';

import { Home } from './components/Home/Home';
import { Register } from './components/Auth/Register/Register';
import { Login } from './components/Auth/Login/Login';
import { ResetPassword } from './components/Auth/ResetPassword/ResetPassword';
import { NotFound } from './components/NotFound/NotFound';
import { GamingLaptops } from './components/Products/GamingGear/GamingLaptops/GamingLaptops';
import { GamingPCs } from './components/Products/GamingGear/GamingPCs/GamingPCs';
import { GamingPCDetails } from './components/Products/GamingGearDetails/GamingPCDetails/GamingPCDetails';
import { GamingLaptopDetail } from './components/Products/GamingGearDetails/GamingLaptopDetails/GamingLaptopDetails';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Cart } from './components/Cart/Cart';
import { Support } from './components/Support/Support';

import * as PATHS from './shared/paths';

export const routes: RouteObject[] = [
    { path: PATHS.HOME, element: React.createElement<typeof Home>(Home) },
    { path: PATHS.GAMING_PCS, element: React.createElement<typeof Home>(GamingPCs) },
    { path: PATHS.GAMING_PC_DETAILS, element: React.createElement<typeof Home>(GamingPCDetails) },
    { path: PATHS.GAMING_LAPTOPS, element: React.createElement<typeof Home>(GamingLaptops) },
    { path: PATHS.GAMING_LAPTOP_DETAIL, element: React.createElement<typeof Home>(GamingLaptopDetail) },
    { path: PATHS.SUPPORT, element: React.createElement<typeof Home>(Support) },
    { path: PATHS.ABOUT_US, element: React.createElement<typeof Home>(AboutUs) },
    { path: PATHS.LOGIN, element: React.createElement<typeof Home>(Login) },
    { path: PATHS.REGISTER, element: React.createElement<typeof Home>(Register) },
    { path: PATHS.RESET_PASSWORD, element: React.createElement<typeof Home>(ResetPassword) },
    { path: PATHS.CART, element: React.createElement<typeof Home>(Cart) },
    { path: PATHS.NOT_FOUND, element: React.createElement<typeof Home>(NotFound) },
];
