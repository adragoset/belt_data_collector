export class Address {
    street: string | null;
    city: string | null;
    state: string | null;
    postalCode: number | null;
    country: string | null;

    constructor() {
        this.street = null;
        this.city = null;
        this.state = null;
        this.postalCode = null;
        this.country = null;
    }
}