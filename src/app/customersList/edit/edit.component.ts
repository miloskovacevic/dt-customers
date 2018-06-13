import { actionEnum } from './../../common/enums/actionEnum';
import { Customer } from './../../common/models/customer';
import { CustomersListService } from './../../services/customersList.service';
import { Component, ViewChild, OnInit, Injector, HostListener, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSelectModule, INgxSelectOptions } from 'ngx-select-ex';
import { FormControl } from '@angular/forms';

@Component({
    moduleId: module.id,
    templateUrl: 'edit.component.html'
})

export class EditComponent  implements OnInit, OnDestroy {
    public items: string[] = ['m', 'w'];

    public ngxControl = new FormControl();

    private _ngxDefaultTimeout;
    private _ngxDefaultInterval;
    private _ngxDefault;

    title: string;
    customer: Customer;
    customers: Customer[];
    activeRouter: ActivatedRoute;

    constructor(private injector: Injector, private _customersListService: CustomersListService) {
        this.customer = new Customer();
        
        // this._ngxDefaultTimeout = setTimeout(() => {
        //     this._ngxDefaultInterval = setInterval(() => {
        //         const idx = Math.floor(Math.random() * (this.items.length - 1));
        //         this._ngxDefault = this.items[idx];
        //         // console.log('new default value = ', this._ngxDefault);
        //     }, 2000);
        // }, 2000);


        this.activeRouter = injector.get(ActivatedRoute);
        this.title = 'Edit';

        this.customer.customerID = this.activeRouter.snapshot.params['id'];
        if (this.customer.customerID == null) {
            this.title = 'Add customer';
            this.customer.customerID = 0;
        } else {
            _customersListService.getCustomer(this.customer.customerID)
                .then((customer: Customer) => {
                    this.customer = customer;
                    this.customer.birthday = new Date(this.customer.birthday);
                })
                .catch(err => {
                    console.log(err);
                });

                this.title = 'Edit customer';
        }
    }

    ngOnDestroy(): void {
        clearTimeout(this._ngxDefaultTimeout);
        clearInterval(this._ngxDefaultInterval);
    }

    ngOnInit() {

    }

    submit() {
        // this.customer.birthday = this.customer.birthday.toISOString();

        console.log('snimio!');
    }

    getCustomer(customerId: Number) {

    }

    getCustomers() {

    }

    onInputChange() {

    }


    public doNgxDefault(): any {
        return this.customer.gender;
    }
 
    public inputTyped = (source: string, text: string) => console.log('SingleDemoComponent.inputTyped', source, text);
 
    public doSelect = (value: any) => console.log('SingleDemoComponent.doSelect', value);
 
    public doRemove = (value: any) => console.log('SingleDemoComponent.doRemove', value);
 
    public doSelectOptions = (options: INgxSelectOptions[]) => console.log('SingleDemoComponent.doSelectOptions', options);
}
