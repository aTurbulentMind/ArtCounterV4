import { Text3D,Environment, useTexture,  useGLTF, OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useRef, useState } from 'react'
import {  useFrame } from '@react-three/fiber'


import WelcomePerson from './welcomePerson'
import Featz from './Featz'
import Mushi from './Mushi'
import Laur from './laur'

export default function Experience()
{
    const { nodes } = useGLTF('./model/fresh-cut-bake-2.glb')
    
    const bakedTexture = useTexture('./model/lets-bake.jpg')
    bakedTexture.flipY = false

     const [ material, setMaterial ] = useState()

    return <>

    <Perf position="top-left" />

    <directionalLight intensity={ 0.6 } position={1, 5, 6}  />

    <OrbitControls makeDefault />

    <meshToonMaterial color={ 'teal' } ref={ setMaterial }/>

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

        <Text3D 
            position={1, 5, 6}
            font="./fonts/helvetiker_regular.typeface.json"
            size={ 0.75}
            height={ 0.2}
            curveSegments={ 12 }
            bevelEnabled
            bevelThickness={ 0.02 }
            bevelSize={ 0.02 }
            bevelOffset={ 0 }
            bevelSegments={ 5 }
            material={ material }
            >
                Hello friend!
        </Text3D>

    <mesh geometry={ nodes.baked.geometry } >
        <meshBasicMaterial 
            map={ bakedTexture } />
    </mesh>

    <WelcomePerson  />
    <Featz />
    <Mushi />
    <Laur />

            <mesh receiveShadow
            position={ [ -9.5, 4.5, -41.4 ] }
            scale={ 7}
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

            <mesh receiveShadow
            position={ [ -23.77, 7, -35.4 ] }
            rotation={[0, Math.PI / -2, 0]}
            scale={ 7}
            >
            <planeGeometry/>
            <meshStandardMaterial 
            transparent
            opacity={1}
            refractionRatio={1}
            roughness={0.01}
            specular={0.1}
            />
        </mesh>
    </>
}

export default function Experience()
{
    const { nodes } = useGLTF('./model/baked-featz.glb')
    console.log(nodes.bakedFeatz.geometry)
    
    const bakedTexture = useTexture('./model/baked-featz.jpg')
    bakedTexture.flipY = false

    

    return <>

    <OrbitControls makeDefault />




    </>
}