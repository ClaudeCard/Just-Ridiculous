import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import TreeOfLight from './components/TreeOfLight'
import Aetheron from './components/Aetheron'
import AetheronMenu from './components/AetheronMenu'

function App() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="relative w-full h-screen bg-black text-white">
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <TreeOfLight />
        <Aetheron setShowMenu={setShowMenu} />
        <OrbitControls enableZoom={false} />
      </Canvas>
      {showMenu && <AetheronMenu />}
    </div>
  )
}

export default App
