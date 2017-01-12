import { IFloorEvent, IElevatorEvent } from './Event';
import { Elevator } from './Elevator';
import { Floor } from './Floor';

export interface IControllerConfig {
    floors: Floor[];
    elevators: Elevator[];
}

enum Direction {
    Up = 1,
    Down
}

export class Controller {
    private elevators: Elevator[];
    private floors: Floor[];

    constructor( config: IControllerConfig) {
        this.elevators = config.elevators;
        this.floors = config.floors;
        this.subscribeToFloors();
        this.subscribeToElevators();
    }

    private subscribeToFloors() {
        this.floors.forEach(f => {
           f.floorMessages.subscribe(this.handleFloorEventNext, this.handleFloorEventError, this.handleFloorEventDispose);
        });
    }
    private handleFloorEventNext(e: IFloorEvent){
        switch (e.type){
            case e.type = Floor.REQUEST_DOWN:
                this.findElevatorForFloor(e.floorNumber, Direction.Down);
                break;
            case e.type = Floor.REQUEST_UP:
                this.findElevatorForFloor(e.floorNumber, Direction.Up);
                break;
        }
    }
    private handleFloorEventError(){}
    private handleFloorEventDispose(){}

    private findElevatorForFloor(floorNum: number, direction: Direction) {
        // Calculate which elevator to send
        // Take into account if elevator is in service mode
        // Take into account direction of elevator
        let stubElevatorIndex = 1;
        this.elevators[stubElevatorIndex].requestFloor(floorNum);
    }

    private subscribeToElevators() {
        this.elevators.forEach(e => {
            e.elevatorMessages.subscribe(this.handleElevatorEventNext, this.handleElevatorEventError, this.handleElevatorEventDispose);
        });
    }
    private handleElevatorEventNext(e: IElevatorEvent){
        switch (e.type) {
            case Elevator.REQUEST_FLOOR:

        }
    }
    private handleElevatorEventError(){}
    private handleElevatorEventDispose(){}

}