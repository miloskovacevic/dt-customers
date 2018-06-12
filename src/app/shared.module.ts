
import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from 'angular2-datatable';
// import { DeleteModalModule } from './common/modals/deleteModal.module';

// import { WarningModalModule } from './common/modals/warningModal/warningModal.module';
import { SelectModule } from 'ng2-select';


@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SelectModule,
        DataTableModule
    ],
    providers: [
    ]
})
export class SharedModule { }
