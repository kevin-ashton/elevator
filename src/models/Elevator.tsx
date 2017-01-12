export interface IElevatorConfig {
    restingFloor: number
}

export class Elevator {
    private restingFloor: number;
    constructor(config: IElevatorConfig, ){
        this.restingFloor = config.restingFloor;
    }

    connectController() {

    }

    emergencyStop() {

    }

    emergencyCall() {

    }

    requestFloor(floor: number) {

    }

    requestDoorOpen() {

    }

    requestDoorClose() {

    }
}