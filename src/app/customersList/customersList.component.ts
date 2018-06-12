
import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { timestamp } from 'rxjs/operators/timestamp';
import { timeout } from 'rxjs/operators/timeout';


@Component({
    templateUrl: './customersList.component.html'
})
export class CustomersListComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }
}
