export class Elevator implements IElevator {
    currentFloor: number;
    destination: number | null;
    isMoving: boolean;
  
    constructor(currentFloor: number, destination: number | null = null, isMoving: boolean = false) {
      this.currentFloor = currentFloor;
      this.destination = destination;
      this.isMoving = isMoving;
    }
  }