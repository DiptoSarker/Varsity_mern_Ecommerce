"use client";

import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HeadsetDraco from "./HeadsetDraco";

function page() {
  return (
    <div className="hero-banner-image">
      <Canvas style="width:1860px height: 2750px">
        <Stage environment="city" intensity={0.9}>
          <HeadsetDraco />
        </Stage>

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

export default page;
