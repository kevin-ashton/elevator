import { IElevatorConfig } from './elevator';

export interface IBuildingConfig {
    floors: number;
    elevators: IElevatorConfig[];
}

export class Building{
    constructor(specs: IBuildingConfig){}
}
