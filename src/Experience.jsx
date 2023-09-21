import './style.css'
import {  Text3D, Environment, useTexture,  useGLTF, OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'
import { useRef, useState } from 'react'
import {  useFrame } from '@react-three/fiber'


export default function Experience()
{
    const cube = useRef()

    const { position } = useControls({ position:
    {
        value: { x: 0, y: 0, z: 0 },
        step: 0.01
    } })

    return <>

    <Perf position="top-left" />

    <directionalLight intensity={ 0.6 } position={1, 5, 6}  />

    <OrbitControls makeDefault />

    </>
}