import React, { useRef, useState } from 'react'
import {  PerspectiveCamera } from '@react-three/drei'

import { useFrame } from '@react-three/fiber';

export default function CameraBoi({ cameraPosition }) {
  const cameraRef = useRef();

  useFrame(() => {
    
    cameraRef.current.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
  });

  return (
    <PerspectiveCamera ref={cameraRef} position={[0, 0, 10]} />
  );
}