import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from './chat/chat.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { MailComponent } from './mail/mail.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { TourAddComponent } from './e-commerce/tours-add/tours-add.component';
import { ToursListComponent } from './e-commerce/tours-list/tours-list.component';
import { ProductComponent } from './e-commerce/product/product.component';
import { TourDetailComponent } from './e-commerce/tours-detail/tours-detail.component';

const routes: Routes = [
    {
        path: 'list',
        component: ToursListComponent,
        data: {
            title: 'List tour',
            headerDisplay: "none"
        }
    },
    {
        path: 'add',
        component: TourAddComponent,
        data: {
            title: 'Add tour',
            headerDisplay: "none"
        }
    },
    {
        path: ':id',
        component: TourDetailComponent,
        data: {
            title: 'Edit tour',
            headerDisplay: "none"
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TourRoutingModule { }
