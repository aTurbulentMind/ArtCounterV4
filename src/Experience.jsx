import './style.css';
import {
    PerspectiveCamera,
    Text3D,
    Environment,
    useTexture,
    useGLTF,
    OrbitControls
} from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { useControls } from 'leva';
import React from 'react';
import { useFrame } from '@react-three/fiber';

// Import your custom hook to access camera context
import { useCamera } from './stores/CameraContext';

// Import other components
import CameraBoi from './Camera';
import Frame from './Frame';
import WelcomePerson from './welcomePerson';
import HeadWords from './HeadWords';
import Featz from './Featz';
import Mushi from './Mushi';
import Laur from './laur';
import Rooms from './Rooms';
import Glass from './Glass';

export default function Experience() {
    // Define a state for the position using leva controls
    const { position } = useControls({
        position: {
            value: { x: 0, y: 0, z: 0 },
            step: 0.01
        }
    });

    // Use the custom hook to access the camera position from context
    const { cameraPosition } = useCamera();

    return (
        <>
            <Perf position="top-left" />

            {/* Use the CameraBoi component with the cameraPosition from context */}
            <CameraBoi cameraPosition={cameraPosition} />

            {/* Create a directional light with specified intensity and position */}
            <directionalLight intensity={0.6} position={[1, 5, 6]} />

            {/* Create a mesh that receives shadows */}
            <mesh receiveShadow position={[position.x, position.y, position.z]} scale={1}>
                <boxGeometry />
                <meshStandardMaterial
                    transparent
                    opacity={0.8}
                    refractionRatio={0.78}
                    roughness={0.03}
                    specular={0.5}
                />
            </mesh>

            {/* Render other components like Frame, WelcomePerson, etc. */}
            <Frame />
            <WelcomePerson />
            <HeadWords />
            <Featz />
            <Mushi />
            <Laur />
            <Rooms />
            <Glass />
        </>
    );
}
