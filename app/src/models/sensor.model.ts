enum SensorType {
    beltTension
}
export class Sensor {
    id: string | null;
    type: SensorType | null;
    units: string | null;
    description: string | null;
    constructor() {
        this.id = null;
        this.type = null;
        this.units = null;
        this.description = null;
    }
}