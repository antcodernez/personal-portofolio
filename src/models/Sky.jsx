import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei'

import skyScene from "../assets/3d/sky.glb";

const Sky = ({isRotating}) => {
  const sky = useGLTF(skyScene)
   // Carga el modelo 3D utilizando la función useGLTF de @react-three/drei
  // El parámetro de useGLTF debería ser la ruta o URL del modelo 3D

  //La propiedad object es un prop que se utiliza para especificar el objeto de Three.js que se va a renderizar en la escena.
  const skyRef = useRef();
  
  useFrame((_, delta) => {
    if(isRotating)
      {
        skyRef.current.rotation.y += 0.5 * delta;
      }
  });
  return (
    <mesh ref={skyRef}>
      <primitive 
        object={sky.scene}
      />
      {/*El componente primitive se utiliza para renderizar el modelo 3D cargado a través de useGLTF en la escena de Three.js. En lugar de usar un componente más específico, como mesh u otros disponibles en @react-three/drei, se utiliza primitive para proporcionar una mayor flexibilidad en la manipulación y representación del objeto 3D. */}
    </mesh>
  )
}

export { Sky } 
