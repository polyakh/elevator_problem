interface BuildingComponentOwnProps {
    floors: number;
    elevators: IElevator[];
  }
  
  function BuildingComponent({ floors, elevators }: BuildingComponentOwnProps) {
    return (
      <div>
        <h2>BuildingComponent</h2>
      </div>
    );
  }
  
  export default BuildingComponent;