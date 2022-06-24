import { SideNavInterface } from '../../interfaces/side-nav.type';

export const ROUTES: SideNavInterface[] = [
    {
        path: '/dashboard',
        title: 'Dashboard',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'line-chart',
        submenu: [
            
        ]
    },
    {
        path: '',
        title: 'Tour',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'appstore',
        submenu: [
            {
                path: '/tour/list',
                title: 'List tour',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/tour/add',
                title: 'Add tour',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Blog',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'like',
        submenu: [
            {
                path: '/blog/list',
                title: 'List blog',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/blog/add',
                title: 'Post blog',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Order',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'book',
        submenu: [
            {
                path: '/order/list',
                title: 'List Order',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            // {
            //     path: '/order/chart',
            //     title: 'Chart',
            //     iconType: '',
            //     icon: '',
            //     iconTheme: '',
            //     submenu: []
            // },
        ]
    },
    {
        path: '/category/list',
        title: 'Category',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'unordered-list',
        submenu: [
        ]
    }
]    