import './style.css'
import ReactDOM from 'react-dom/client'
import { useFrame, Canvas } from '@react-three/fiber'
import {  Text3D, Environment, useTexture,  useGLTF, OrbitControls } from '@react-three/drei'
import { useRef, useState } from 'react'

import Experience from './Experience.jsx'
import Interface from './Interface.jsx'
import Frame from './Frame'
import WelcomePerson from './welcomePerson'
import HeadWords from './HeadWords'
import Featz from './Featz'
import Mushi from './Mushi'
import Laur from './laur'
import Rooms from './Rooms'
import Glass from './Glass'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        flat
        camera={ {
            fov: 45,
            near: 0.1,
            far: 550,
            position: [ 1, 2, 6 ]
        } }
    >
        <color args={ [ '#030202' ] } attach="background" />
        
        <Experience />
        <Frame />
        <Interface />
        <WelcomePerson  />
        <Featz />
        <Mushi />
        <Laur />
        <Rooms />
        <Glass />
        <HeadWords />

    </Canvas>
    
)