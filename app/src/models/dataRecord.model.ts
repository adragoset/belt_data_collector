import { DataPoint } from "./dataPoint.model";

export class DataRecord {
    sensorId: string | null;
    data: DataPoint[];
    units: string | null;

    constructor() {
        this.sensorId = null;
        this.data = new Array();
        this.units = null;
    }
}
