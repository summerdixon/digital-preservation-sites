import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

function SlidingPanorama() {
  const texture = useTexture('/assets/images/balcony.jpg');
  texture.wrapS = THREE.RepeatWrapping;
  texture.repeat.set(1, 1); // repeat horizontally

  const materialRef = useRef();

  useFrame(() => {
    if (materialRef.current) {
      materialRef.current.map.offset.x += 0.0001; // slow slide to the left
    }
  });

  return (
    <mesh position={[0, 0, -5]}>
      <planeGeometry args={[25, 12]} />
      <meshBasicMaterial
        ref={materialRef}
        map={texture}
        side={THREE.FrontSide}
        transparent={false}
      />
    </mesh>
  );
}

export default function BalconyScene() {
  return (
    <div className="w-full h-full overflow-hidden">
      <Canvas camera={{ position: [0, 0, 0], fov: 75 }}>
        <SlidingPanorama />
      </Canvas>
    </div>
  );
}