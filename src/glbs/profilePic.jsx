import { useTexture,  useGLTF } from '@react-three/drei'

export default function ProfPic()
{
    const { nodes } = useGLTF('./model/profPic.glb')

    const bakedTexture = useTexture('./model/test.png')

    return <>
        <mesh 
        geometry={ nodes.profPic.geometry} 
        position={ [-16, 8.25, 43] }
        rotation={[0, Math.PI / 2, 0]} 
        >
        <meshBasicMaterial 
            map={ bakedTexture } 
            />
        </mesh>

    </>
}
{/*

*/}