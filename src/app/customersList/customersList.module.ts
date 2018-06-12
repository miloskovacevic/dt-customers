import { SharedModule } from './../shared.module';
import { CustomersListComponent } from './customersList.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersListRoutingModule } from './customersList-routing.module';
import { EditComponent } from './edit/edit.component';

@NgModule({
    imports: [
        CommonModule,
        CustomersListRoutingModule,
        SharedModule
    ],
    declarations: [
        CustomersListComponent,
        EditComponent
    ]
})
export class CustomersListModule { }
