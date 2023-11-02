import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { useCamera } from './stores/CameraContext';


export default function LookAtPoint({ target }) {
  const sphereRef = useRef(); // Create a reference for the red sphere
  const cameraRef = useRef(); // Create a reference for the camera

  // This function updates the position of the red sphere based on the current target
  const updateSpherePosition = () => {
    // Check if the sphere reference exists
    if (sphereRef.current) {
      // Set the sphere's position to the target's coordinates
      sphereRef.current.position.set(target.x, target.y, target.z);
    }
  };

  useFrame(() => {
    updateSpherePosition(); // Call the updateSpherePosition function in every frame

    // Check if cameraRef exists and if the sphere reference exists
    if (cameraRef.current && sphereRef.current) {
      // Make the camera look at the sphere
      cameraRef.current.lookAt(
        sphereRef.current.position.x,
        sphereRef.current.position.y,
        sphereRef.current.position.z
      );
    }
  });

  return (
    <Sphere args={[1, 32, 32]} scale={[3, 3, 3]} ref={sphereRef}>
      <meshBasicMaterial color="red" />
    </Sphere>
  );
}



{/*
*/}