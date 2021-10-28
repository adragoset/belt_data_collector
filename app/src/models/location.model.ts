import { Address } from "./address.model";
import { Machine } from "./machine.model";

export class Location {
    id: string | null;
    companyId: string | null;
    locationName: string | null;
    address: Address | null;
    description: string | null;
    machines: Machine[]; 

    constructor() {
        this.id = null;
        this.companyId = null;
        this.locationName = null;
        this.address = new Address();
        this.description = null;
        this.machines = new Array();
    }
}