interface IElevatorControlSystem {
    registerElevator(elevator: IElevator): void;
    // requestElevatorAtFloor(floor: number): void;
    identifyNearestAvailableElevator(floor: number): IElevator | null;
    // adjustElevatorPositions(): void;
  }
  

export class ElevatorControlSystem implements IElevatorControlSystem {
    elevators: IElevator[] = [];

    registerElevator(elevator: IElevator): void {
        this.elevators.push(elevator);
    }

    identifyNearestAvailableElevator(floor: number): IElevator | null {
        let nearestElevator = null;
        let minDiff = Infinity;

        for(let elevator of this.elevators) {
            const computedDiff = Math.abs(elevator.currentFloor - floor);
            if(computedDiff < minDiff && !elevator.isMoving) {
                nearestElevator = elevator;
                minDiff = computedDiff; 
            }
        }

        return nearestElevator;
    }
}