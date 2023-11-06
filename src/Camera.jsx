import React, { useRef, useState, useEffect } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useCamera } from './stores/CameraContext';
import * as THREE from 'three';

import LookAtPoint from './LookAtPoint';

export default function CameraBoi() {
  const { cameraPosition, currentTarget } = useCamera(); // Get camera position and current target from context
  const cameraRef = useRef(); // Create a reference for the camera
  const sphereRef = useRef(); // Create a reference for the red sphere
  

  // Use the `useFrame` hook to update the camera's position based on `cameraPosition`
  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
  }});

  // Define an array of target points, each with x, y, and z coordinates
  const targetPoints = [
    { x: 0, y: -2, z: -20 },   
    { x: 10, y: 7, z: 30 },   
    { x: -10, y: 7, z: 27 },   
    { x: 15, y: 5, z: -27.5 },
    { x: 15, y: 8, z: -2 },
    { x: -15, y: 5, z: -33 },
    { x: -14, y: 5, z: -1 },
  ];

    // Get the current target based on the index
  let target = targetPoints[currentTarget];

   // Use the `useEffect` hook to make the camera look at the current target when `currentTarget` changes
  useEffect(() => {
      cameraRef.current.lookAt(target.x, target.y, target.z); // Make the camera look at the target
          console.log('Camera is looking at target:', currentTarget);
          console.log('Camera is looking at:', target); // Log the target that the camera is looking at

  // Calculate the direction vector of the camera based on its rotation
  const cameraDirection = new THREE.Vector3();
  cameraRef.current.getWorldDirection(cameraDirection);

  // Round the components (x, y, and z) of the vector to three decimal places
  const roundedDirection = {
    x: cameraDirection.x.toFixed(3),
    y: cameraDirection.y.toFixed(3),
    z: cameraDirection.z.toFixed(3),
  };
  console.log('Camera direction:', roundedDirection);
  }, [currentTarget]);

  return (
    <>  
    <LookAtPoint  target={target}  />
    <PerspectiveCamera makeDefault ref={cameraRef} />
    </>
  );
}
