import React, { createContext, useState, useContext } from 'react';

// Create a context for managing camera-related state
const CameraContext = createContext();

// Create a provider component that wraps the children components
export function CameraProvider({ children }) {
  // Define and initialize state variables for camera position and current target
  const [cameraPosition, setCameraPosition] = useState({ x: 0, y: 8, z: 20 });
  const [currentTarget, setCurrentTarget] = useState(0);

  // Define a context value containing the state variables and their corresponding setter functions
  const contextValue = {
    cameraPosition, // Current camera position
    setCameraPosition, // Function to update camera position
    currentTarget, // Current target index
    setCurrentTarget, // Function to update the current target
  };

  // Provide the context value to the wrapped components
  return (
    <CameraContext.Provider value={contextValue}>
      {children} {/* Render the child components wrapped by the provider */}
    </CameraContext.Provider>
  );
}

// Create a custom hook to conveniently access the camera-related context
export function useCamera() {
  const context = useContext(CameraContext);
  return context; // Return the context value containing camera-related state
}

