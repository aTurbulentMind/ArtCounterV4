import './style.css';
import {
    Environment,
    useTexture,
    useGLTF,
    OrbitControls
} from '@react-three/drei';
import React from 'react';
import { Perf } from 'r3f-perf';
import { useControls } from 'leva';
import { useCamera } from './stores/CameraContext';

// Import other components
import CameraBoi from './Camera';
import HeadWords from './HeadWords';
import Rooms from './glbs/Rooms';
import Glass from './glbs/Glass';
import WelcomePerson from './glbs/welcomePerson';
import Frame from './glbs/Frame';
import Featz from './glbs/Featz';
import Mushi from './glbs/Mushi';
import Laur from './glbs/laur';
import ProfPic from './glbs/profilePic'


///These are the buttons at the display stands in front of each room. Was supposed to change the room.

export default function Experience() {
    const { cameraPosition, currentTarget } = useCamera();

    return (
        <>

            <CameraBoi cameraPosition={cameraPosition}  currentTarget={currentTarget}/>

            <directionalLight intensity={0.6} position={[1, 5, 6]} />

            {/* Render other components like Frame, WelcomePerson, etc. */}
            <Frame />
            <WelcomePerson />
            <HeadWords />
            <Featz />
            <Mushi />
            <Laur />
            <ProfPic />
            <Rooms />
            <Glass />
        </>
            );
        }

            {/*
                const { position } = useControls({
                position: {
                value: { x: 0, y: 0, z: 0 },
                step: 0.1
            }
            });
            

            Create a mesh that receives shadows 
            <mesh receiveShadow position={[position.x, position.y, position.z]} scale={1}>
                <boxGeometry />
                <meshStandardMaterial
                    transparent
                    opacity={0.8}
                    refractionRatio={0.78}
                    roughness={0.03}
                    specular={0.5}
                />
            </mesh>*/}