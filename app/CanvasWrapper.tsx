"use client";
import { Canvas } from '@react-three/fiber';
import Box from '@/components/Box';
import { OrbitControls } from '@react-three/drei';

export default function CanvasWrapper() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />
      <fog attach="fog" color={'#fff'} near={1} far={20} />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 1, -6]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
}