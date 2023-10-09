import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'

export default function Mirror()
{
    const fox = useGLTF('../public/model/freshMirror.gltf')

    return <primitive 
    position={ [ - 2.5, 0, 2.5]}
    />
}