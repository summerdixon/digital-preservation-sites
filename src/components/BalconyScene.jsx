import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

const timelineData = [
  { year: 1875, label: 'Thomas Mann Born' },
  { year: 1929, label: 'Nobel Prize in Literature' },
  { year: 1942, label: 'Moves to the Mann House' },
  { year: 1952, label: 'Returns to Europe' },
  { year: 1955, label: 'Thomas Mann Dies' },
  { year: 2016, label: 'House Purchased by Germany' },
  { year: 2018, label: 'Thomas Mann House Opens' },
];

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

      {/* Title */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 px-8">
        <div className="p-4 text-3xl flex bg-white bg-opacity-90 rounded-lg" style={{ fontFamily: "'DM Mono', monospace" }}>
          Timeline
        </div>
      </div>

      {/* Timeline Overlay */}
      <div className="absolute top-1/3 left-0 right-0 px-8">
        <div className="bg-white bg-opacity-90 rounded-lg p-4 text-m flex gap-8 overflow-x-auto whitespace-nowrap max-w-full" style={{ fontFamily: "'Lora', serif" }}>
          {timelineData.map((event, i) => (
            <div key={i} className="flex-shrink-0">
              <strong>{event.year}</strong><br />
              {event.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}