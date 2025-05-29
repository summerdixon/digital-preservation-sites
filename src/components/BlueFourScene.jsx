import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { useTexture, PointerLockControls, Html } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
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
  const whiteWallTexture = useTexture('/assets/images/white_wall.jpg');
  const newspaperTexture = useTexture('assets/images/blue_four_newspaper.png');

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
        <meshStandardMaterial map={whiteWallTexture} />
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
        <meshStandardMaterial map={whiteWallTexture} />
      </mesh>

      {/* Right wall - text info */}
      <mesh position={[4, 2, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[8, 4]} />
        <meshStandardMaterial map={whiteWallTexture} />
      </mesh>

      {/* Floor */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <planeGeometry args={[6, 8]} />
        <meshStandardMaterial map={floorTexture} side={THREE.FrontSide} />
      </mesh>

      {/* Ceiling */}
      <mesh position={[0, 4, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial map={whiteWallTexture} side={THREE.DoubleSide}/>
      </mesh>

      {/* Blue Four Newspaper */}
    <mesh position={[3.99, 2, 0]} rotation={[0, -Math.PI / 2, 0]}>
    <planeGeometry args={[2.5, 2]} />
    <meshStandardMaterial map={newspaperTexture} />
    </mesh>

    {/* Gallery RectAreaLight */}
    <rectAreaLight
    width={2.5}
    height={3}
    intensity={0.1}
    color={'#fffde8'}
    position={[3.9, 2, 0]}
    rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
    />

    <FactHotspot
        position={[2.4, 2.1, 2.98]}
        fact="Wassily Kandinsky, Locker-Fest."
    />

    <FactHotspot
        position={[0.7, 2.1, 2.98]}
        fact="Alexej von Jawlensky, abstract head: black and white."
    />

    <FactHotspot
        position={[-1, 2.1, 2.98]}
        fact="Lyonel Feininger, Gross-Kromsdorf III."
    />

    <FactHotspot
        position={[-2.7, 2.1, 2.98]}
        fact="Paul Klee, Refuge."
    />

    <FactHotspot
        position={[1.7, 0.5, 2.98]}
        fact="Lyonel Feininger, Magic Sea."
    />

    <FactHotspot
        position={[0, 0.5, 2.98]}
        fact="Paul Klee, Possibilities at Sea."
    />

    <FactHotspot
        position={[-1.7, 0.5, 2.98]}
        fact="Alexej von Jawlensky, Violet Lips."
    />

    </>
  );
}

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
        z: 3 - 0.3,
        yMin: 1.6,
        yMax: 2.4,
      };
  
      camera.position.x = THREE.MathUtils.clamp(camera.position.x, -roomSize.x, roomSize.x);
      camera.position.z = THREE.MathUtils.clamp(camera.position.z, -roomSize.z, roomSize.z);
      camera.position.y = THREE.MathUtils.clamp(camera.position.y, roomSize.yMin, roomSize.yMax);
    });
  
    return null;
  }

function SetInitialCameraDirection() {
    const { camera } = useThree();
  
    useEffect(() => {
        camera.position.set(0,2,0);
        camera.lookAt(0, 2, -5);
    }, [camera]);
  
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
          <circleGeometry args={[0.1, 32]} />
          <meshBasicMaterial color="orange" side={THREE.DoubleSide}/>
        </mesh>
  
        {open && (
          <Html center>
            <div className="bg-gray-900/80 text-white p-2 rounded shadow w-[10rem] text-sm text-center" style={{ fontFamily: "'Lora', serif" }}>
              {fact}
            </div>
          </Html>
        )}
      </group>
    );
  }  

export default function BlueFourRoomScene() {
  return (
    <div className="w-full h-screen">
      <div className="absolute bottom-12 left-20 z-10 bg-white/80 p-4 rounded shadow text-gray-800 max-w-sm text-center">
        <h2 className="text-xl font-semibold mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>
          Galka Scheyer's Blue Four Room
        </h2>
        <p className="text-m" style={{ fontFamily: "'Lora', sans-serif" }}>
          Use WASD to move and the left and right arrow keys to rotate. Click on orange circles to discover each artwork.
        </p>
      </div>
      <Canvas camera={{ position: [0, 2, -3], fov: 75 }}>
        <BlueFourRoom />
        <PlayerControls />
        <SetInitialCameraDirection />

        <ambientLight intensity={0.7} />

      </Canvas>
    </div>
  );
}