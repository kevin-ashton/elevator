import { Floor } from './Floor';
import { Controller, IControllerConfig } from './Controller'
import { Elevator } from './Elevator';

export interface IBuildingConfig {
    floors: number;
    elevatorNum: number;
}

export class Building{
    controller: Controller;
    floors: Floor[];
    elevators: Elevator[];

    constructor(config: IBuildingConfig){
        for(let i = 1; i < config.floors + 1; i++){
            this.floors.push(new Floor(i));
        }

        for(let i = 0; i < config.elevatorNum; i++) {
            this.elevators.push(new Elevator())
        }

        let cfg: IControllerConfig = {
            floors: this.floors,
            elevators: this.elevators
        };

        this.controller = new Controller(cfg);


    }
}
