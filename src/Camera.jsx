import React, { useRef } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

// Import the custom hook to access camera context
import { useCamera } from './stores/CameraContext';

// Define a functional component called CameraBoi
export default function CameraBoi() {
  // Create a ref to hold the camera object
  const cameraRef = useRef();

  // Use the custom hook to access the camera position from the context
  const { cameraPosition } = useCamera();

  // Use the useFrame function to execute code on every frame render
  useFrame(() => {
    // Check if the cameraRef is defined
    if (cameraRef.current) {
      // Set the camera's position using the values from cameraPosition
      cameraRef.current.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
    }
  });

  // Provide the cameraRef to the PerspectiveCamera component using the "ref" attribute.
  return <PerspectiveCamera ref={cameraRef} />;
}
