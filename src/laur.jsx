import { Environment, useTexture,  useGLTF, OrbitControls } from '@react-three/drei'

export default function Laur()
{
    const { nodes } = useGLTF('./model/baked-laur.glb')
    
    const bakedTexture = useTexture('./model/baked-laur.jpg')
    bakedTexture.flipY = false

    return <  >

        <mesh 
        geometry={ nodes.laur.geometry } 
        position={ [ -15.8, 3.25, 34 ] }
        rotation={[0, Math.PI / 5, 0]}
        >
        <meshBasicMaterial 
            map={ bakedTexture } />
         </mesh>

    </>
}