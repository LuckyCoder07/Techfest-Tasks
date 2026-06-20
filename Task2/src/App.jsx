import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll, Environment, Preload } from '@react-three/drei';

import CyberGeometry from './components/CyberGeometry.jsx';
import HTMLContent from './components/HTMLContent.jsx';
import ParticlesBackground from './components/ParticlesBackground.jsx';

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#030305' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <color attach="background" args={['#030305']} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#00f0ff" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#7a00ff" />
        
        <Suspense fallback={null}>
          <Environment preset="city" />
          <ScrollControls pages={5} damping={0.2}>
            <CyberGeometry />
            <ParticlesBackground />
            <Scroll html style={{ width: '100%' }}>
              <HTMLContent />
            </Scroll>
          </ScrollControls>
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
