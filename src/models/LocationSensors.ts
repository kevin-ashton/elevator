import { Subject } from 'rxjs';

export class LocationSensors {
    floorChangeMessage: Subject<number>;

    constructor() {
        //Start monitoring
    }

    private floorChanged(newFloorNum) {
        this.floorChangeMessage.next(newFloorNum);
    }
}