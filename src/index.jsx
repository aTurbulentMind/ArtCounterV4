import './style.css'
import ReactDOM from 'react-dom/client'
import { useFrame, Canvas } from '@react-three/fiber'
import {  Text3D, Environment, useTexture,  useGLTF, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import React, { useRef, useState } from 'react'
import Experience from './Experience.jsx'
import Interface from './Interface.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        
    <Canvas
    flat  >
        <color args={ [ 'rgb(3, 2, 2)' ] } attach="background" />
        <Experience />
    </Canvas>

    <Interface />
    </>    
)
