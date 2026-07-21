import React from "react";
import { useGLTF } from "@react-three/drei";

export default function DetailT(props) {
  const { nodes, materials } = useGLTF("/models/DetailT-v1.glb");

  return (
    <group {...props} dispose={null}>
      <group
        position={[-9.876, 70.311, -4.071]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text.geometry}
          material={materials["Material.008"]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text_1.geometry}
          material={nodes.Text_1.material}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text_2.geometry}
          material={materials["Material.009"]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text_3.geometry}
          material={materials["Frame.002"]}
        />

        {/* Career Compass */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text_4.geometry}
          material={materials["Project Three.002"]}
        />

        {/* Selected Works + About Me text */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text_5.geometry}
          material={materials["Material.010"]}
        />

        {/* Harvard */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text_6.geometry}
          material={materials["Project One.002"]}
        />

        {/* Accessible Canvas */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text_7.geometry}
          material={materials["Project Two.002"]}
        />

        {/* Illustration Gallery */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text_8.geometry}
          material={materials["Project Four.002"]}
        />

        {/* Kerala Photo */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text_9.geometry}
          material={materials["Photo of Me.002"]}
        />

        {/* Guitar */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text_10.geometry}
          material={materials["Musser gap snow.002"]}
        />

        {/* Blue Jacket */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text_11.geometry}
          material={materials["View.002"]}
        />

        {/* Wonder Woman */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text_12.geometry}
          material={materials["David Vista.002"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/DetailT-v1.glb");