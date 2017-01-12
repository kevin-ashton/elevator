import { IElevatorEvent } from 'Event';
import { Subject } from 'rxjs';
import { Motor } from './Motor';
import { LocationSensors } from './LocationSensors';

export class Elevator {
    id: number;
    motor: Motor;
    floorsInBuilding: number;
    mode: 'OPERATIONAL' | 'SERVICE';
    locationSensors: LocationSensors;
    totalFloorsTraveled: number;
    tripsSinceLastService: number;
    serviceEveryNTrips: number;
    private currentFloor: number;
    elevatorMessages: Subject<IElevatorEvent>;

    constructor(id: number, floorsInBuilding: number, serviceEveryNTrips: number){
        this.id = id;
        this.floorsInBuilding = floorsInBuilding;
        this.serviceEveryNTrips = serviceEveryNTrips;
        this.elevatorMessages = new Subject();
        this.motor = new Motor();
        this.mode = 'OPERATIONAL';
        this.locationSensors = new LocationSensors();
        this.locationSensors.floorChangeMessage.subscribe(this.handleFloorChange)

    }

    static FLOOR_CHANGE = 'Elevator Event: Floor Change';

    handleFloorChange(newFloorNum) {
        if(newFloorNum === 1 || newFloorNum >= this.floorsInBuilding) {
            this.stop();
        }

        this.totalFloorsTraveled += 1;

        this.elevatorMessages.next({
            type: Elevator.FLOOR_CHANGE,
            elevatorId: this.id,
            payload: newFloorNum
        })
    }

    getCurrentFloor() {
        return this.currentFloor;
    }

    getCurrentSpeed() {
        return this.motor.getCurrentSpeed();
    }

    static OPEN_DOOR = 'Elevator Event: Open Door';
    static NEED_SERVICE = 'Elevator Event: Need Service';
    openDoor() {
        this.elevatorMessages.next({
            type: Elevator.OPEN_DOOR,
            elevatorId: this.id
        });

        if(this.isEndOfTrip()){
            this.tripsSinceLastService += 1;
            if(this.tripsSinceLastService >= this.serviceEveryNTrips ){
                this.stop();
                this.mode = 'SERVICE';
                this.elevatorMessages.next({
                    type: Elevator.NEED_SERVICE,
                    elevatorId: this.id
                })
            }
        }
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

    isEndOfTrip() {}

    moveToFloor(floor: number) {
        // Calculate current position
        // Adjust motor
        // this.motor.setSpeed(10)
    }

    stop() {
        this.motor.stop();
    }

    serviceElevator() {
        this.tripsSinceLastService = 0;
    }

    emergencyStop() {}

    emergencyCall() {}

    requestDoorOpen() {}

    requestDoorClose() {}
}