/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: nimzu (https://sketchfab.com/nimzuk)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/foxs-islands-163b68e09fcc47618450150be7785907
Title: Fox's islands
*/

import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber"; //Esta biblioteca se utiliza para integrar la creación de gráficos en 3D con React de una manera declarativa y basada en componentes.
import { a } from "@react-spring/three";
import islandScene from "../assets/3d/island.glb";

const Island = ({isRotating, setIsRotating,...props}) => {
  const islandRef = useRef();
    //La función useRef() es un Hook en React que te permite crear una referencia a un valor que no se necesita para renderizar. Aquí te dejo algunos detalles sobre su utilidad:

    // Referencia a un valor: useRef() te permite referenciar un valor que no se necesita para renderizar1. Esto es útil cuando necesitas acceder a un valor dentro de una función de efecto, pero no quieres que la función de efecto se ejecute cada vez que cambia el valor1.

    // Manipulación del DOM: useRef() también se puede usar para referenciar un elemento del DOM directamente2. Esto puede ser útil cuando necesitas interactuar con el DOM de una manera que no está soportada por React2.

    // Persistencia de datos entre renderizados: A diferencia de useState, useRef() no causa un nuevo renderizado cuando su valor cambia1. Esto lo hace útil para almacenar datos que quieres que persistan entre renderizados, pero que no necesitan causar un renderizado cuando cambian1.
  const {gl, viewport} = useThree(); 
    //se utiliza para obtener acceso al contexto WebGL (gl) y a la información sobre las dimensiones de la ventana de visualización (viewport) de la escena en Three.js, lo que puede ser útil para realizar configuraciones específicas o realizar operaciones gráficas en el contexto 3D.

    //   useThree() es un gancho (hook) proporcionado por @react-three/fiber que se utiliza para acceder a la instancia de Three.js y a varias propiedades asociadas a la escena 3D.

    // gl se refiere al contexto WebGL de la instancia de Three.js. Este objeto gl proporciona acceso a las funciones de WebGL subyacentes y es esencial para realizar operaciones de gráficos en el navegador.

    // viewport es una propiedad que contiene información sobre el tamaño y las dimensiones de la ventana de visualización (view) de la escena en Three.js. Puede incluir detalles como el ancho (width), el alto (height), la relación de aspecto (aspect), entre otros.
  const { nodes, materials } = useGLTF(islandScene);
  
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dumpingFactor = 0.95; //Esta linea me permite que cuando haga el scroll que tan rapido esta se mueva

  const handlePointerDown = e => {
    e.stopPropagation(); // Este método se utiliza para detener la propagación del evento a través del árbol de eventos. 
    e.preventDefault(); //Este método se utiliza para prevenir el comportamiento predeterminado asociado al evento.
    setIsRotating(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    lastX.current = clientX;
  }
  //handlePointerDown se encarga de gestionar un evento de clic del mouse o táctil, detener su propagación, evitar el comportamiento predeterminado, establecer un estado para indicar que se está realizando una rotación y almacenar la posición horizontal del evento para su referencia posterior.

  const handlePointerUp = e => {
    e.stopPropagation();
    e.preventDefault(); 
    setIsRotating(false);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    const delta = (clientX - lastX.current) / viewport.width; // Calcula el cambio en la posición horizontal (delta) en función del ancho de la ventana de visualización (viewport.width).

    islandRef.current.rotation.y += delta * 0.01 * Math.PI;  // Actualiza la rotación en el eje Y del objeto referenciado por 'islandRef'.

    lastX.current = clientX;  // Actualiza la última posición registrada en lastX.current.

    rotationSpeed.current = delta * 0.01 * Math.PI; // Actualiza la velocidad de rotación registrada en rotationSpeed.current.
  }
  const handlePointerMove = e => {
    e.stopPropagation();
    e.preventDefault(); 

    if(isRotating)
      {
        handlePointerUp(e)
      }
  }
  
  const handleKeyDown = (e) => {
    if(e.key === "ArrowLeft")
      {
        if(!isRotating){
          setIsRotating(true);
        }

        islandRef.current.rotation.y += 0.01 * Math.PI;
      }
    else if(e.key === "ArrowRight")
      {
        if (!isRotating) {
          setIsRotating(true);
        } 
        islandRef.current.rotation.y -= 0.01 * Math.PI; 
      }
  }

  const handleKeyUp = (e) => {
    if(e.key === "ArrowLeft" || e.key === "ArrowRight")
      {
        setIsRotating(false);
      }
  }

  useEffect(() => {
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("pointerup", handlePointerUp);
    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("keydown",handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("pointerup", handlePointerUp);
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("keydown",handleKeyDown);
    }
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove])
  return (
    <a.group ref={islandRef} {...props}>
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
}


// El componente <mesh> en react-three-fiber representa un objeto en una escena 3D

// geometry={nodes.polySurface944_tree_body_0.geometry}: Esta línea está asignando una geometría específica al objeto. En este caso, la geometría se está obteniendo de nodes.polySurface944_tree_body_0.geometry. La geometría define la forma del objeto1.

// material={materials.PaletteMaterial001}: Esta línea está asignando un material específico al objeto. En este caso, el material se está obteniendo de materials.PaletteMaterial001. El material define cómo se ve la superficie del objeto, incluyendo su color, si es brillante o mate, etc
export {Island}