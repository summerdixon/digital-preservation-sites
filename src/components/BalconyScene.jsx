import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

function SlidingPanorama() {
  const texture = useTexture('/assets/images/balcony.jpg');
  texture.wrapS = THREE.RepeatWrapping;
  texture.repeat.set(1, 1);

  const materialRef = useRef();

  useFrame(() => {
    if (materialRef.current) {
      materialRef.current.map.offset.x += 0.0001;
    }
  });

  return (
    <mesh position={[0, 0, -5]}>
      <planeGeometry args={[25, 12]} />
      <meshBasicMaterial
        ref={materialRef}
        map={texture}
        side={THREE.FrontSide}
      />
    </mesh>
  );
}

function SetInitialCameraDirection() {
  const { camera } = useThree();

  useEffect(() => {
    camera.lookAt(0, 0, -5);
  }, [camera]);

  return null;
}

export default function BalconyScene() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <Canvas camera={{ position: [0, 0, 0], fov: 75 }}>
        <SetInitialCameraDirection />
        <SlidingPanorama />
      </Canvas>

      {/* Quote Overlay */}
<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 text-gray-800 px-6 py-4 rounded-lg shadow-lg max-w-xl text-center text-lg leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
  “I have what I wanted — the light; the dry, always refreshing warmth; the spaciousness compared with Princeton.”
</div>


    </div>
  );
}