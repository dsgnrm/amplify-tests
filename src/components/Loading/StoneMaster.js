/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { Box, useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function StoneMaster(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    `${process.env.PUBLIC_URL}/assets/threed/stones/stonetwo.gltf`
  );

  const STONE_MATERIAL = new THREE.MeshPhysicalMaterial({
    // wireframe: true,
    flatShading: true,
    color: "#0666CC",
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        position={[0, 0, 0]}
        geometry={nodes.mesh_0.geometry}
        material={STONE_MATERIAL}
      />
    </group>
  );
}

useGLTF.preload("/stonetwo.gltf");