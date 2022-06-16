import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { PricingComponent } from './pricing/pricing.component';
import { SettingComponent } from './setting/setting.component';
import { BlogGridComponent } from './blogs/blog-grid/blog-grid.component';
import { BlogListComponent } from './blogs/blog-list/blog-list.component';
import { BlogPostComponent } from './blogs/blog-post/blog-post.component';

const routes: Routes = [
    {
        path: 'list',
        component: BlogListComponent,
        data: {
            title: 'List blog'
        }
    },
    {
        path: 'add',
        component: BlogPostComponent,
        data: {
            title: 'Post blog'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BlogRoutingModule { }
