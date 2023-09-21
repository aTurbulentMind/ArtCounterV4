import { Text3D, Environment, useTexture,  useGLTF, OrbitControls } from '@react-three/drei'
import { useRef, useState } from 'react'
import {  useFrame } from '@react-three/fiber'


export default function Frame()
{

    const { nodes } = useGLTF('./model/fresh-cut-bake-2.glb')
    
    const bakedTexture = useTexture('./model/lets-bake.jpg')
    bakedTexture.flipY = false

    return <>

    <Environment
            background
            files={ [
                './environmentMaps/2/px.jpg',
                './environmentMaps/2/nx.jpg',
                './environmentMaps/2/py.jpg',
                './environmentMaps/2/ny.jpg',
                './environmentMaps/2/pz.jpg',
                './environmentMaps/2/nz.jpg',
            ] }
    />

    <mesh geometry={ nodes.baked.geometry } >
    <meshBasicMaterial 
            map={ bakedTexture } />
    </mesh>


    </>
}