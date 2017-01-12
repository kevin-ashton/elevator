export interface IElevatorEvent {
    type: string,
    elevatorId: number,
    payload?: any
}

export interface IFloorEvent {
    type: string,
    floorNumber: number
}