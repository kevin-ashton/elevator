import { IElevatorEvent } from 'Event';
import { Subject } from 'rxjs';
import { Motor } from './Motor';

export class Elevator {
    id: number;
    motor: Motor;
    private currentFloor: number;
    floorMessages: Subject<IElevatorEvent>;

    constructor(){
        this.floorMessages = new Subject();
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
        this.floorMessages.next({
            type: Elevator.OPEN_DOOR,
            elevatorId: this.id
        });
    }

    static CLOSE_DOOR = 'Elevator Event: Close Door';
    closeDoor() {
        this.floorMessages.next({
            type: Elevator.CLOSE_DOOR,
            elevatorId: this.id
        });
    }

    static REQUEST_FLOOR = 'Elevator Event: Request Floor';
    requestFloor(floor: number) {
        this.floorMessages.next({
            type: Elevator.REQUEST_FLOOR,
            elevatorId: this.id,
            payload: floor
        });
    }

    moveToFloor(floor: number) {
        // Calculate current position
        // Adjust motor
        //this.motor.setSpeed(10)
    }

    emergencyStop() {}

    emergencyCall() {}

    requestDoorOpen() {}

    requestDoorClose() {}
}