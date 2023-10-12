import React, { createContext, useContext, useState } from 'react';
// Create the context
const CameraContext = createContext();
// Create a custom provider component
export function CameraProvider({ children }) {
  const [cameraPosition, setCameraPosition] = useState({ x: 20, y: 15, z: 0 });
  // Log the initial state
  console.log('Initial camera position:', cameraPosition);
  return (
    <CameraContext.Provider value={{ cameraPosition, setCameraPosition }}>
      {children}
    </CameraContext.Provider>
  );
}
// Create a custom hook to access the context
export function useCamera() {
  const context = useContext(CameraContext);
  // Log the current state whenever it changes
  console.log('Current camera position context:', context.cameraPosition);
  return context;
}
