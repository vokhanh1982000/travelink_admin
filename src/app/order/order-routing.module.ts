import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersListComponent } from './orders-list/orders-list.component';

const routes: Routes = [
    {
        path: 'list',
        component: OrdersListComponent,
        data: {
            title: 'Order',
            headerDisplay: "none"
        }
    },
    // {
    //     path: 'top-order',
    //     component: EcommerceDashboardComponent,
    //     data: {
    //         title: 'Top Order',
    //         headerDisplay: "none"
    //     }
    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OrderRoutingModule { }
