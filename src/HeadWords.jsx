import {meshBounds, Text3D,Environment, useTexture } from '@react-three/drei'
import { useRef, useState } from 'react'
import {  useFrame } from '@react-three/fiber'

export default function HeadWords()
{
    const Font = "./fonts/Noto_Sans_Regular.json"
    const Size = 1.6
    const Height = 0.2
    const Curve = 12
    const BevThik = 0.08
    const BevSiz = 0.05
    const BevSegs = 5
    const [ material, setMaterial ] = useState()

    const Calm = '#318820'
    const Earthy = '#D8BB92'

    const eventHandler = (event) =>
    {
        console.log('the event occured')
    }
    
        return <>

    <meshToonMaterial color={ Calm } ref={ setMaterial }/>

    <Text3D 
            position={ [ -12, 13.3, -43.48 ]}
            font={ Font }
            size={ Size }
            height={ Height }
            curveSegments={ Curve }
            bevelEnabled
            bevelThickness={ BevThik }
            bevelSize={ BevSiz }
            bevelOffset={ 0 }
            bevelSegments={ BevSegs }
            material={ material }
            >
                ARTISTIC ARTISAN DESIGNS, 
     </Text3D>

    <Text3D 
            position={ [ -8, 10.3, -43.48 ]}
            font="./fonts/helvetiker_regular.typeface.json"
            font={ Font }
            size={ Size }
            height={ Height }
            curveSegments={ Curve }
            bevelEnabled
            bevelThickness={ BevThik }
            bevelSize={ BevSiz }
            bevelOffset={ 0 }
            bevelSegments={ BevSegs }
            material={ material }
            >
                COUNTER-TOPS & MORE
    </Text3D>

    <Text3D 
            position={ [23.89, 10.3, -41.4 ]}
            rotation={[0, Math.PI / -2, 0]}
            font={ Font }
            size={ Size }
            height={ Height }
            curveSegments={ Curve }
            bevelEnabled
            bevelThickness={ BevThik }
            bevelSize={ BevSiz }
            bevelOffset={ 0 }
            bevelSegments={ BevSegs }
            material={ material }
            >
                Kitchen One:
    </Text3D>

    <Text3D 
            position={ [23.89, 10.3, -9.59]}
            rotation={[0, Math.PI / -2, 0]}
            font={ Font }
            size={ Size }
            height={ Height }
            curveSegments={ Curve }
            bevelEnabled
            bevelThickness={ BevThik }
            bevelSize={ BevSiz }
            bevelOffset={ 0 }
            bevelSegments={ BevSegs }
            material={ material }
            >
                Kitchen Two:
    </Text3D>

    <Text3D 
            position={ [-23.79, 13.68, 39.31]}
            rotation={[0, Math.PI / 2, 0]}
            font={ Font }
            size={ Size }
            height={ Height }
            curveSegments={ Curve }
            bevelEnabled
            bevelThickness={ BevThik }
            bevelSize={ BevSiz }
            bevelOffset={ 0 }
            bevelSegments={ BevSegs }
            material={ material }
            >
                About Laurie:
    </Text3D>

    <mesh 
            receiveShadow
            position={  [ -23.79, 7, 26.75 ] }
            scale={ 7}
            rotation={[0, Math.PI / 1 ,0]}
            >
    <boxGeometry 
            args={[.2, 1.6, 2]}
            />
     <meshBasicMaterial 
            color={Earthy}
            roughness={0.3}
            />
    </mesh>

    <Text3D 
            position={ [-23.4, 13.68, 7.52]}
            rotation={[0, Math.PI / 2, 0]}
            font={ Font }
            size={ Size }
            height={ Height }
            curveSegments={ Curve }
            bevelEnabled
            bevelThickness={ BevThik }
            bevelSize={ BevSiz }
            bevelOffset={ 0 }
            bevelSegments={ BevSegs }
            material={ material }
            >
                Water Features:
    </Text3D>

    <Text3D 
            position={ [-23.75, 13.68, -27.84]}
            rotation={[0, Math.PI / 2, 0]}
            font={ Font }
            size={ Size }
            height={ Height }
            curveSegments={ Curve }
            bevelEnabled
            bevelThickness={ BevThik }
            bevelSize={ BevSiz }
            bevelOffset={ 0 }
            bevelSegments={ BevSegs }
            material={ material }
            >
                Bathroom:
    </Text3D>

        <Text3D 
                position={ [23.28, 13.4, 29.87]}
                rotation={[0, Math.PI / .8, 0]}
                font={ Font }
                height={ Height }
                bevelSegments={ BevSegs }
                material={ material }
                curveSegments={ Curve }
                size={ 0.75 }
                bevelEnabled
                bevelThickness={ 0.02 }
                bevelSize={ 0.02 }
                bevelOffset={ 0 }
                onClick={ eventHandler }
                onPointerEnter={ () => { document.body.style.cursor = 'pointer' } }
                onPointerLeave={ () => { document.body.style.cursor = 'default' } }
                >
                Schedule an appointment
        </Text3D>

        <Text3D 
                position={ [23.28, 11.9, 29.87]}
                rotation={[0, Math.PI / .8, 0]}
                font={ Font }
                height={ Height }
                bevelSegments={ BevSegs }
                material={ material }
                curveSegments={ Curve }
                size={ 0.8 }
                bevelEnabled
                bevelThickness={ 0.02 }
                bevelSize={ 0.02 }
                bevelOffset={ 0 }
                onClick={ eventHandler }
                onPointerEnter={ () => { document.body.style.cursor = 'pointer' } }
                onPointerLeave={ () => { document.body.style.cursor = 'default' } }
        >
                Services
        </Text3D>

        <Text3D 
                position={ [23.28, 10.4, 29.87]}
                rotation={[0, Math.PI / .8, 0]}
                font={ Font }
                height={ Height }
                bevelSegments={ BevSegs }
                material={ material }
                curveSegments={ Curve }
                size={ 0.8 }
                bevelEnabled
                bevelThickness={ 0.02 }
                bevelSize={ 0.02 }
                bevelOffset={ 0 }
                onClick={ eventHandler }
                onPointerEnter={ () => { document.body.style.cursor = 'pointer' } }
                onPointerLeave={ () => { document.body.style.cursor = 'default' } }
        >
                Reviews
        
        </Text3D>

    <mesh 
            receiveShadow
            position={  [ 19.32, 12.24, 34.82 ] }
            scale={ 7}
            rotation={[0, Math.PI / .57 ,0]}
            >
    <boxGeometry 
            args={[.2, 1, 2]}
            />
    <meshBasicMaterial 
            color={Earthy}
            roughness={0.3}
            />
    </mesh>
       
    </>
}