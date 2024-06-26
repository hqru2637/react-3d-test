"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Box from '@/components/Box';
import Block from '@/components/Block';
import { fillBlocks } from '@/utils';

export default function CanvasWrapper() {
  const blocks = fillBlocks(
    { x: -3, y: -1, z: -3 },
    { x: 3, y: -1, z: 3 },
    'dirt'
  );

  return (
    <Canvas gl={{ antialias: false }}>
      <OrbitControls />
      <ambientLight />
      <directionalLight />
      <fog attach="fog" color={'#fff'} near={3} far={30} />
      <pointLight position={[10, 10, 10]} />
      {...blocks}
    </Canvas>
  );
}