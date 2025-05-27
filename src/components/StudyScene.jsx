import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PointerLockControls, useTexture } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

function PlayerControls() {
    const { camera } = useThree();
    const direction = useRef([0, 0]); // [forward/backward, left/right]
  
    useFrame(() => {
      const speed = 0.1;
    
      // Get forward vector (movement direction)
      const forward = new THREE.Vector3();
      camera.getWorldDirection(forward);
      forward.y = 0;
      forward.normalize();
    
      // Get right vector
      const right = new THREE.Vector3();
      right.crossVectors(camera.up, forward).normalize();
    
      // Compute movement
      const moveDir = new THREE.Vector3();
      moveDir
        .add(forward.clone().multiplyScalar(direction.current[0]))  // forward/back
        .add(right.clone().multiplyScalar(direction.current[1]));   // left/right
    
      // Apply movement
      camera.position.add(moveDir.multiplyScalar(speed));
    
      // Clamp camera position within room bounds
      const roomSize = {
        x: 4 - 0.3,
        z: 4 - 0.3,
        yMin: 1.6,
        yMax: 2.4,
      };
    
      camera.position.x = THREE.MathUtils.clamp(camera.position.x, -roomSize.x, roomSize.x);
      camera.position.z = THREE.MathUtils.clamp(camera.position.z, -roomSize.z, roomSize.z);
      camera.position.y = THREE.MathUtils.clamp(camera.position.y, roomSize.yMin, roomSize.yMax);
    });    
  
    useEffect(() => {
      const handleKeyDown = (e) => {
        switch (e.key.toLowerCase()) {
          case 'w':
          case 'arrowup':
            direction.current[0] = 1;
            break;
          case 's':
          case 'arrowdown':
            direction.current[0] = -1;
            break;
          case 'a':
          case 'arrowleft':
            direction.current[1] = -1;
            break;
          case 'd':
          case 'arrowright':
            direction.current[1] = 1;
            break;
        }
      };
  
      const handleKeyUp = (e) => {
        switch (e.key.toLowerCase()) {
          case 'w':
          case 'arrowup':
          case 's':
          case 'arrowdown':
            direction.current[0] = 0;
            break;
          case 'a':
          case 'arrowleft':
          case 'd':
          case 'arrowright':
            direction.current[1] = 0;
            break;
        }
      };
  
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
      };
    }, []);
  
    return <PointerLockControls />;
  }  

function Room() {
  const [north, south, east, west, floor, ceiling] = useTexture([
    '/assets/images/mann_study_1.jpg',  // back wall
    '/assets/images/mann_study_2.jpg',  // front wall
    '/assets/images/mann_study_3.jpg',  // left wall
    '/assets/images/mann_study_4.jpg',  // right wall
    '/assets/images/mann_study_5.jpg',  // floor
    '/assets/images/mann_study_6.jpg'   // ceiling
  ]);
  

  return (
    <>
      {/* Back wall (north) */}
      <mesh position={[0, 2, -4]}>
        <planeGeometry args={[8, 4]} />
        <meshStandardMaterial map={north} side={2} />
      </mesh>

      {/* Front wall (south) */}
      <mesh position={[0, 2, 4]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[8, 4]} />
        <meshStandardMaterial map={south} side={2} />
      </mesh>

      {/* Left wall (west) */}
      <mesh position={[-4, 2, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[8, 4]} />
        <meshStandardMaterial map={west} side={2} />
      </mesh>

      {/* Right wall (east) */}
      <mesh position={[4, 2, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[8, 4]} />
        <meshStandardMaterial map={east} side={2} />
      </mesh>

      {/* Floor */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial map={floor} side={2} />
      </mesh>

      {/* Ceiling */}
      <mesh position={[0, 4, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial map={ceiling} side={2} />
      </mesh>
    </>
  );
}

export default function StudyScene() {
  return (
    <div className="relative w-full h-screen">

    {/* Text Overlay */}
    <div className="absolute bottom-20 left-20 z-10 bg-white/50 p-4 rounded shadow text-gray-800 max-w-sm">
    <h2 className="text-xl font-semibold mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>Thomas Mann's Study</h2>
    <p className="text-m" style={{ fontFamily: "'Lora', sans-serif" }}>
      Use your mouse and arrow keys or WASD to explore the study. This room was where Mann worked during his American exile.
    </p>
    </div>

    <Canvas
        camera={{
            position: [0, 2, 0],
            fov: 75,
            near: 0.1,
            far: 1000
        }}
        onCreated={({ camera }) => {

            camera.rotation.x = 0; 
            camera.rotation.y = Math.PI; 
        }}
    >

    <ambientLight intensity={0.3} />

    <directionalLight
    position={[-1, 0.1, 0]}
    intensity={0.5}
    castShadow
    shadow-mapSize-width={1024}
    shadow-mapSize-height={1024}
    />

    <directionalLight
    position={[1, 0.1, 0]}
    intensity={0.5}
    castShadow
    shadow-mapSize-width={1024}
    shadow-mapSize-height={1024}
    />

    <directionalLight
    position={[0, 0.1, 1]}
    intensity={0.5}
    castShadow
    shadow-mapSize-width={1024}
    shadow-mapSize-height={1024}
    />

    <directionalLight
    position={[0, 0.1, -1]}
    intensity={0.5}
    castShadow
    shadow-mapSize-width={1024}
    shadow-mapSize-height={1024}
    />

    <Room />
    <PlayerControls />
    </Canvas>

    </div>
  );
}