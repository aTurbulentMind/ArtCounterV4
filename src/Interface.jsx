import React from 'react';
import { useCamera } from './stores/CameraContext';

export default function Interface() {
  // Access camera-related functions and data using the useCamera hook
  const { setCameraPosition, setCurrentTarget } = useCamera();

  // Function to handle button clicks, updating camera position and target
  const handleButtonClick = (newPosition, targetIndex) => {
    // Set the camera's position to the new location
    setCameraPosition(newPosition);
    // Set the current target for the camera
    setCurrentTarget(targetIndex);
  }

  return (
    <div className="interface">
      {/* Menu */}
      <div className="Menu">

        <div className="room">
          <div className="button">Artistic Artisan Design & More</div>
        </div>

        <div className="room">
          {/* Button to switch to "Services" target */}
          <div
            className="button click"
            onClick={() => {
              handleButtonClick({ x: 0, y: 8, z: 20 }, 1);
            }}>
            Services
          </div>
          {/* Button to switch to "About" target */}
          <div
            className="button click"
            onClick={() => {
              handleButtonClick({ x: 0, y: 8, z: 20 }, 2);
            }}>
            About
          </div>
        </div>

        <div className="room">
          {/* Button to switch to "Kitchen One" target */}
          <div
            className="button click"
            onClick={() => {
              handleButtonClick({ x: 0, y: 8, z: -25 }, 3);
            }}>
            Kitchen One
          </div>
          {/* Button to switch to "Kitchen Two" target */}
          <div
            className="button click"
            onClick={() => {
              handleButtonClick({ x: -2, y: 8, z: 0 }, 4);
            }}>
            Kitchen Two
          </div>
        </div>

        <div className="room">
          {/* Button to switch to "Bathroom" target */}
          <div
            className="button click"
            onClick={() => {
              handleButtonClick({ x: 3, y: 8, z: -25 }, 5);
            }}>
            Bathroom
          </div>
          {/* Button to switch to "Water Features" target */}
          <div
            className="button click"
            onClick={() => {
              handleButtonClick({ x: 7, y: 10, z: 0 }, 6);
            }}>
            Water Features
          </div>
        </div>

      </div>
    </div>
  );
}
