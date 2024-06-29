"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stats } from '@react-three/drei';
import Box from '@/components/Box';
import Block from '@/components/Block';
import { fillBlocks } from '@/utils';

export default function CanvasWrapper() {
  
  const blocks = fillBlocks(
    { x: -10, y: 0, z: -10 },
    { x: 10, y: 0, z: 10 },
    'dirt'
  );

  return (
    <Canvas gl={{ antialias: false }} camera={{ fov: 80 }}>
      <OrbitControls />
      <Stats />
      <color attach="background" args={['#e0fdff']} />
      <ambientLight />
      <directionalLight />
      <fog attach="fog" color={'#fff'} near={3} far={30} />
      <pointLight position={[10, 10, 10]} />
      {...blocks}
    </Canvas>
  );
}