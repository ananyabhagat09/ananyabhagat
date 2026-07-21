import React from "react";
import { useGLTF } from "@react-three/drei";

export default function AboutMe(props) {
    const { scene } = useGLTF("/models/AboutMe.glb");

    return (
        <group
            position={[-9.876, 70.311, -4.071]}
            rotation={[Math.PI / 2, 0, 0]}
            {...props}
        >
            <primitive object={scene} />
        </group>
    );
}

useGLTF.preload("/models/AboutMe.glb");