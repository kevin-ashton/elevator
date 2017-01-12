import { IElevatorEvent } from 'Event';
import { Subject } from 'rxjs';
import { Motor } from './Motor';

export interface IElevatorConfig {
    restingFloor: number
}

export class Elevator {
    alert: boolean;
    id: number;
    motor: Motor;
    private currentFloor: number;
    restingFloor: number;
    messages: Subject<IElevatorEvent>;

    constructor(config: IElevatorConfig ){
        this.restingFloor = config.restingFloor;
        this.messages = new Subject();
        this.motor = new Motor();
    }

    getCurrentFloor() {
        return this.currentFloor;
    }

    getCurrentSpeed() {
        return this.motor.getCurrentSpeed();
    }

    static OPEN_DOOR = 'Elevator Event: Open Door';
    openDoor() {
        this.messages.next({
            event: Elevator.OPEN_DOOR,
            elevatorId: this.id
        });
    }

    static CLOSE_DOOR = 'Elevator Event: Close Door';
    closeDoor() {
        this.messages.next({
            event: Elevator.CLOSE_DOOR,
            elevatorId: this.id
        });
    }

    static REQUEST_FLOOR = 'Elevator Event: Request Floor';
    requestFloor(floor: number) {
        this.messages.next({
            event: Elevator.REQUEST_FLOOR,
            elevatorId: this.id,
            payload: floor
        });
    }

    moveToFloor(floor: number) {

    }

    emergencyStop() {}

    emergencyCall() {}

    requestDoorOpen() {}

    requestDoorClose() {}
}