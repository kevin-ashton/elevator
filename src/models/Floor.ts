import { Subject } from 'rxjs';
import { IFloorEvent } from './Event';

export class Floor {
    private upButtonActive: boolean;
    private downButtonActive: boolean;
    private floorNumber: number;
    floorMessages: Subject<IFloorEvent>;

    constructor(floorNumber: number){
        this.floorNumber = floorNumber;
        this.floorMessages = new Subject();
    }

    resetUpButton() {
        this.upButtonActive = false;
    }

    resetDownButton() {
        this.downButtonActive = false;
    }

    static REQUEST_UP = 'Floor Event: request up';
    pushDownButton() {
        this.downButtonActive = true;
        this.floorMessages.next({
            type: Floor.REQUEST_UP,
            floorNumber: this.floorNumber
        });
    }

    static REQUEST_DOWN = 'Floor Event: request down';
    pushUpButton() {
        this.downButtonActive = true;
        this.floorMessages.next({
            type: Floor.REQUEST_DOWN,
            floorNumber: this.floorNumber
        });
    }

}