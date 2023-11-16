import {meshBounds,  Text, Text3D,  Html, useTexture } from '@react-three/drei'
import React, { useRef, useState } from 'react'
import {  useFrame } from '@react-three/fiber'
import { useControls } from 'leva';


export default function HeadWords()
{
  
// Define initial states and set initial visibility to hidden for menus
        const [material, setMaterial] = useState();

// Select the service menu and set its initial visibility to hidden
        let servMenu = document.querySelector('.servMenu');
        servMenu.style.visibility = 'hidden';

// Select the review menu and set its initial visibility to hidden
        let RevMenu = document.querySelector('.RevMenu');
        RevMenu.style.visibility = 'hidden';

// Select the scheduler menu and set its initial visibility to hidden
        let ScheMenu = document.querySelector('.Scheduler');
        ScheMenu.style.visibility = 'hidden';

// Define color constants
        const Calm = 'rgb(71, 136, 58)';
        const Earthy = 'rgb(216, 187, 146)';
        const Contrast = 'rgb(134, 106, 64)';
        const Exit = 'rgba(216, 8, 8, 0.938)';

// Configuration for text
        const textConfig = {
                size: 1.6,
                height: 0.2,
                curveSegments: 12,
                bevelThickness: 0.08,
                bevelSize: 0.05,
                bevelSegments: 5,
                font: './fonts/Noto_Sans_Regular.json',
                bevelEnabled: true,
                bevelOffset: 0,
        };

// Configuration for service text
        const serviceConfig = {
                size: 0.75,
                height: 0.2,
                curveSegments: 12,
                bevelThickness: 0.05,
                bevelSize: 0.02,
                bevelSegments: 5,
                font: './fonts/Noto_Sans_Regular.json',
                bevelEnabled: true,
                bevelOffset: 0,
        };

// Event handler for general events
        const eventHandler = (event) => {
                console.log('counter selection pressed');
        }

// Event handler for hovering over the service, shows service menu and changes cursor
        const serviceHover = (event) => {
                servMenu.style.visibility = 'visible';
                document.body.style.cursor = 'pointer';
        };

// Event handler for leaving the service area, hides service menu and resets cursor
        const serviceExit = (event) => {
                servMenu.style.visibility = 'hidden';
                document.body.style.cursor = 'default';
        };

// Event handler for hovering over the review area, shows review menu
        const ReviewHover = (event) => {
                RevMenu.style.visibility = 'visible';
        };

// Event handler for leaving the review area, hides review menu
        const ReviewExit = (event) => {
                RevMenu.style.visibility = 'hidden';
        };

// Event handler for clicking on the scheduler area, shows scheduler menu
        const ScheMenuClick = (event) => {
                ScheMenu.style.visibility = 'visible';
        };

// Event handler for leaving the scheduler area, hides scheduler menu
        const ScheMenuExit = (event) => {
                ScheMenu.style.visibility = 'hidden';
        };


        return <>

        <meshToonMaterial color={ Calm } ref={ setMaterial }/>

        <Text3D {...textConfig} material={ material } position={ [ -12, 13.3, -43.48 ]}>
                ARTISTIC ARTISAN DESIGNS, 
        </Text3D>

        <Text3D {...textConfig} material={ material } position={ [ -8, 10.3, -43.48 ]}>
                COUNTER-TOPS & MORE
        </Text3D>

        <Text3D {...textConfig} material={ material } rotation={[0, Math.PI / -2, 0]} position={ [23.89, 10.3, -41.4 ]}>
                Kitchen One:
        </Text3D>

        <Text3D {...textConfig} rotation={[0, Math.PI / -2, 0]} position={ [23.89, 10.3, -9.59]} material={ material }>
                Kitchen Two:
        </Text3D>

        <Text3D {...textConfig} rotation={[0, Math.PI / 2, 0]} position={ [-23.79, 13.68, 39.31]} material={ material }>
                About Laurie:
        </Text3D>

        <Text3D 
        {...textConfig}
        rotation={[0, Math.PI / 2, 0]}
        position={ [ -23, 10, 33.25]} 
        material={ material }
        size={.8}
        >
                Lorem ipsum dolor sit 
        </Text3D>

        <Text3D 
        {...textConfig}
        rotation={[0, Math.PI / 2, 0]}
        position={ [ -23, 9, 33.25]} 
        material={ material }
        size={.8}
        >
                amet consectetur, adipis
        </Text3D>

        <Text3D 
        {...textConfig}
        rotation={[0, Math.PI / 2, 0]}
        position={ [ -23, 8, 33.25]} 
        material={ material }
        size={.8}
        >
        elit. Illo quod repellat
        </Text3D>

        <Text3D 
        {...textConfig}
        rotation={[0, Math.PI / 2, 0]}
        position={ [ -23, 7, 33.25]} 
        material={ material }
        size={.8}
        >
                ratione nobis qui sit tem
        </Text3D>

        <Text3D 
        {...textConfig}
        rotation={[0, Math.PI / 2, 0]}
        position={ [ -23, 6, 33.25]} 
        material={ material }
        size={.8}
        >
                minus esse architecto?
        </Text3D>

        <mesh 
                receiveShadow
                position={  [ -23.79, 7, 26.75 ] }
                scale={ 7}
                rotation={[0, Math.PI / 1 ,0]}
                >
        <boxGeometry args={[.2, 1.6, 2]}/>
        <meshBasicMaterial color={Earthy} roughness={0.3}/>
        </mesh>

        <Text3D {...textConfig} position={ [-23.4, 13.68, 7.52]} rotation={[0, Math.PI / 2, 0]} material={ material } >
                Water Features:
        </Text3D>

        <Text3D {...textConfig} position={ [-23.75, 13.68, -27.84]} rotation={[0, Math.PI / 2, 0]} material={ material }>
                Bathroom:
        </Text3D>

        <Text3D 
                position={ [21, 13.7, 31.87]}
                rotation={[0, Math.PI / .8, 0]}
                material={ material }
                {...serviceConfig}
                >
                Appointments
        </Text3D>
        
        <mesh 
                receiveShadow
                position={  [ 18.9, 14.1, 34.5 ] }
                scale={ 2}
                rotation={[0, Math.PI / .57 ,0]}
                onClick={ (ScheMenuClick) } 
                onPointerEnter={ () => { document.body.style.cursor = 'pointer' } }
                onPointerLeave={ () => { document.body.style.cursor = 'default' } }
                >
        <boxGeometry args={[.2, 1, 4.4]}/>
        <meshBasicMaterial color={Contrast} roughness={0.3}/>
        </mesh>

                <Text3D 
                position={ [15.2, 13.7, 38.3]}
                rotation={[0, Math.PI / .8, 0]}
                {...serviceConfig}
        >
                X
        </Text3D>

        <mesh 
                receiveShadow
                position={  [ 15, 14.1, 38.5 ] }
                scale={ 2}
                rotation={[0, Math.PI / .57 ,0]}
                onClick={ ScheMenuExit }
                onPointerEnter={ () => { document.body.style.cursor = 'pointer' } }
                onPointerLeave={ () => { document.body.style.cursor = 'default' } }
                >
        <boxGeometry args={[.2, .7, .75]}/>
        <meshBasicMaterial color={Exit} roughness={0.3}/>
        </mesh>

        <Text3D 
                position={ [20.2, 11.5, 33]}
                rotation={[0, Math.PI / .8, 0]}
                material={ material }
                {...serviceConfig}
        >
                Services
        </Text3D>

        <mesh 
                receiveShadow
                position={  [ 18.9, 11.9, 34.5 ] }
                scale={ 2}
                rotation={[0, Math.PI / .57 ,0]}
                onPointerEnter={ (serviceHover) } 
                onPointerLeave={ (serviceExit)  }
                >
        <boxGeometry args={[.2, .75, 3]}/>
        <meshBasicMaterial color={Contrast} roughness={0.3} />
        </mesh>

        <Text3D 
                position={ [20.2, 9.75, 33]}
                rotation={[0, Math.PI / .8, 0]}
                material={ material }
                {...serviceConfig}
        >
                Reviews
        </Text3D>

        <mesh 
                receiveShadow
                position={  [ 18.9, 10.13, 34.5 ] }
                scale={ 2}
                rotation={[0, Math.PI / .57 ,0]}
                onClick={ (ReviewHover) } 
                onPointerEnter={ () => { document.body.style.cursor = 'pointer' } }
                onPointerLeave={ () => { document.body.style.cursor = 'default' } }
                >
        <boxGeometry args={[.2, .75, 3]}/>
        <meshBasicMaterial color={Contrast} roughness={0.3}/>
        </mesh>

        <Text3D 
                position={ [15.9, 9.75, 37.05]}
                rotation={[0, Math.PI / .8, 0]}
                {...serviceConfig}
        >
                X
        </Text3D>

        <mesh 
                receiveShadow
                position={  [ 15.9, 10.13, 37.5 ] }
                scale={ 2}
                rotation={[0, Math.PI / .57 ,0]}
                onClick={ ReviewExit }
                onPointerEnter={ () => { document.body.style.cursor = 'pointer' } }
                onPointerLeave={ () => { document.body.style.cursor = 'default' } }
                >
        <boxGeometry args={[.2, .7, .75]}/>
        <meshBasicMaterial color={Exit} roughness={0.3}/>
        </mesh>

        <mesh 
                receiveShadow
                position={  [ 19.32, 12.24, 34.82 ] }
                scale={ 7}
                rotation={[0, Math.PI / .57 ,0]}
                >
        <boxGeometry args={[.2, 1, 2]}/>
        <meshBasicMaterial color={Earthy} roughness={0.3} />
        </mesh>
        </>
}