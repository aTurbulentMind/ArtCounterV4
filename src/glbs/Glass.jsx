import {  MeshReflectorMaterial, useTexture } from '@react-three/drei'

export default function Glass()
{
    return <>
    <mesh receiveShadow
        position={  [ -9.44, 4.54, -40.41 ] }
        scale={ 7}
    >
    <boxGeometry 
        args={[1.03, 1, .75]}
    />
    <meshStandardMaterial 
        transparent
        opacity={0.8}
        refractionRatio={0.78}
        roughness={0.03}
        specular={0.5}
    />
    </mesh>

    <mesh receiveShadow
        position={ [ -23.77, 7, -35.8 ] }
        rotation={[0, Math.PI / 2, 0]}
        scale={ 7}
    >
    <planeGeometry
        args={[2.2, 1.5]}
    />
    <MeshReflectorMaterial 
        resolution={ 256 * 2}
        mirror={ 0.75 }
        color="silver"
        />
    </mesh>

    </>
}