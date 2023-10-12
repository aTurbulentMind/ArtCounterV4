import React, {useEffect, useRef, useState } from 'react'
import {  PerspectiveCamera } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function CameraBoi({ cameraPosition }) {
  const cameraRef = useRef();

  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
      console.log('Current camera position CameraBoi:', cameraRef.current.position);
    }
  }, [cameraPosition]);

return (
  <PerspectiveCamera ref={cameraRef} position={[cameraPosition.x, cameraPosition.y, cameraPosition.z]} />
);
}
