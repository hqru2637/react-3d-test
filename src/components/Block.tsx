"use client";
import * as React from 'react';
import { Color, Vector3, useLoader } from '@react-three/fiber';
import { Mesh } from 'three';
import { TextureLoader, NearestFilter } from 'three';

export const textures = {
  stone: 'stone.png',
  dirt: 'dirt.png'
} as const;

type BlockProps = {
  position: Vector3;
  color?: Color;
  texture: keyof typeof textures;
}

export default function Block(props: BlockProps) {
  const mesh = React.useRef<Mesh>(null!);
  const texture = useLoader(TextureLoader, textures[props.texture]);
  texture.minFilter = texture.magFilter = NearestFilter;
  texture.generateMipmaps = false;

  return (
    <mesh 
      position={props.position}
      ref={mesh}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
