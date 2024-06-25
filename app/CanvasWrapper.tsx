"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Box from '@/components/Box';
import Block from '@/components/Block';

export default function CanvasWrapper() {
  return (
    <Canvas gl={{ antialias: false }}>
      <OrbitControls />
      <ambientLight />
      <directionalLight />
      <fog attach="fog" color={'#fff'} near={1} far={20} />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 2, -2]} />
      <Block position={[0, 0, 0]} texture='stone' />
      <Block position={[1, 0, 0]} texture='dirt' />
      <Block position={[-1, 0, 0]} texture='dirt' />
      <Block position={[0, 1, 0]} texture='dirt' />
      <Block position={[1, 1, 0]} texture='stone' />
      <Block position={[-1, 1, 0]} texture='stone' />
    </Canvas>
  );
}