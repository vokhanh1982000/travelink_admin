import { Routes } from '@angular/router';

export const CommonLayout_ROUTES: Routes = [

    //Dashboard
    {
        path: 'dashboard',
        loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule),
    },

    //Tour
    {
        path: 'tour',
        data: {
            title: 'Tour'
        },
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }, 
            {
                path: '',
                loadChildren: () => import('../../tour/tour.module').then(m => m.TourModule)
            },
        ]    
    },

    //Blog
    {
        path: 'blog',
        data: {
            title: 'Blog'
        },
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }, 
            {
                path: '',
                loadChildren: () => import('../../blog/blog.module').then(m => m.BlogModule)
            },
        ]    
    },

    //Order
    {
        path: 'order',
        // component: ComponentsComponent,
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }, 
            {
                path: '',
                loadChildren: () => import('../../order/order.module').then(m => m.OrderModule)
            }
        ],
        data: {
            title: 'Order '
        }
    },

    //Category
    {
        path: 'category',
        // component: ComponentsComponent,
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }, 
            {
                path: '',
                loadChildren: () => import('../../category/category.module').then(m => m.CategoryModule)
            }
        ],
        data: {
            title: 'Category '
        }
    }
];