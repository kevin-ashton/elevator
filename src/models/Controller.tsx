import { Elevator } from './Elevator';
import { Floor } from './Floor';

export interface IControllerConfig {
    floors: Floor[];
    elevators: Elevator[];
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
           f.floorMessages;
        });
    }

    private subscribeToElevators() {

    }


    private processFloorEvent() {

    }

    private processElevatorEvent() {

    }


    elevators: Elevator[];


    processFloorRequest



}