"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function House() {
  const gltf = useGLTF("/Models/house.glb"); // Make sure path is correct
  return <primitive object={gltf.scene} scale={0.5} />;
}

export default function HouseModel() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas camera={{ position: [2, 2, 5] }}>
        <ambientLight />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <House />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
