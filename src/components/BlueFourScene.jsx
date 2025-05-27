import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { useTexture, PointerLockControls } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

function BlueFourRoom() {
  const [windowWall, ...paintingTextures] = useTexture([
    '/assets/images/blue_four_1.jpg',
    '/assets/images/refuge.jpg',
    '/assets/images/gross_kromsdorf_iii.jpg',
    '/assets/images/abstract_head.png',
    '/assets/images/locker_fest.jpg',
    '/assets/images/violet_lips.png',
    '/assets/images/possibilities_at_sea.jpg',
    '/assets/images/magic_sea.jpg',
  ]);

  const floorTexture = useTexture('/assets/images/mann_study_5.jpg');

  const paintingPositions = [
    [-2.7, 2.8], [-1.0, 2.8], [0.7, 2.8], [2.4, 2.8],
    [-1.7, 1.2], [0, 1.2], [1.7, 1.2],
  ];

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 4, 0]} intensity={0.8} />

      {/* Window wall (front) */}
      <mesh position={[0, 2, -3]}>
        <planeGeometry args={[8, 4]} />
        <meshStandardMaterial map={windowWall} side={THREE.DoubleSide} />
      </mesh>

      {/* Back wall - mini-gallery */}
      <mesh position={[0, 2, 3]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[8, 4]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Paintings on back wall */}
      {paintingTextures.map((tex, i) => (
        <mesh
        key={i}
        position={[paintingPositions[i][0], paintingPositions[i][1], 2.99]}
        rotation={[0, Math.PI, 0]}
      >
        <planeGeometry args={[0.975, 1.35]} />
        <meshStandardMaterial map={tex} side={THREE.FrontSide} />
      </mesh>
      
      ))}

      {/* Left wall - text info */}
      <mesh position={[-4, 2, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[8, 4]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Right wall - text info */}
      <mesh position={[4, 2, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[8, 4]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Floor */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <planeGeometry args={[6, 8]} />
        <meshStandardMaterial map={floorTexture} side={THREE.FrontSide} />
      </mesh>

      {/* Ceiling */}
      <mesh position={[0, 4, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </>
  );
}

function MovementControls() {
  const { camera } = useThree();
  const direction = useRef([0, 0]);

  useFrame(() => {
    const speed = 0.1;
    const forward = new THREE.Vector3();
    camera.getWorldDirection(forward);
    forward.y = 0;
    forward.normalize();
    const right = new THREE.Vector3();
    right.crossVectors(forward, camera.up).normalize();
    const moveDir = new THREE.Vector3();
    moveDir.add(forward.clone().multiplyScalar(direction.current[0]));
    moveDir.add(right.clone().multiplyScalar(direction.current[1]));
    camera.position.add(moveDir.multiplyScalar(speed));

    const limit = 2.5;
    camera.position.x = THREE.MathUtils.clamp(camera.position.x, -limit, limit);
    camera.position.z = THREE.MathUtils.clamp(camera.position.z, -limit, limit);
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
    const handleKeyUp = () => {
      direction.current = [0, 0];
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

export default function BlueFourRoomScene() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 2, 3], fov: 75 }}>
        <BlueFourRoom />
        <MovementControls />

        <ambientLight intensity={0.7} />

      </Canvas>
    </div>
  );
}