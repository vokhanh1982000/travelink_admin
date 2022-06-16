import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultDashboardComponent } from './default/default-dashboard.component';
import { EcommerceDashboardComponent } from './e-commerce/e-commerce-dashboard.component';

const routes: Routes = [
    {
        path: 'turnover',
        component: DefaultDashboardComponent,
        data: {
            title: 'Turnover',
            headerDisplay: "none"
        }
    },
    {
        path: 'top-order',
        component: EcommerceDashboardComponent,
        data: {
            title: 'Top Order',
            headerDisplay: "none"
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule { }
