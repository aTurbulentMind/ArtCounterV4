import React from 'react';
import { useCamera } from './stores/CameraContext';

// Define a functional component called Interface
export default function Interface() {
  // Use the custom hook to access the `setCameraPosition` function from the camera context
  const { setCameraPosition } = useCamera();

  // Define a function called `handleButtonClick` that takes a `newPosition` as a parameter
  const handleButtonClick = (newPosition) => {
    // Call the `setCameraPosition` function with the `newPosition` as an argument
    setCameraPosition(newPosition);
    
    // Log a message to the console indicating that a new camera position has been set
    console.log('New camera position set:', newPosition, 'at menu click');
  };

  // Return the JSX representing the user interface
  return (
    <div className="interface">
      {/* Menu */}
      <div className="Menu">
        <div className="raw">
          <div
            className="button"
            // Attach a click event listener to the button and call `handleButtonClick` with a specific `newPosition`
            onClick={() => handleButtonClick({ x: 10, y: 10, z: 0 })}
          >
            Artistic Artisan Design & More
          </div>
          <div
            className="button"
            // Attach a click event listener to the button and call `handleButtonClick` with a different `newPosition`
            onClick={() => handleButtonClick({ x: 4, y: 20, z: 0 })}
          >
            Kitchen One
          </div>
        </div>
      </div>
    </div>
  );
}
