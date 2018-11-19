import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { DashboardComponent } from './dashboard.component';
import { MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule } from '@angular/material';

const routes = [
    {
        path     : 'dashboard',
        component: DashboardComponent
    }
];

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        TranslateModule,
        FuseSharedModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule
    ],
    exports     : [
        DashboardComponent
    ]
})

export class DashboardModule
{
}
