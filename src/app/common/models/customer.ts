

export class Customer {

    customerID: number;
    name: Name;
    birthday: string;
    gender: string;
    lastContact: Date;
    customerLifetimeValue: Number;

    constructor () {
        this.customerID = null;
        this.name = null;
        this.birthday = null;
        this.gender = null;
        this.lastContact = null;
        this.customerLifetimeValue = null;
    }
}

class Name {
    first: string;
    last: string;
}
