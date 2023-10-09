import './style.css'
import {  
    PerspectiveCamera, 
    Text3D, 
    Environment, 
    useTexture,  
    useGLTF, OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'
import React, { useRef, useState } from 'react'
import {  useFrame } from '@react-three/fiber'

import CameraBoi from './Camera'
import Frame from './Frame'
import WelcomePerson from './welcomePerson'
import HeadWords from './HeadWords'
import Featz from './Featz'
import Mushi from './Mushi'
import Laur from './laur'
import Rooms from './Rooms'
import Glass from './Glass'

export default function Experience()
{
    const { position } = useControls({ position:
    {
        value: { x: 0, y: 0, z: 0 },
        step: 0.01
    } })

    const [cameraPosition, setCameraPosition] = useState({ x: 0, y: 10, z: 10 });

    return <>

    <Perf position="top-left" />

    <CameraBoi cameraPosition={cameraPosition} setCameraPosition={setCameraPosition}/>

    <OrbitControls makeDefault />

    <directionalLight intensity={ 0.6 } position={1, 5, 6}  />
    
        <mesh receiveShadow
            position={ [ position.x, position.y, position.z ] }
            scale={ 1 }
            >
            <boxGeometry/>
            <meshStandardMaterial 
            transparent
            opacity={0.8}
            refractionRatio={0.78}
            roughness={0.03}
            specular={0.5}
            />
        </mesh>

        <Frame />
        <WelcomePerson  />
        <HeadWords />
        <Featz />
        <Mushi />
        <Laur />
        <Rooms />
        <Glass />

    </>
}