import { meshBounds, useTexture} from '@react-three/drei'
import { useControls } from 'leva'

export default function Rooms()
{

    const Green = '#318820'

    const eventHandler = (event) =>
    {
        console.log('the event occured')
    }

        return <>
//// Kitchen one
            <mesh receiveShadow
            position={  [ 7.17, 2.05, -27.75] }
            scale={ 7}
            rotation={[0, 0, Math.PI / 1.4]}
            onClick={ eventHandler }
            onPointerEnter={ () => { document.body.style.cursor = 'pointer' } }
            onPointerLeave={ () => { document.body.style.cursor = 'default' } }
            >
            <boxGeometry 
            args={[.05, 0.2, .17]}
            />
            <meshBasicMaterial 
            color={Green}
            roughness={0.3}
            />
            </mesh>

            <mesh receiveShadow
            position={  [ 7.17, 2.05, -26.25] }
            scale={ 7}
            rotation={[0, 0, Math.PI / 1.4]}
            onClick={ eventHandler }
            onPointerEnter={ () => { document.body.style.cursor = 'pointer' } }
            onPointerLeave={ () => { document.body.style.cursor = 'default' } }
            >
            <boxGeometry 
            args={[.05, 0.2, .17]}
            />
            <meshBasicMaterial 
            color={Green}
            roughness={0.3}
            />
            </mesh>

            <mesh receiveShadow
            position={  [ 7.17, 2.05, -29.25] }
            scale={ 7}
            rotation={[0, 0, Math.PI / 1.4]}
            onClick={ eventHandler }
            onPointerEnter={ () => { document.body.style.cursor = 'pointer' } }
            onPointerLeave={ () => { document.body.style.cursor = 'default' } }
            >
            <boxGeometry 
            args={[.05, 0.2, .17]}
            />
            <meshBasicMaterial 
            color={Green}
            roughness={0.3}
            />
            </mesh>

            <mesh receiveShadow
            position={  [ 8.56, 3.19, -29.25] }
            scale={ 7}
            rotation={[0, 0, Math.PI / 1.4]}
            onClick={ eventHandler }
            onPointerEnter={ () => { document.body.style.cursor = 'pointer' } }
            onPointerLeave={ () => { document.body.style.cursor = 'default' } }
            >
            <boxGeometry 
            args={[.05, 0.2, .17]}
            />
            <meshBasicMaterial 
            color={Green}
            roughness={0.3}
            />
            </mesh>

            <mesh receiveShadow
            position={  [ 8.56, 3.19, -26.25] }
            scale={ 7}
            rotation={[0, 0, Math.PI / 1.4]}
            onClick={ eventHandler }
            onPointerEnter={ () => { document.body.style.cursor = 'pointer' } }
            onPointerLeave={ () => { document.body.style.cursor = 'default' } }
            >
            <boxGeometry 
            args={[.05, 0.2, .17]}
            />
            <meshBasicMaterial 
            color={Green}
            roughness={0.3}
            />
            </mesh>

            <mesh receiveShadow
            position={  [ 8.56, 3.19, -27.75] }
            scale={ 7}
            rotation={[0, 0, Math.PI / 1.4]}
            onClick={ eventHandler }
            onPointerEnter={ () => { document.body.style.cursor = 'pointer' } }
            onPointerLeave={ () => { document.body.style.cursor = 'default' } }
            >
            <boxGeometry 
            args={[.05, 0.2, .17]}
            />
            <meshBasicMaterial 
            color={Green}
            roughness={0.3}
            />
            </mesh>

//// Kitchen Two 
            <mesh receiveShadow
            position={  [ 7.17, 2.05, -1.2] }
            scale={ 7}
            rotation={[0, 0, Math.PI / 1.4]}
            onClick={ eventHandler }
            onPointerEnter={ () => { document.body.style.cursor = 'pointer' } }
            onPointerLeave={ () => { document.body.style.cursor = 'default' } }
            >
            <boxGeometry 
            args={[.05, 0.2, .17]}
            />
            <meshBasicMaterial 
            color={Green}
            roughness={0.3}
            />
            </mesh>

            <mesh receiveShadow
            position={  [ 7.17, 2.05, 0.25] }
            scale={ 7}
            rotation={[0, 0, Math.PI / 1.4]}
            onClick={ eventHandler }
            onPointerEnter={ () => { document.body.style.cursor = 'pointer' } }
            onPointerLeave={ () => { document.body.style.cursor = 'default' } }
            >
            <boxGeometry 
            args={[.05, 0.2, .17]}
            />
            <meshBasicMaterial 
            color={Green}
            roughness={0.3}
            />
            </mesh>

            <mesh receiveShadow
            position={  [ 7.17, 2.05, 1.7] }
            scale={ 7}
            rotation={[0, 0, Math.PI / 1.4]}
            onClick={ eventHandler }
            onPointerEnter={ () => { document.body.style.cursor = 'pointer' } }
            onPointerLeave={ () => { document.body.style.cursor = 'default' } }
            >
            <boxGeometry 
            args={[.05, 0.2, .17]}
            />
            <meshBasicMaterial 
            color={Green}
            roughness={0.3}
            />
            </mesh>

            <mesh receiveShadow
            position={  [ 8.56, 3.19, 1.7] }
            scale={ 7}
            rotation={[0, 0, Math.PI / 1.4]}
            onClick={ eventHandler }
            onPointerEnter={ () => { document.body.style.cursor = 'pointer' } }
            onPointerLeave={ () => { document.body.style.cursor = 'default' } }
            >
            <boxGeometry 
            args={[.05, 0.2, .17]}
            />
            <meshBasicMaterial 
            color={Green}
            roughness={0.3}
            />
            </mesh>

            <mesh receiveShadow
            position={  [ 8.56, 3.19, 0.25] }
            scale={ 7}
            rotation={[0, 0, Math.PI / 1.4]}
            onClick={ eventHandler }
            onPointerEnter={ () => { document.body.style.cursor = 'pointer' } }
            onPointerLeave={ () => { document.body.style.cursor = 'default' } }
            >
            <boxGeometry 
            args={[.05, 0.2, .17]}
            />
            <meshBasicMaterial 
            color={Green}
            roughness={0.3}
            />
            </mesh>

            <mesh receiveShadow
            position={  [ 8.56, 3.19, -1.25] }
            scale={ 7}
            rotation={[0, 0, Math.PI / 1.4]}
            onClick={ eventHandler }
            onPointerEnter={ () => { document.body.style.cursor = 'pointer' } }
            onPointerLeave={ () => { document.body.style.cursor = 'default' } }
            >
            <boxGeometry 
            args={[.05, 0.2, .17]}
            />
            <meshBasicMaterial 
            color={Green}
            roughness={0.3}
            />
            </mesh>

        

            //// Water Features

            <mesh receiveShadow
            position={  [ -9.47, 3.14, 1.5] }
            scale={ 7}
            rotation={[0, 0, Math.PI / -1.4]}
            onClick={ eventHandler }
            onPointerEnter={ () => { document.body.style.cursor = 'pointer' } }
            onPointerLeave={ () => { document.body.style.cursor = 'default' } }
            >
            <boxGeometry 
            args={[.05, 0.2, .17]}
            />
            <meshBasicMaterial 
            color={Green}
            roughness={0.3}
            />
            </mesh>

            <mesh receiveShadow
            position={  [ -9.47, 3.14, .08] }
            scale={ 7}
            rotation={[0, 0, Math.PI / -1.4]}
            onClick={ eventHandler }
            onPointerEnter={ () => { document.body.style.cursor = 'pointer' } }
            onPointerLeave={ () => { document.body.style.cursor = 'default' } }
            >
            <boxGeometry 
            args={[.05, 0.2, .17]}
            />
            <meshBasicMaterial 
            color={Green}
            roughness={0.3}
            />
            </mesh>
            
            <mesh receiveShadow
            position={  [ -9.47, 3.14, -1.4] }
            scale={ 7}
            rotation={[0, 0, Math.PI / -1.4]}
            onClick={ eventHandler }
            onPointerEnter={ () => { document.body.style.cursor = 'pointer' } }
            onPointerLeave={ () => { document.body.style.cursor = 'default' } }
            >
            <boxGeometry 
            args={[.05, 0.2, .17]}
            />
            <meshBasicMaterial 
            color={Green}
            roughness={0.3}
            />
            </mesh>

            <mesh receiveShadow
            position={  [ -8.04, 2.04, 1.5] }
            scale={ 7}
            rotation={[0, 0, Math.PI / -1.4]}
            onClick={ eventHandler }
            onPointerEnter={ () => { document.body.style.cursor = 'pointer' } }
            onPointerLeave={ () => { document.body.style.cursor = 'default' } }
            >
            <boxGeometry 
            args={[.05, 0.2, .17]}
            />
            <meshBasicMaterial 
            color={Green}
            roughness={0.3}
            />
            </mesh>

            <mesh receiveShadow
            position={  [ -8.04, 2.04, .08] }
            scale={ 7}
            rotation={[0, 0, Math.PI / -1.4]}
            onClick={ eventHandler }
            onPointerEnter={ () => { document.body.style.cursor = 'pointer' } }
            onPointerLeave={ () => { document.body.style.cursor = 'default' } }
            >
            <boxGeometry 
            args={[.05, 0.2, .17]}
            />
            <meshBasicMaterial 
            color={Green}
            roughness={0.3}
            />
            </mesh>

            <mesh receiveShadow
            position={  [ -8.04, 2.04, -1.4] }
            scale={ 7}
            rotation={[0, 0, Math.PI / -1.4]}
            onClick={ eventHandler }
            onPointerEnter={ () => { document.body.style.cursor = 'pointer' } }
            onPointerLeave={ () => { document.body.style.cursor = 'default' } }
            >
            <boxGeometry 
            args={[.05, 0.2, .17]}
            />
            <meshBasicMaterial 
            color={Green}
            roughness={0.3}
            />
            </mesh>

            //// Bathroom
            <mesh receiveShadow
            position={  [ -8.04, 2.04, -26.45] }
            scale={ 7}
            rotation={[0, 0, Math.PI / -1.4]}
            onClick={ eventHandler }
            onPointerEnter={ () => { document.body.style.cursor = 'pointer' } }
            onPointerLeave={ () => { document.body.style.cursor = 'default' } }
            >
            <boxGeometry 
            args={[.05, 0.2, .17]}
            />
            <meshBasicMaterial 
            color={Green}
            roughness={0.3}
            />
            </mesh>

            <mesh receiveShadow
            position={  [ -8.04, 2.04, -27.84] }
            scale={ 7}
            rotation={[0, 0, Math.PI / -1.4]}
            onClick={ eventHandler }
            onPointerEnter={ () => { document.body.style.cursor = 'pointer' } }
            onPointerLeave={ () => { document.body.style.cursor = 'default' } }
            >
            <boxGeometry 
            args={[.05, 0.2, .17]}
            />
            <meshBasicMaterial 
            color={Green}
            roughness={0.3}
            />
            </mesh>

            <mesh receiveShadow
            position={  [ -8.04, 2.04, -29.3] }
            scale={ 7}
            rotation={[0, 0, Math.PI / -1.4]}
            onClick={ eventHandler }
            onPointerEnter={ () => { document.body.style.cursor = 'pointer' } }
            onPointerLeave={ () => { document.body.style.cursor = 'default' } }
            >
            <boxGeometry 
            args={[.05, 0.2, .17]}
            />
            <meshBasicMaterial 
            color={Green}
            roughness={0.3}
            />
            </mesh>

            <mesh receiveShadow
            position={  [ -9.44, 3.14, -26.45] }
            scale={ 7}
            rotation={[0, 0, Math.PI / -1.4]}
            onClick={ eventHandler }
            onPointerEnter={ () => { document.body.style.cursor = 'pointer' } }
            onPointerLeave={ () => { document.body.style.cursor = 'default' } }
            >
            <boxGeometry 
            args={[.05, 0.2, .17]}
            />
            <meshBasicMaterial 
            color={Green}
            roughness={0.3}
            />
            </mesh>

            <mesh receiveShadow
            position={  [ -9.44, 3.14, -27.84] }
            scale={ 7}
            rotation={[0, 0, Math.PI / -1.4]}
            onClick={ eventHandler }
            onPointerEnter={ () => { document.body.style.cursor = 'pointer' } }
            onPointerLeave={ () => { document.body.style.cursor = 'default' } }
            >
            <boxGeometry 
            args={[.05, 0.2, .17]}
            />
            <meshBasicMaterial 
            color={Green}
            roughness={0.3}
            />
            </mesh>

            <mesh receiveShadow
            position={  [ -9.44, 3.14, -29.3] }
            scale={ 7}
            rotation={[0, 0, Math.PI / -1.4]}
            onClick={ eventHandler }
            onPointerEnter={ () => { document.body.style.cursor = 'pointer' } }
            onPointerLeave={ () => { document.body.style.cursor = 'default' } }
            >
            <boxGeometry 
            args={[.05, 0.2, .17]}
            />
            <meshBasicMaterial 
            color={Green}
            roughness={0.3}
            />
            </mesh>
    </>
}