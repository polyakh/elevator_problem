interface FloorComponentOwnProps {
  readonly number: number;
  callElevator: () => void;
}

function FloorComponent ({ number, callElevator }: FloorComponentOwnProps) {
  return (
    <div onClick={callElevator}>
      {number}
    </div>
  );
}

export default FloorComponent;