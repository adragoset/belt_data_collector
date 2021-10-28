import { DataRecord } from "./dataRecord.model";
import { Sensor } from "./sensor.model";

export class Machine {
    id: string | null;
    descripton: string | null;
    sensors: Sensor[];
    data: DataRecord[];


    constructor() {
        this.id = null;
        this.descripton = null;
        this.sensors = new Array();
        this.data = new Array();
    }
}