import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, MeshDistortMaterial } from '@react-three/drei';

export default function CyberGeometry() {
  const meshRef = useRef();
  const wireframeRef = useRef();
  const scroll = useScroll();

  useFrame((state, delta) => {
    const offset = scroll.offset; // 0 to 1
    
    // Rotate constantly over time but also based on scroll
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 + offset * Math.PI * 2;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 + offset * Math.PI * 2;
    
    wireframeRef.current.rotation.x = state.clock.elapsedTime * -0.1 + offset * Math.PI * 2;
    wireframeRef.current.rotation.y = state.clock.elapsedTime * -0.2 + offset * Math.PI * 2;
    
    // Scale down and move as we scroll
    const scale = 1 - offset * 0.5;
    meshRef.current.scale.set(scale, scale, scale);
    wireframeRef.current.scale.set(scale * 1.1, scale * 1.1, scale * 1.1);
    
    // Move up or down based on scroll
    meshRef.current.position.y = offset * 5;
    wireframeRef.current.position.y = offset * 5;
    
    // Move slightly left to make room for text
    const targetX = -1.5 * offset;
    meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.1;
    wireframeRef.current.position.x += (targetX - wireframeRef.current.position.x) * 0.1;
  });

  return (
    <group>
      {/* Inner solid geometry */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 2]} />
        <MeshDistortMaterial 
          color="#00f0ff" 
          envMapIntensity={1} 
          clearcoat={1} 
          clearcoatRoughness={0.1} 
          metalness={0.8}
          roughness={0.2}
          distort={0.4} 
          speed={2} 
        />
      </mesh>
      
      {/* Outer wireframe */}
      <mesh ref={wireframeRef}>
        <icosahedronGeometry args={[2.1, 1]} />
        <meshStandardMaterial 
          color="#7a00ff" 
          wireframe 
          emissive="#7a00ff"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
}
