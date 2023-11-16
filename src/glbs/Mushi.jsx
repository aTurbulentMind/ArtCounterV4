import { useTexture,  useGLTF } from '@react-three/drei'

export default function Mushi()
{
    const { nodes } = useGLTF('./model/baked-mush.glb')

    const bakedTexture = useTexture('./model/baked-mush.jpg')
    bakedTexture.flipY = false

    return <>

        <mesh 
        geometry={ nodes.bakedMush.geometry} 
        position={ [-9, 2.1, -14] }
        >
        <meshBasicMaterial 
            map={ bakedTexture } />
        </mesh>
    </>
}