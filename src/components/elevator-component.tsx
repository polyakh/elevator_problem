interface ElevatorComponentOwnProps {
    readonly elevator: IElevator;
    callElevator: () => void;
  }
  
  function ElevatorComponent ({ elevator }: ElevatorComponentOwnProps) {
    return (
      <div>
        <h2>ElevatorComponent</h2>
        {elevator.currentFloor}
      </div>
    );
  }
  
  export default ElevatorComponent;