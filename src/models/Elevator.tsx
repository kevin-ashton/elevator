import {EventEmitter} from 'events';

export interface IElevatorConfig {
    restingFloor: number
}

export class Elevator {
    alert: boolean;
    currentFloor: number;
    restingFloor: number;
    messages: EventEmitter;

    constructor(config: IElevatorConfig ){
        this.restingFloor = config.restingFloor;
        this.messages = new EventEmitter();
    }

    static OPEN_DOOR = 'Elevator Event: Open Door';
    openDoor() {
        this.messages.emit({event: Elevator.OPEN_DOOR});
    }

    static CLOSE_DOOR = 'Elevator Event: Close Door';
    closeDoor() {
        this.messages.emit(Elevator.CLOSE_DOOR);
    }

    static
    requestFloor(floor: number) {

    }

    emergencyStop() {}

    emergencyCall() {}



    requestDoorOpen() {}

    requestDoorClose() {}
}