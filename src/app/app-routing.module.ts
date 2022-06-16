import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { FullLayoutComponent } from "./layouts/full-layout/full-layout.component";
import { CommonLayoutComponent } from "./layouts/common-layout/common-layout.component";

import { FullLayout_ROUTES } from "./shared/routes/full-layout.routes";
import { CommonLayout_ROUTES } from "./shared/routes/common-layout.routes";
import { Login3Component } from './authentication/login-3/login-3.component';
import { LoginComponent } from './login/login.component'

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard/turnover',
        pathMatch: 'full',
    },
    { 
        path: '', 
        component: CommonLayoutComponent,
        children: CommonLayout_ROUTES 
    },
    { 
        path: '', 
        component: FullLayoutComponent, 
        children: FullLayout_ROUTES
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { 
            preloadingStrategy: PreloadAllModules,
            anchorScrolling: 'enabled',
            scrollPositionRestoration: 'enabled' 
        })
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
}