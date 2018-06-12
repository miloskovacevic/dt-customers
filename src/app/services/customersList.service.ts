import { Injectable } from '@angular/core';
import { Customer } from './../common/models/customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomersListService {
    constructor(private http: HttpClient) {
        // this.getCustomers().toPromise()
        //     .then((data) => {
        //         console.log(data);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    }

    getCustomer(customerId: number) {
        return this.http.get('./assets/customers-sample.json').toPromise()
                .then((customers: Customer[]) => {
                    let customer = customers.filter(c => c.customerID === customerId)[0];
                    return customer;
                })
                .catch((err) => {
                    return err;
                });
    }

    getCustomers(): Observable<any> {
        return this.http.get('./assets/customers-sample.json');
    }

}
