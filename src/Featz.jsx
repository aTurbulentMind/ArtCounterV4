import { Environment, useTexture,  useGLTF} from '@react-three/drei'

export default function Featz()
{
    const { nodes } = useGLTF('./model/baked-featz.glb')
    
    const bakedTexture = useTexture('./model/baked-featz.jpg')
    bakedTexture.flipY = false

    return <>

        <mesh 
        geometry={ nodes.bakedFeatz.geometry} 
        position={ [-14.6, 2, -2.6] }
        rotation={[0, Math.PI / .635, 0]}
        >
        <meshBasicMaterial 
            map={ bakedTexture } />
         </mesh>

    </>
}