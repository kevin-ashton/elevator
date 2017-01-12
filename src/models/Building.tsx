import { Controller } from './Controller'
import { IElevatorConfig } from './Elevator';

export interface IBuildingConfig {
    floors: number;
    elevators: IElevatorConfig[];
}

export class Building{
    controller: Controller;

    constructor(specs: IBuildingConfig){
        // Build the elevators
        // Build controller
    }
}
