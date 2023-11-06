import React, { useMemo, createContext, useState, useContext } from 'react';

// Create a context for managing camera-related state
const CameraContext = createContext();

// Create a provider component that wraps the children components
export function CameraProvider({ children }) {
  // Define and initialize state variables for camera position and current target
  const [cameraPosition, setCameraPosition] = useState({ x: 0, y: 8, z: 20 });
  const [currentTarget, setCurrentTarget] = useState(0);

    // Function to reset the camera state to its initial values
const resetCamera = () => {
  setCameraPosition(prevPosition => ({ x: 0, y: 8, z: 20 }));
  setCurrentTarget(prevTarget => 0);
};

  // Define a context value containing the state variables and their corresponding setter functions
  const contextValue = {
    resetCamera, // Function to reset the camera state
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

