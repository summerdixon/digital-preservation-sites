import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture, Html } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

function PlayerControls() {
  const { camera } = useThree();
  const direction = useRef([0, 0]); // [forward/backward, left/right]
  const rotation = useRef(0); // left/right rotation

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key.toLowerCase()) {
        case 'w':
          direction.current[0] = 0.25;
          break;
        case 's':
          direction.current[0] = -0.25;
          break;
        case 'a':
          direction.current[1] = -0.25;
          break;
        case 'd':
          direction.current[1] = 0.25;
          break;
        case 'arrowleft':
          rotation.current = 0.25;
          break;
        case 'arrowright':
          rotation.current = -0.25;
          break;
      }
    };

    const handleKeyUp = (e) => {
      switch (e.key.toLowerCase()) {
        case 'w':
        case 's':
          direction.current[0] = 0;
          break;
        case 'a':
        case 'd':
          direction.current[1] = 0;
          break;
        case 'arrowleft':
        case 'arrowright':
          rotation.current = 0;
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

  useFrame(() => {
    const speed = 0.1;
    const angle = camera.rotation.y;

    const forward = new THREE.Vector3(Math.sin(angle), 0, Math.cos(angle)).negate();
    const right = new THREE.Vector3(Math.sin(angle + Math.PI / 2), 0, Math.cos(angle + Math.PI / 2));

    const moveDir = new THREE.Vector3();
    moveDir
      .add(forward.multiplyScalar(direction.current[0]))
      .add(right.multiplyScalar(direction.current[1]));

    camera.position.add(moveDir.multiplyScalar(speed));
    camera.rotation.y += rotation.current * 0.03;

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

  return null;
}

function FactHotspot({ position, fact }) {
  const [open, setOpen] = useState(false);

  return (
    <group position={position}>
      <mesh
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
      >
        <circleGeometry args={[0.15, 32]} />
        <meshBasicMaterial color="orange" side={THREE.DoubleSide}/>
      </mesh>

      {open && (
        <Html center>
          <div className="bg-gray-900/80 text-white p-4 rounded shadow w-[22rem] text-sm text-center" style={{ fontFamily: "'Lora', serif" }}>
            {fact}
          </div>
        </Html>
      )}
    </group>
  );
}

function Room() {
  const [north, south, east, west, floor, ceiling] = useTexture([
    '/assets/images/mann_study_1.jpg',
    '/assets/images/mann_study_2.jpg',
    '/assets/images/mann_study_3.jpg',
    '/assets/images/mann_study_4.jpg',
    '/assets/images/mann_study_5.jpg',
    '/assets/images/mann_study_6.jpg',
  ]);

  return (
    <>
      <mesh position={[0, 2, -4]}>
        <planeGeometry args={[8, 4]} />
        <meshStandardMaterial map={north} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, 2, 4]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[8, 4]} />
        <meshStandardMaterial map={south} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[-4, 2, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[8, 4]} />
        <meshStandardMaterial map={west} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[4, 2, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[8, 4]} />
        <meshStandardMaterial map={east} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial map={floor} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, 4, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial map={ceiling} side={THREE.DoubleSide} />
      </mesh>

      <FactHotspot
        position={[3.5, 2.5, -3.9]}
        fact="Thomas Mann wrote much of 'Doctor Faustus' in this study during his American exile."
      />
      <FactHotspot
        position={[0, 2.5, 3.9]}
        fact="Mann’s desk overlooked the Pacific Ocean, a reminder of the world he left behind."
      />
    </>
  );
}

export default function StudyScene() {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute bottom-24 left-20 z-10 bg-white/50 p-4 rounded shadow text-gray-800 max-w-sm">
        <h2 className="text-xl font-semibold mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>
          Thomas Mann's Study
        </h2>
        <p className="text-m" style={{ fontFamily: "'Lora', sans-serif" }}>
          Use WASD to move and the left and right arrow keys to rotate. Click on orange circles to learn about Mann's writing.
        </p>
      </div>

      <Canvas
        camera={{ position: [0, 2, 0], fov: 75, near: 0.1, far: 1000 }}
        onCreated={({ camera }) => {
          camera.rotation.x = 0;
          camera.rotation.y = Math.PI;
        }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[-1, 0.1, 0]} intensity={0.5} castShadow />
        <directionalLight position={[1, 0.1, 0]} intensity={0.5} castShadow />
        <directionalLight position={[0, 0.1, 1]} intensity={0.5} castShadow />
        <directionalLight position={[0, 0.1, -1]} intensity={0.5} castShadow />
        <Room />
        <PlayerControls />
      </Canvas>
    </div>
  );
}