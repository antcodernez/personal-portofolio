import React from 'react'
import PlaneScene from "../assets/3d/plane.glb";
import { useGLTF } from '@react-three/drei';

// Se uso el spread operator para solo pasar las demas props en el componente mesh
const Plane = ({isRotating, ...props}) => {
  const {scene, animations} = useGLTF(PlaneScene);
  

  return (
    <mesh {...props}>
        <primitive object={scene}/>
    </mesh>
  )
}

export { Plane }
