import { Elevator } from './Elevator';

export class Controller {
    elevators: Elevator[];

    registerElevator( elevator: Elevator ){
        elevator.connectController();
        this.elevators.push(elevator);
    }


}