import { DataPoint } from "./dataPoint.model";

export class DataRecord {
    sensorId: string | null;
    data: DataPoint[];

    constructor() {
        this.sensorId = null;
        this.data = new Array();
    }
}
