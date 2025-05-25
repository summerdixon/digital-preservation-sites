import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Scene() {
  return (
    <Canvas style={{ height: '80vh' }}>
      <ambientLight intensity={0.5} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="skyblue" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}

export default Scene;