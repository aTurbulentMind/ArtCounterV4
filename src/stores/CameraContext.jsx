import React, { createContext, useContext, useState } from 'react';

// Create a context for managing camera position
{/* 
This is a context object created with createContext(). Context provides a way to pass data through the component tree without having to pass props manually at every level. */}
const CameraContext = createContext();

// Create a provider component that will wrap the application
{/* 
This component is a context provider. It wraps the entire application and is responsible for managing the camera position state. It initializes the camera position using useState and provides this value through the context using 
CameraContext.Provider.
*/}
export function CameraProvider({ children }) {
  // Define the initial camera position as an example
  const [cameraPosition, setCameraPosition] = useState({ x: 20, y: 15, z: 0 });

  // Log the initial camera position to the console
  console.log('Initial camera position:', cameraPosition);

  return (
    // Provide the cameraPosition and setCameraPosition values to the context
    <CameraContext.Provider value={{ cameraPosition, setCameraPosition }}>
      {children} {/* Render the child components */}
    </CameraContext.Provider>
  );
}

// Create a custom hook to access the camera context.
{/* 
This is a custom hook for accessing the camera context. It uses useContext to retrieve the current context values, which include cameraPosition and setCameraPosition. This hook allows other components to access the camera position data stored in the context.
*/}
export function useCamera() {
  // Access the camera context
  const context = useContext(CameraContext);

  // Log the current camera position in the context
  console.log('Current camera position context:', context.cameraPosition);

  return context; // Return the context for use in components
}

{/**
In summary, this code sets up a context to manage and share camera position data across components. The CameraProvider component initializes the camera position, and the useCamera hook allows other components to access and update this data.
*/}