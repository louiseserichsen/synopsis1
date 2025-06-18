import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function ToothModel({ setShowPopup, position = [0, 0, 0], scale = [1.5, 1.5, 1.5] }) {
  const { scene } = useGLTF('/modelaftænder2.glb'); // Sørg for at modellen er i public-mappen

  // Anvend skala
  scene.scale.set(scale[0], scale[1], scale[2]);

  return (
    <primitive
      object={scene}
      onClick={() => setShowPopup((prev) => !prev)} // Toggle popup når modellen klikkes
      position={position} // Brug den position, der sendes som prop
    />
  );
}

