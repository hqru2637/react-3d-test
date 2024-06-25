"use client";
import * as React from 'react';
import { Color, Vector3, useFrame, useLoader } from '@react-three/fiber';
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
  const paths = Object.keys(textures);
  const loadedTextures = useLoader(TextureLoader, paths.map(k => (textures as Record<string, string>)[k])).map(t => {
    t.minFilter = t.magFilter = NearestFilter;
    t.generateMipmaps = false;
    return t;
  });

  return (
    <mesh position={props.position} ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={loadedTextures[paths.findIndex(p => p === props.texture)]} />
    </mesh>
  );
}
