import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';

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

    const navigate = useNavigate();

  return (
    <div className="relative w-full h-full overflow-hidden">
      <Canvas camera={{ position: [0, 0, 0], fov: 75 }}>
        <SetInitialCameraDirection />
        <SlidingPanorama />
      </Canvas>

      <div className="flex flex-col items-center">
                <button
                    className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-gray-700/90 text-white px-6 py-4 rounded-lg shadow-lg max-w-3xl text-center text-m leading-relaxed" style={{ fontFamily: "'DM Mono', monospace" }}
                    title="Return to the floor plan"
                    onClick={() => navigate('/mann')}
                >
                    Return to the Floor Plan
                </button>
            </div>

      {/* Quote Overlay */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-70 text-gray-800 px-6 py-4 rounded-lg shadow-lg max-w-3xl text-center text-m leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
        “I am working under outward conditions for which I cannot be grateful enough — in the most beautiful work room I have ever had. I wish you could see the country around our house and the view of the ocean; the garden with its palm, olive, pepper, lemon and eucalyptus trees, the luxuriant flowers, the grass plots, which were being mowed a few days after the seed was sown. Bright sensory impressions are not to be sneezed at in such times; the sky is bright almost all year long and sheds an incomparable, all beautifying light.”
        <br></br> -Thomas Mann, 1942
        </div>

    </div>
  );
}