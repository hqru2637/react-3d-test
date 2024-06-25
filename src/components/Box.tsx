"use client";
import * as React from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

type Position = [x: number, y: number, z: number];
type BoxProps = {
  position: Position;
}

export default function Box(props: BoxProps) {
  const mesh = React.useRef<Mesh>(null!);
  const [hovered, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  useFrame(() => (mesh.current.rotation.x += 0.01));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}
