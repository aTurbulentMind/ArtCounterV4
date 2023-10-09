export default function Interface({ setCameraPosition }) { 
  const handleButtonClick = (newPosition) => {
    // Update the camera position by calling setCameraPosition
    setCameraPosition(newPosition);
    console.log('Menu click');
  };

  return (
    <div className="interface">
      {/* Menu */}
      <div className="Menu">
        <div className="raw">
          <div
            className="button"
            onClick={() => handleButtonClick({ x: 10, y: 10, z: 5 })}
          >
            Artistic Artisan Design & More
          </div>
        </div>
      </div>
    </div>
  );
}





