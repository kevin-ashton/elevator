export class Motor {
    alert: boolean;
    active: boolean;
    requestedSpeed: number;

    /**
     * For this motor the speed can be set between -10 to 10 feed per second.
     *
     * @param speed
     */
    setSpeed(speed: number){
        this.requestedSpeed = speed;
    }

    stop() {
        this.active = false;
    }

    start() {
        this.active = true;
    }
}