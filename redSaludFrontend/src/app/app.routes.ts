import { Component } from '@angular/core';
import { Routes } from '@angular/router';

export const routes: Routes = [
    
    {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard.routes')
            .then(m => m.DASHBOARD_ROUTES),
    },
    {
        path: 'cards',
        loadChildren:() => import('./features/cards/cards.routes')
            .then(m => m.CARDS_ROUTES),
    },
    {
        path:'forms',
        loadChildren:()=> import('./features/forms/forms.routes')
            .then(m=>m.FORMS_ROUTES),
    },
    {
        path:'',
        loadChildren:()=>import('./core/layout/public-layout/public-layout.routes')
        .then(m=>m.PUBLIClAYOUT_RUTES),
    },
    




];
