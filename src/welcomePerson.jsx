import { useTexture,  useGLTF } from '@react-three/drei'

export default function WelcomePerson()
{
    const { nodes } = useGLTF('./model/baked-welcome.glb')
    
    const bakedTexture = useTexture('./model/baked-welcome.jpg')
    bakedTexture.flipY = false
    
    return <  >
        <mesh 
        geometry={ nodes.WelcPerson.geometry } 
        position={ [ 16, 4, 34 ] }
        rotation={[0, Math.PI / 1.4, 0]}
        >
        <meshBasicMaterial 
            map={ bakedTexture } />
        </mesh>
    </>
}