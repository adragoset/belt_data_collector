import { Unit } from "mathjs";

export class DataPoint {
    value: Unit | null;
    dateTime: Date | null;

    constructor() {
        this.value = null;
        this.dateTime = null;
    }
}