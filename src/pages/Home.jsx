import { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";

import { Loader } from "../components/Loader";
import { Island } from "../models/Island";
import { Sky } from "../models/Sky";
import { Bird } from "../models/Bird";
import { Plane } from "../models/Plane";
import {HomeInfo} from "../components/HomeInfo";

import drugs from "../assets/drugs.mp3";
import { soundoff, soundon } from "../assets/icons";

const Home = () => {

  const audioRef = useRef(new Audio(drugs));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setPlayingMusic] = useState(false);

  useEffect(() => {
    if(isPlayingMusic)
      {
        audioRef.current.play();
      }

    return () => {
      audioRef.current.pause();
    }
  }, [isPlayingMusic])

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [-1, -1.7, -18];
    let rotation = [0.1, 12, 0];

    if(window.innerWidth < 768)
      {
        screenScale = [0.3, 0.3, 0.3]; 
        screenPosition = [1, -5.4, -20]; 
      }
    else
      {
        screenScale = [0.4, 0.4, 0.4]; 
      }

    return [screenScale, screenPosition, rotation];

  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if(window.innerWidth < 768)
      {
        screenScale = [1.5, 1.5, 1.5]; 
        screenPosition = [0, -1.5, 0]; 
      }
    else
      {
        screenScale = [3, 3, 3]; 
        screenPosition = [0, -4, -4];
      }

    return [screenScale, screenPosition];

  }
  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();
  return (
    <section className='w-full h-screen relative'> 
      
      <div className="absolute top-24 left-0 right-0 z-10 flex items-center justify-center text-white">
        {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>

      <Canvas 
        className={`w-fill h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : "cursor-grab"}`}
        camera={{near:0.1, far: 1000}}

      >
        <Suspense fallback={<Loader />}>
          <directionalLight 
            position={[1, 1 ,1]}
            intensity={2}
          /> 
          {/*  <directionalLight /> simula la luz como la del sol que viene de un lado o otro*/}

          <ambientLight 
            intensity={0.5}
          />
          {/* ambientLight ilumina todos los objetos en la escena equitativamente sin castear las sombras     */}    
          <hemisphereLight 
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Bird 
            isRotating={isRotating}
          />

          <Sky isRotating={isRotating}/>
          <Island 
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}   
         />
         <Plane 
          isRotating={isRotating}
          planeScale={planeScale}
          planePosition={planePosition}
          rotation={[0, 20, 0]}
         />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-2 left-2">
        <img 
          src={!isPlayingMusic ? soundoff : soundon}
          alt="sound"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  )
}

export  {Home}
