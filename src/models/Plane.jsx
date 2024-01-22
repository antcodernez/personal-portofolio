import React, { useEffect, useRef } from 'react'
import PlaneScene from "../assets/3d/plane.glb";
import { useAnimations, useGLTF } from '@react-three/drei';

// Se uso el spread operator para solo pasar las demas props en el componente mesh
const Plane = ({isRotating, ...props}) => {
  const ref = useRef();
  const {scene, animations} = useGLTF(PlaneScene); // es un hook de @react-three/drei que facilita la carga y manipulación de modelos 3D en formato GLTF/GLB.
  const {actions} = useAnimations(animations, ref);

  
  useEffect( () => {  
    if(isRotating)
      {
        actions["Take 001"].play();
      }
    else
      {
        actions["Take 001"].stop()
        // setTimeout(() => actions["Take 001"].stop(), 1400);
      }
  },[actions, isRotating])
  return (
    <mesh {...props} ref={ref}>
        <primitive object={scene}/>
    </mesh>
  )
}

export { Plane }
