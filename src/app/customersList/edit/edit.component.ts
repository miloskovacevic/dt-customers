import { Customer } from './../../common/models/customer';
import { CustomersListService } from './../../services/customersList.service';
import { Component, ViewChild, OnInit, Injector, HostListener } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'edit.component.html'
})

export class EditComponent  implements OnInit {

    title: string;
    customers: Customer[];

    constructor(private _customersListService: CustomersListService) {
        this.title = 'Edit';

        _customersListService.getCustomers().toPromise()
            .then((customers: Customer[]) => {
                this.customers = customers;
                console.log(this.customers);
            })
            .catch((err) => {
                console.log(err);
            });

        _customersListService.getCustomer(1)
            .then((customer: Customer) => {
                console.log(customer);
            })
            .catch(err => {
                console.log(err);
            });


        // this.user.userId = this.activeRouter.snapshot.params['id'];

        // if (this.user.userId == null) {
        //     this.title = this.getLocalization('user_title_add');
        //     this.user.userId = 0;
        // } else {
        //     this.user = (<User[]>SessionCacheHelper.getGridData('users')).find(p => p.userId == this.user.userId);

        //     if (<actionEnum>this.activeRouter.snapshot.data['action'] === actionEnum.View) {
        //         this.title = this.getLocalization('user_title_view');
        //         this.isDisabled = true;
        //     } else {
        //         this.title = this.getLocalization('user_title_edit');
        //     }
        // }
    }

    ngOnInit() {
    }

    submit() {
    }

    getCustomer(customerId: Number) {

    }

    getCustomers() {

    }
}
