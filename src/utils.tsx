import Block, { type textures } from './components/Block';

interface Vec3 {
  x: number;
  y: number;
  z: number;
}

export function fillBlocks(start: Vec3, end: Vec3, block: keyof typeof textures) {
  const blocks = [];
  for (let x = start.x; x <= end.x; x++) {
    for (let y = start.y; y <= end.y; y++) {
      for (let z = start.z; z <= end.z; z++) {
        blocks.push(<Block position={[x, y, z]} texture={block}/>);
      }
    }    
  }
  return blocks;
}