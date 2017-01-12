import { IElevatorEvent } from 'Event';
import { Subject } from 'rxjs';
import { Motor } from './Motor';

export class Elevator {
    id: number;
    motor: Motor;
    mode: 'OPERATIONAL' | 'SERVICE';
    tripsSinceService: number;
    private currentFloor: number;
    elevatorMessages: Subject<IElevatorEvent>;

    constructor(){
        this.elevatorMessages = new Subject();
        this.motor = new Motor();
        this.mode = 'OPERATIONAL';
    }

    getCurrentFloor() {
        return this.currentFloor;
    }

    getCurrentSpeed() {
        return this.motor.getCurrentSpeed();
    }

    static OPEN_DOOR = 'Elevator Event: Open Door';
    openDoor() {
        this.elevatorMessages.next({
            type: Elevator.OPEN_DOOR,
            elevatorId: this.id
        });
    }

    static CLOSE_DOOR = 'Elevator Event: Close Door';
    closeDoor() {
        this.elevatorMessages.next({
            type: Elevator.CLOSE_DOOR,
            elevatorId: this.id
        });
    }

    static REQUEST_FLOOR = 'Elevator Event: Request Floor';
    requestFloor(floor: number) {
        this.elevatorMessages.next({
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

    serviceElevator() {
        this.tripsSinceService = 0;
    }

    emergencyStop() {}

    emergencyCall() {}

    requestDoorOpen() {}

    requestDoorClose() {}
}